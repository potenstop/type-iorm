/**
 *
 * 功能描述:
 *
 * @className AbstractCondition
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/4/4 9:36
 */
import {AbstractQueryPart} from "./AbstractQueryPart";
import {ICondition} from "../ICondition";
import {ISelect} from "../ISelect";
import {Joint} from "./Joint";

export abstract class AbstractCondition extends AbstractQueryPart implements ICondition {
    public and(condition: ICondition): ICondition;
    public and(sql: string): ICondition;
    public and(sql: string, ...args: any[]): ICondition;
    public and(condition: ICondition | string, ...args: any[]): ICondition {
        if (typeof condition === "string") {
            this.and(Joint.condition(condition, args));
        } else {
            Joint.and(this, condition);
        }
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

}
