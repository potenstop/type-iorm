/**
 *
 * 功能描述:
 *
 * @className FalseCondition
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/4/16 16:50
 */
import {AbstractCondition} from "./AbstractCondition";
import {IFalse} from "../IFalse";
import {IContext} from "../IContext";

export class FalseCondition extends AbstractCondition implements IFalse {
    public static readonly INSTANCE: FalseCondition = new FalseCondition();
    public accept(ctx: IContext): void {
        ctx.sql("1 = 0");
    }
}
