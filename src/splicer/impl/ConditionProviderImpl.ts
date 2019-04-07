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

export class ConditionProviderImpl extends AbstractQueryPart implements ICondition {
    private condition: ICondition;
    public and(condition: ICondition): ICondition;
    public and(sql: string): ICondition;
    public and(sql: string, ...args: any[]): ICondition;
    public and(condition: ICondition | string, ...args: any[]): ICondition {
        return undefined;
    }

    public andExists(select: ISelect<any>): ICondition {
        return undefined;
    }

    public andNot(condition: ICondition): ICondition;
    public andNot(sql: string): ICondition;
    public andNot(sql: string, ...args: any[]): ICondition;
    public andNot(condition: ICondition | string, ...args: any[]): ICondition {
        return undefined;
    }

    public andNotExists(select: ISelect<any>): ICondition {
        return undefined;
    }

    public or(condition: ICondition): ICondition;
    public or(sql: string): ICondition;
    public or(sql: string, ...args: any[]): ICondition;
    public or(condition: ICondition | string, ...args: any[]): ICondition {
        return undefined;
    }

    public orExists(select: ISelect<any>): ICondition {
        return undefined;
    }

    public orNot(condition: ICondition): ICondition;
    public orNot(sql: string): ICondition;
    public orNot(sql: string, ...args: any[]): ICondition;
    public orNot(condition: ICondition | string, ...args: any[]): ICondition {
        return undefined;
    }

    public orNotExists(select: ISelect<any>): ICondition {
        return undefined;
    }

    protected getWhere(): ICondition {
        // return this.hasWhere() ? this.condition : Joint.noCondition();
        return null;
    }
    protected hasWhere(): boolean {
        return null;

        // return this.condition != null && !(this.condition instanceof NoCondition);
    }
}
