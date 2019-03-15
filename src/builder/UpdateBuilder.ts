import {LoggerFactory} from "type-slf4";
import {BaseBuilder} from "./BaseBuilder";
import {ObjectType} from "../type/ObjectType";
import {SelectWhereStepImpl} from "../splicer/impl/SelectWhereStepImpl";

/**
 *
 * 功能描述: update语句构造
 *
 * @className UpdateBuilder
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/10 10:15
 */
const logger = LoggerFactory.getLogger("type-iorm.builder.InsertBuilder");
export class UpdateBuilder <Entity> extends BaseBuilder<Entity> {
    constructor(entityTarget: ObjectType<Entity>, asTableName: string) {
        super(entityTarget, asTableName);
        logger.debug(`start insert builder bid=${this.bid}`);
    }
    public getQuery(): string {
        return this.createUpdateExpression();
    }
    public static into<T>(entityTarget: ObjectType<T>);
    public static into<T>(entityTarget: ObjectType<T>, asName: string);
    /**
     * 方法功能描述: 根据实体new builder
     * @author yanshaowen
     * @date 2019/3/7 16:42
     * @param entityTarget    数据实体
     * @return
     */
    public static into<T>(entityTarget: ObjectType<T>, asName?: string) {
        return new UpdateBuilder<T>(entityTarget, asName);
    }
    public set(entity: Entity) {
        return this;
    }
    public where() {
        return new SelectWhereStepImpl().where();
    }
    /**
     * 方法功能描述: 创建update语句表达式
     * @author yanshaowen
     * @date 2019/3/6 20:40
     * @return
     */
    private createUpdateExpression(): string {
        return "";
    }

    /**
     * 方法功能描述: 执行sql
     * @author yanshaowen
     * @date 2019/3/7 16:41
     * @return  影响的条数
     */
    public async execute(): Promise<number> {
        return 1;
    }
}
