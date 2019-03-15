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

export interface ISelectHavingConditionStep extends ISelectOrderByStep {
    and(condition: ICondition): ISelectHavingConditionStep;
    and(sql: string): ISelectHavingConditionStep;
    and(sql: string, ...args: any[]): ISelectHavingConditionStep;

    andNot(condition: ICondition): ISelectHavingConditionStep;
    andNot(sql: string): ISelectHavingConditionStep;
    andNot(sql: string, ...args: any[]): ISelectHavingConditionStep;

    andExists(select: ISelect): ISelectHavingConditionStep;
    andNotExists(select: ISelect): ISelectHavingConditionStep;

    or(condition: ICondition): ISelectHavingConditionStep;
    or(sql: string): ISelectHavingConditionStep;
    or(sql: string, ...args: any[]): ISelectHavingConditionStep;

    orNot(condition: ICondition): ISelectHavingConditionStep;
    orNot(sql: string): ISelectHavingConditionStep;
    orNot(sql: string, ...args: any[]): ISelectHavingConditionStep;

    orExists(select: ISelect): ISelectHavingConditionStep;
    orNotExists(select: ISelect): ISelectHavingConditionStep;
}
