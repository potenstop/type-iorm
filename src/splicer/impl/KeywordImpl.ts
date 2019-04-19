/**
 *
 * 功能描述:
 *
 * @className KeywordImpl
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/4/18 11:21
 */
import {AbstractQueryPart} from "./AbstractQueryPart";
import {IKeyword} from "../IKeyword";
import {IContext} from "../IContext";

export class KeywordImpl extends AbstractQueryPart implements IKeyword {
    // 原始
    private asIs: string;
    // 转为大写
    private upper: string;
    // 转为小写
    private lower: string;
    // 首字母大写
    private pascal: string;
    constructor(keyword: string) {
        super();

        this.asIs = keyword;
        this.upper = keyword.toUpperCase();
        this.lower = keyword.toLowerCase();
        this.pascal = keyword.length > 0 ? keyword.substring(0, 1).toUpperCase() + keyword.substring(1, keyword.length).toLowerCase() : keyword;
    }
    public accept(ctx: IContext): void {
        ctx.sql(this.upper, true);
    }

}
