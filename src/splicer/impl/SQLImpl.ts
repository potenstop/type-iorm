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

export class SQLImpl  extends AbstractQueryPart implements ISQL {
    private sql: string;
    private args: any[];
    constructor(sql: string, args: any[]) {
        super();
        this.sql = sql;
        this.args = args;
    }
    public toString(): string {
        return this.sql;
    }
}
