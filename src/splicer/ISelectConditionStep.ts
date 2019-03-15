/**
 *
 * 功能描述:
 *
 * @className ISelectConditionStep
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/13 11:35
 */
import {ISelectGroupByStep} from "./ISelectGroupByStep";
import {ICondition} from "./ICondition";
import {ISelect} from "./ISelect";

export interface ISelectConditionStep extends ISelectGroupByStep {
    and(condition: ICondition): ISelectConditionStep;
    and(sql: string): ISelectConditionStep;
    and(sql: string, ...args: any[]): ISelectConditionStep;

    andNot(condition: ICondition): ISelectConditionStep;
    andNot(sql: string): ISelectConditionStep;
    andNot(sql: string, ...args: any[]): ISelectConditionStep;

    andExists(select: ISelect): ISelectConditionStep;
    andNotExists(select: ISelect): ISelectConditionStep;

    or(condition: ICondition): ISelectConditionStep;
    or(sql: string): ISelectConditionStep;
    or(sql: string, ...args: any[]): ISelectConditionStep;

    orNot(condition: ICondition): ISelectConditionStep;
    orNot(sql: string): ISelectConditionStep;
    orNot(sql: string, ...args: any[]): ISelectConditionStep;

    orExists(select: ISelect): ISelectConditionStep;
    orNotExists(select: ISelect): ISelectConditionStep;
}
