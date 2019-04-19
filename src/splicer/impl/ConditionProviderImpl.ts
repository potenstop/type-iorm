/**
 *
 * 功能描述:
 *
 * @className ConditionProviderImpl
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/4/4 9:22
 */
import {AbstractQueryPart} from "./AbstractQueryPart";
import {ICondition} from "../ICondition";
import {ISelect} from "../ISelect";
import {Joint} from "./Joint";
import {NoCondition} from "./NoCondition";
import {Operator} from "./Operator";
import {IContext} from "../IContext";
import {IObjectLiteral} from "../../type/IObjectLiteral";

export class ConditionProviderImpl extends AbstractQueryPart implements ICondition {
    private condition: ICondition;

    public andExists(select: ISelect<any>): ICondition {
        return undefined;
    }

    public andNot(condition: ICondition): ICondition;
    public andNot(sql: string): ICondition;
    public andNot(sql: string, args: IObjectLiteral): ICondition;
    public andNot(condition: ICondition | string, args?: IObjectLiteral): ICondition {
        return undefined;
    }

    public andNotExists(select: ISelect<any>): ICondition {
        return undefined;
    }

    public or(condition: ICondition): ICondition;
    public or(sql: string): ICondition;
    public or(sql: string, args: IObjectLiteral): ICondition;
    public or(condition: ICondition | string, args?: IObjectLiteral): ICondition {
        return undefined;
    }

    public orExists(select: ISelect<any>): ICondition {
        return undefined;
    }

    public orNot(condition: ICondition): ICondition;
    public orNot(sql: string): ICondition;
    public orNot(sql: string, args: IObjectLiteral): ICondition;
    public orNot(condition: ICondition | string, args?: IObjectLiteral): ICondition {
        return undefined;
    }

    public orNotExists(select: ISelect<any>): ICondition {
        return undefined;
    }

    protected getWhere(): ICondition {
        return this.hasWhere() ? this.condition : Joint.noCondition();
    }
    protected hasWhere(): boolean {
        return this.condition != null && !(this.condition instanceof NoCondition);
    }
    public addConditions(conditions: ICondition[]): void;
    public addConditions(operator: Operator, conditions: ICondition): void;
    public addConditions(operator: Operator | ICondition[], conditions?: ICondition): void {
        let op: Operator = Operator.AND;
        if (!Array.isArray(operator)) {
            op = operator as Operator;
            if (this.hasWhere()) {
                this.condition = Joint.condition(op, this.getWhere(), conditions);
            } else {
                this.condition = conditions;
            }
        } else {
            Joint.condition(op, conditions);
        }

    }

    public accept(ctx: IContext): void {

    }

    public and(condition: ICondition): ICondition;
    public and(sql: string): ICondition;
    public and(sql: string, args: IObjectLiteral): ICondition;
    public and(condition: ICondition | string, args?: IObjectLiteral): ICondition {
        return undefined;
    }

    public not(): ICondition {
        return this.getWhere().not();
    }

}
