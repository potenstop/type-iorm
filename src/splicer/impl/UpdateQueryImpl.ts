import {AbstractStoreQuery} from "./AbstractStoreQuery";
import {IUpdateQuery} from "../IUpdateQuery";
import {IContext} from "../IContext";
import {IField} from "../IField";
import {ISqlConnection} from "../../driver/ISqlConnection";
import {ObjectType} from "../../type/ObjectType";
import {FieldMapsForInsert} from "./FieldMapsForInsert";
import {ICondition} from "../ICondition";

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
    //private ConditionProviderImpl condition;
    constructor(connection: ISqlConnection, into: ObjectType<T>) {
        super(connection, into);
        // this.insertMaps = new FieldMapsForInsert(into);
    }
    public accept(ctx: IContext): void {
    }

    public addValues(map: Map<string, any>): void {
    }

    protected getValues(): Map<IField<any>, Object> {
        return undefined;
    }

    public addConditions(...condition: ICondition[]): void {

    }

}
