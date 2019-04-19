/**
 *
 * 功能描述:
 *
 * @className ExistsCondition
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/4/7 21:38
 */
import {AbstractCondition} from "./AbstractCondition";
import {ISelect} from "../ISelect";
import {IContext} from "../IContext";
import {Keywords} from "./Keywords";

export class ExistsCondition extends AbstractCondition {
    private query: ISelect<any>;
    private exists: boolean;
    constructor(query: ISelect<any> , exists: boolean) {
        super();
        this.query = query;
        this.exists = exists;
    }

    public accept(ctx: IContext): void {
        ctx.visitSql(this.exists ? Keywords.K_EXISTS : Keywords.K_NOT_EXISTS).sql(" (").formatIndentStart().formatNewLine().visitSql(this.query).formatIndentEnd().formatNewLine().sql(")");
    }

}
