/**
 *
 * 功能描述:
 *
 * @className NoCondition
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/4/8 9:50
 */
import {AbstractCondition} from "./AbstractCondition";
import {IContext} from "../IContext";

export class NoCondition extends AbstractCondition {
    public static INSTANCE = new  NoCondition();
    public accept(ctx: IContext): void {
        ctx.sql("1 = 1");
    }
}
