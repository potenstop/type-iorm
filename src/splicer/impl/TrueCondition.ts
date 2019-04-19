/**
 *
 * 功能描述:
 *
 * @className TrueCondition
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/4/16 16:55
 */
import {AbstractCondition} from "./AbstractCondition";
import {ITrue} from "../ITrue";
import {IContext} from "../IContext";

export class TrueCondition extends AbstractCondition implements ITrue {
    public static readonly INSTANCE: TrueCondition = new TrueCondition();
    public accept(ctx: IContext): void {
        ctx.sql("1 = 1");
    }

}
