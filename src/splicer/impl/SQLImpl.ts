/**
 *
 * 功能描述:
 *
 * @className SQLImpl
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/4/7 11:41
 */
import {AbstractQueryPart} from "./AbstractQueryPart";
import {ISQL} from "../ISQL";
import {IObjectLiteral} from "../../type/IObjectLiteral";
import {IContext} from "../IContext";

export class SQLImpl  extends AbstractQueryPart implements ISQL {
    private sql: string;
    private args: IObjectLiteral;
    constructor(sql: string, args: IObjectLiteral) {
        super();
        this.sql = sql;
        this.args = args;
    }
    public toString(): string {
        return this.sql;
    }

    public accept(ctx: IContext): void {
    }
}
