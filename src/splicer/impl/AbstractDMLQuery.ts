/**
 *
 * 功能描述:
 *
 * @className AbstractDMLQuery
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/22 14:34
 */
import {AbstractQuery} from "./AbstractQuery";
import {ObjectType} from "../../type/ObjectType";
import {IResult} from "../IResult";
import {IContext} from "../IContext";
import {ISqlConnection} from "../../driver/ISqlConnection";

export abstract class AbstractDMLQuery<T> extends AbstractQuery {
    private returnedResult: IResult<any>;
    private table: ObjectType<T>;
    constructor(connection: ISqlConnection, table: ObjectType<T>) {
        super(connection);
        this.table = table;
    }
    public getResult(): IResult<any> {
        if (this.returnedResult == null) {

        }
        return this.returnedResult;
    }
    public abstract accept(ctx: IContext): void;
}
