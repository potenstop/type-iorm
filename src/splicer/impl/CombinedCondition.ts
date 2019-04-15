/**
 *
 * 功能描述:
 *
 * @className CombinedCondition
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/4/7 12:06
 */
import {AbstractCondition} from "./AbstractCondition";
import {Operator} from "./Operator";
import {ICondition} from "../ICondition";
import {IContext} from "../IContext";

export class CombinedCondition extends AbstractCondition {
    private operator: Operator;
    private conditions: ICondition[];
    constructor(operator: Operator, left: ICondition, right: ICondition) {
        super();
        this.operator = operator;
        this.conditions = [];
        this.add(operator, left);
        this.add(operator, right);
    }
    private add(op: Operator, condition: ICondition): CombinedCondition {
        if (condition instanceof CombinedCondition) {
            if (condition.operator === op) {
                this.conditions.push(...condition.conditions);
            } else {
                this.conditions.push(condition);
            }
        } else {
            this.conditions.push(condition);
        }
        return this;
    }

    public accept(ctx: IContext): void {
    }

}
