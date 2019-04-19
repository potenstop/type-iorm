/**
 *
 * 功能描述:
 *
 * @className NotCondition
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/4/19 18:15
 */
import {AbstractCondition} from "./AbstractCondition";
import {IContext} from "../IContext";
import {ICondition} from "../ICondition";
import {Keywords} from "./Keywords";

export class NotCondition extends AbstractCondition {
    private condition: ICondition;

    constructor(condition: ICondition) {
        super();
        this.condition = condition;
    }

    public accept(ctx: IContext): void {
        ctx.visitSql(Keywords.K_NOT).sql("(").visitSql(this.condition).sql(")");
    }

}
