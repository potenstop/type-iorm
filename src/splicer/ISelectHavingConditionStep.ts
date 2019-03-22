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

export interface ISelectHavingConditionStep<T> extends ISelectOrderByStep<T> {
    and(condition: ICondition): ISelectHavingConditionStep<T>;
    and(sql: string): ISelectHavingConditionStep<T>;
    and(sql: string, ...args: any[]): ISelectHavingConditionStep<T>;

    andNot(condition: ICondition): ISelectHavingConditionStep<T>;
    andNot(sql: string): ISelectHavingConditionStep<T>;
    andNot(sql: string, ...args: any[]): ISelectHavingConditionStep<T>;

    andExists(select: ISelect<any>): ISelectHavingConditionStep<T>;
    andNotExists(select: ISelect<any>): ISelectHavingConditionStep<T>;

    or(condition: ICondition): ISelectHavingConditionStep<T>;
    or(sql: string): ISelectHavingConditionStep<T>;
    or(sql: string, ...args: any[]): ISelectHavingConditionStep<T>;

    orNot(condition: ICondition): ISelectHavingConditionStep<T>;
    orNot(sql: string): ISelectHavingConditionStep<T>;
    orNot(sql: string, ...args: any[]): ISelectHavingConditionStep<T>;

    orExists(select: ISelect<any>): ISelectHavingConditionStep<T>;
    orNotExists(select: ISelect<any>): ISelectHavingConditionStep<T>;
}
