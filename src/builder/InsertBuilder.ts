import {QueryExpression} from "../model/QueryExpression";
import {ISqlConnection} from "../driver/ISqlConnection";
import {BaseBuilder} from "./BaseBuilder";
import {LoggerFactory} from "type-slf4";
import {GenerateUtil} from "../util/GenerateUtil";
import {SqlBuilderError} from "../error/SqlBuilderError";
import {JSHelperUtil} from "../util/JSHelperUtil";
import {DateUtil} from "type-slf4/lib/util/DateUtil";
import {ObjectType} from "../type/ObjectType";

/**
 *
 * 功能描述: insert语句构造
 *
 * @className InsertBuilder
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/6 19:22
 */
const logger = LoggerFactory.getLogger("type-iorm.builder.InsertBuilder");
export class InsertBuilder<Entity> extends BaseBuilder<Entity> {
    constructor(entityTarget: ObjectType<Entity> ) {
        super(entityTarget);
        logger.debug(`start insert builder bid=${this.bid}`);
    }
    public getQuery(): string {
        const sql = this.createInsertExpression();
        return sql.trim();
    }
    /**
     * 方法功能描述: 执行sql
     * @author yanshaowen
     * @date 2019/3/7 16:41
     * @return
     */
    public async execute(): Promise<any> {
        const query = this.getQuery();
        this.mid = GenerateUtil.getMd5(query);
        logger.debug(`start insert execute bid=${this.bid},mid=${this.mid},sql=${query}`);
        return this.connection.query(query);
    }
    /**
     * 方法功能描述: 根据实体new builder
     * @author yanshaowen
     * @date 2019/3/7 16:42
     * @param entityTarget    数据实体
     * @return
     */
    public static into<T>(entityTarget: ObjectType<T>) {
        return new InsertBuilder<T>(entityTarget);
    }
    /**
     * 方法功能描述: insert多条或一条
     * @author yanshaowen
     * @date 2019/3/7 9:21
     * @param values  要插入的数据
     * @return
     */
    public values(values: Entity | Entity[]): this {
        this.expression.valuesSet =  values;
        return this;
    }
    /**
     * 方法功能描述: 创建insert语句表达式
     * @author yanshaowen
     * @date 2019/3/6 20:40
     * @return
     */
    private createInsertExpression() {
        let query = "INSERT INTO";
        const sqlBuilderError = new SqlBuilderError("");
        sqlBuilderError.bid = this.bid;
        const tableName = this.getTableName();
        if (!tableName) {
            sqlBuilderError.message = "Cannot get table name";
            throw sqlBuilderError;
        }
        query += ` ${tableName} `;
        if (!this.expression.valuesSet) {
            sqlBuilderError.message = "insert sql error, values is null";
            throw sqlBuilderError;
        }
        const tableFields = this.getTableFieldList();
        // inset的values
        const insertValue = [];
        // insert所有的字段
        let insertField = "";
        // 如果是insert 多条则需要判断每条所包含的字段是否一样 不一样则报错 一样则获取到所有的key
        if (!Array.isArray(this.expression.valuesSet)) {
            this.expression.valuesSet = [this.expression.valuesSet];
        }
        if (this.expression.valuesSet.length > 0) {
            let i = 0;
            this.expression.valuesSet.forEach((value) => {
                // 当前合法的value
                let currentValues = "";
                let  currentField = "";
                // 获取所有定义过的key是否有对应的值
                tableFields.forEach((column) => {
                    if (JSHelperUtil.isNotNull(value[column.beanName])) {
                        if (i === 0) {
                            insertField += column.columnName + " ,";
                        } else {
                            currentField += column.columnName + " ,";
                        }
                        let columnValue = value[column.beanName];
                        if (columnValue instanceof Date) {
                            columnValue = DateUtil.format(columnValue, "yyyy-MM-dd HH:mm:ss.SSS");
                        } else if (typeof columnValue === "object") {
                            columnValue = JSON.stringify(columnValue);
                        }
                        if (typeof columnValue === "string") {
                            currentValues = currentValues + "\"" + columnValue + "\" ,";
                        } else {
                            currentValues += value[column.beanName] + " ,";
                        }
                    }
                });
                // 判断key
                if (i !== 0 && currentField !== insertField) {
                    sqlBuilderError.message = `values fields unlikeness,values[0] fields=${insertField}, current foreach fields=${currentField}`;
                    throw sqlBuilderError;
                }
                currentValues = currentValues.substring(0, currentValues.length - 1);
                insertValue.push("(" + currentValues + ")");
                i++;
            });
            insertField = "( " + insertField.substring(0, insertField.length - 1) + ")";
            query = query + insertField + " values" + insertValue.toString();
        } else {
            sqlBuilderError.message = "values is empty";
            throw sqlBuilderError;
        }

        return query;
    }
}
