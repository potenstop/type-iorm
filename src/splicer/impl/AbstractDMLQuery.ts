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
import {ITable} from "../ITable";
import {IRecord} from "../IRecord";

export abstract class AbstractDMLQuery<R extends IRecord> extends AbstractQuery {
    private returnedResult: IResult<any>;
    private table: ITable<R>;
    constructor(connection: ISqlConnection, table: ITable<R>) {
        super(connection);
        this.table = table;
    }
    public abstract accept0(ctx: IContext): void;

    public getResult(): IResult<any> {
        if (this.returnedResult == null) {

        }
        return this.returnedResult;
    }

    public accept(ctx: IContext): void {
        // with
        this.accept0(ctx);
    }

}
