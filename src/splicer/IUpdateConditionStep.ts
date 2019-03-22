/**
 *
 * 功能描述:
 *
 * @className IUpdateConditionStep
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/21 15:02
 */
import {IUpdateFinalStep} from "./IUpdateFinalStep";
import {ISelect} from "./ISelect";
import {ICondition} from "./ICondition";

export interface IUpdateConditionStep<T> extends IUpdateFinalStep<T> {
    and(condition: ICondition): IUpdateConditionStep<T>;
    and(sql: string): IUpdateConditionStep<T>;
    and(sql: string, ...args: any[]): IUpdateConditionStep<T>;

    andNot(condition: ICondition): IUpdateConditionStep<T>;
    andNot(sql: string): IUpdateConditionStep<T>;
    andNot(sql: string, ...args: any[]): IUpdateConditionStep<T>;

    andExists(select: ISelect<any>): IUpdateConditionStep<T>;
    andNotExists(select: ISelect<any>): IUpdateConditionStep<T>;

    or(condition: IUpdateConditionStep<T>): IUpdateConditionStep<T>;
    or(sql: string): IUpdateConditionStep<T>;
    or(sql: string, ...args: any[]): IUpdateConditionStep<T>;

    orNot(condition: ICondition): IUpdateConditionStep<T>;
    orNot(sql: string): IUpdateConditionStep<T>;
    orNot(sql: string, ...args: any[]): IUpdateConditionStep<T>;

    orExists(select: ISelect<any>): IUpdateConditionStep<T>;
    orNotExists(select: ISelect<any>): IUpdateConditionStep<T>;
}
