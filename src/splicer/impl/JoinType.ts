/**
 *
 * 功能描述:
 *
 * @className JoinType
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/4/20 22:12
 */
import {IKeyword} from "../IKeyword";
import {Joint} from "./Joint";

export class JoinType {
    private sql: string;
    private keyword: IKeyword;
    private qualified: boolean;

    constructor(sql: string, qualified: boolean) {
        this.sql = sql;
        this.keyword = Joint.keyword(sql);
        this.qualified = qualified;
    }
    public toSql(): string {
        return this.sql;
    }
    public toKeyword(): IKeyword {
        return this.keyword;
    }
    public toQualified(): boolean {
        return this.qualified;
    }

}
