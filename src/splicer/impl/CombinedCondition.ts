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
import {JSHelperUtil} from "../../util/JSHelperUtil";
import {Joint} from "./Joint";
import {Keywords} from "./Keywords";
import {IKeyword} from "../IKeyword";

export class CombinedCondition extends AbstractCondition {
    private operator: Operator;
    private conditions: ICondition[];
    constructor(operator: Operator);
    constructor(operator: Operator, left: ICondition, right: ICondition);
    constructor(operator: Operator, left?: ICondition, right?: ICondition) {
        super();
        this.operator = operator;
        this.conditions = [];
        if (!JSHelperUtil.isNullOrUndefined(left)) {
            this.add(operator, left);
            this.add(operator, right);
        }
    }
    public add(op: Operator, condition: ICondition): CombinedCondition {
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
        if (this.conditions.length === 0) {
            if (this.operator === Operator.AND) {
                ctx.visitSql(Joint.trueCondition());
            } else {
                ctx.visitSql(Joint.falseCondition());
            }
        } else {
            const op: IKeyword = this.operator === Operator.AND ? Keywords.K_ADD : Keywords.K_OR;
            let separator: IKeyword = null;
            ctx.sql("(").formatIndentStart().formatNewLine();
            this.conditions.forEach((condition, i) => {
                if (i > 0) {
                    ctx.formatSeparator();
                }
                if (separator !== null) {
                    ctx.visitSql(separator).sql(" ");
                }
                ctx.visitSql(condition);
                separator = op;
            });
            ctx.formatIndentEnd().formatNewLine().sql(")");
        }
    }

}
