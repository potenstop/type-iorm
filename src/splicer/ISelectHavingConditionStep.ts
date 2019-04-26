/**
 *
 * 功能描述:
 *
 * @className ISelectHavingConditionStep
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/13 11:05
 */
import {ISelectOrderByStep} from "./ISelectOrderByStep";
import {ICondition} from "./ICondition";
import {ISelect} from "./ISelect";
import {IObjectLiteral} from "../type/IObjectLiteral";
import {IRecord} from "./IRecord";

export interface ISelectHavingConditionStep<R extends IRecord> extends ISelectOrderByStep<R> {
    and(condition: ICondition): ISelectHavingConditionStep<R>;
    and(sql: string): ISelectHavingConditionStep<R>;
    and(sql: string, args: IObjectLiteral): ISelectHavingConditionStep<R>;

    andNot(condition: ICondition): ISelectHavingConditionStep<R>;
    andNot(sql: string): ISelectHavingConditionStep<R>;
    andNot(sql: string, args: IObjectLiteral): ISelectHavingConditionStep<R>;

    andExists(select: ISelect<any>): ISelectHavingConditionStep<R>;
    andNotExists(select: ISelect<any>): ISelectHavingConditionStep<R>;

    or(condition: ICondition): ISelectHavingConditionStep<R>;
    or(sql: string): ISelectHavingConditionStep<R>;
    or(sql: string, args: IObjectLiteral): ISelectHavingConditionStep<R>;

    orNot(condition: ICondition): ISelectHavingConditionStep<R>;
    orNot(sql: string): ISelectHavingConditionStep<R>;
    orNot(sql: string, args: IObjectLiteral): ISelectHavingConditionStep<R>;

    orExists(select: ISelect<any>): ISelectHavingConditionStep<R>;
    orNotExists(select: ISelect<any>): ISelectHavingConditionStep<R>;
}
