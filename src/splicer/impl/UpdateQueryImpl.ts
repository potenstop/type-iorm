import {AbstractStoreQuery} from "./AbstractStoreQuery";
import {IUpdateQuery} from "../IUpdateQuery";
import {IContext} from "../IContext";
import {IField} from "../IField";
import {ISqlConnection} from "../../driver/ISqlConnection";
import {ObjectType} from "../../type/ObjectType";
import {ICondition} from "../ICondition";
import {ConditionProviderImpl} from "./ConditionProviderImpl";
import {Operator} from "./Operator";
import {Keywords} from "./Keywords";
import {FieldMapForUpdate} from "./FieldMapForUpdate";

/**
 *
 * 功能描述:
 *
 * @className UpdateQueryImpl
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/28 9:26
 */
export class UpdateQueryImpl<T> extends AbstractStoreQuery<T> implements IUpdateQuery<T> {
    private condition: ConditionProviderImpl;
    private table0: ObjectType<T>;
    private updateMap: FieldMapForUpdate;
    constructor(connection: ISqlConnection, table: ObjectType<T>) {
        super(connection, table);
        this.condition = new ConditionProviderImpl();
        this.table0 = table;

        this.updateMap = new FieldMapForUpdate(table);
        this.from = new TableList();
        this.condition = new ConditionProviderImpl();
    }
    public accept(ctx: IContext): void {
    }

    public addValues(map: Map<string, any>): void {
    }

    protected getValues(): Map<IField<any>, Object> {
        return undefined;
    }

    public addConditions(...condition: ICondition[]): void;
    public addConditions(operator: Operator, condition: ICondition): void;
    public addConditions(...condition: Array<ICondition | Operator>): void {
        if (condition.length > 0) {
            if ("andNot" in (condition[0] as any)) {
                const condition1 = condition as ICondition[];
                this.condition.addConditions(condition1);
            } else {
                this.condition.addConditions(condition[0] as Operator, condition[1] as ICondition);
            }
        }
    }

    public accept0(ctx: IContext): void {
        // update tableName
        ctx.visitSql(Keywords.K_UPDATE).sql(" ").visitTable(this.table0);
        // set
        ctx.visitSql(Keywords.K_SET).sql(" ");
    }

}
