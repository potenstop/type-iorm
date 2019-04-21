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
import {IObjectLiteral} from "../../type/IObjectLiteral";

export abstract class AbstractCondition extends AbstractQueryPart implements ICondition {
    constructor() {
        super();
    }
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

    public and(condition: ICondition): ICondition;
    public and(sql: string): ICondition;
    public and(sql: string, args: IObjectLiteral): ICondition;
    public and(condition: ICondition | string, args?: IObjectLiteral): ICondition {
        if (typeof condition === "string") {
            return this.and(Joint.condition(condition, args));
        } else {
            return Joint.and(this, condition);
        }
    }

    public not(): ICondition {
        const NotCondition = require("./NotCondition");
        return new NotCondition(this);
    }
}
