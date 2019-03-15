import {ISqlConnection} from "../driver/ISqlConnection";
import {QueryExpression} from "../model/QueryExpression";
import {GenerateUtil} from "../util/GenerateUtil";
import "reflect-metadata";
import {MetaConstant} from "../constants/MetaConstant";
import {SqlBuilderError} from "../error/SqlBuilderError";
import {ColumnMeta} from "../model/ColumnMeta";
import {ObjectType} from "../type/ObjectType";
import {CriteriaBuilder} from "./CriteriaBuilder";
/**
 *
 * 功能描述:基础构建
 *
 * @className BaseBuilder
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/6 19:27
 */
export abstract class BaseBuilder<Entity> {
    // 当前的实体
    protected entity: ObjectType<Entity>;
    // 别名
    protected asTableName: string;
    // 对应的连接
    protected connection: ISqlConnection;
    // 查询表达式类
    protected expression: QueryExpression;
    // 构建bid
    protected bid: string;
    // sql md5的mid
    protected mid: string;
    // 构建sql的代码 方便排除问题
    protected buildCode: string;
    constructor(entityTarget: ObjectType<Entity>, asTableName) {
        this.entity = entityTarget;
        this.asTableName = asTableName;
        this.expression = new QueryExpression();
        this.bid = GenerateUtil.getRandomId();
    }
    public setConnection(connection: ISqlConnection) {
        this.connection = connection;
        return this;
    }
    public getConnection() {
        return this.connection;
    }
    public abstract getQuery(): string;
    public abstract async execute(): Promise<any>;

    /**
     * 方法功能描述: 判断要使用meta时候的参数是否有传 没有则抛出异常
     * @author yanshaowen
     * @date 2019/3/8 9:12
     * @return
     */
    public checkParamsMeta() {
        if (!this.entity || !this.entity.constructor) {
            const sqlBuilderError = new SqlBuilderError("entity is null");
            sqlBuilderError.bid = this.bid;
            throw sqlBuilderError;
        }
    }
    /**
     * 方法功能描述: 获取表名称 没有返回类的名称
     * @author yanshaowen
     * @date 2019/3/7 19:09
     * @return
     */
    public getTableName() {
        this.checkParamsMeta();
        return  Reflect.getOwnMetadata(MetaConstant.ENTITY, this.entity) || this.entity.constructor.name;
    }
    /**
     * 方法功能描述: 获取设置的数据库字段映射
     * @author yanshaowen
     * @date 2019/3/8 9:10
     * @return
     */
    public getTableFieldMap(): Map<string, ColumnMeta> {
        const map = new Map<string, ColumnMeta>();
        const list = this.getTableFieldList();
        map.forEach( (columnMeta) => map.set(columnMeta.beanName, columnMeta));
        return map;
    }
    /**
     * 方法功能描述: 获取设置的数据库字段数组
     * @author yanshaowen
     * @date 2019/3/8 9:10
     * @return
     */
    public getTableFieldList(): Map<string, ColumnMeta> {
        this.checkParamsMeta();
        return  Reflect.getOwnMetadata(MetaConstant.COLUMN, this.entity) || [];
    }
    /**
     * 方法功能描述: 获取设置的bean name set
     * @author yanshaowen
     * @date 2019/3/8 9:10
     * @return
     */
    public getTableBeanSet(): Set<string> {
        const set = new Set();
        this.getTableFieldMap().forEach((value) => {
            set.add(value.beanName);
        });
        return set;
    }
}
