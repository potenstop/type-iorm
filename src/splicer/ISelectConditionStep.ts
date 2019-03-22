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

export interface ISelectConditionStep<T> extends ISelectGroupByStep<T> {
    and(condition: ICondition): ISelectConditionStep<T>;
    and(sql: string): ISelectConditionStep<T>;
    and(sql: string, ...args: any[]): ISelectConditionStep<T>;

    andNot(condition: ICondition): ISelectConditionStep<T>;
    andNot(sql: string): ISelectConditionStep<T>;
    andNot(sql: string, ...args: any[]): ISelectConditionStep<T>;

    andExists(select: ISelect<T>): ISelectConditionStep<T>;
    andNotExists(select: ISelect<T>): ISelectConditionStep<T>;

    or(condition: ICondition): ISelectConditionStep<T>;
    or(sql: string): ISelectConditionStep<T>;
    or(sql: string, ...args: any[]): ISelectConditionStep<T>;

    orNot(condition: ICondition): ISelectConditionStep<T>;
    orNot(sql: string): ISelectConditionStep<T>;
    orNot(sql: string, ...args: any[]): ISelectConditionStep<T>;

    orExists(select: ISelect<T>): ISelectConditionStep<T>;
    orNotExists(select: ISelect<T>): ISelectConditionStep<T>;
}
