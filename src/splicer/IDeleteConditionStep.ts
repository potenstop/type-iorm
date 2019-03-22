import {ICondition} from "./ICondition";
import {ISelect} from "./ISelect";
import {IDeleteFinalStep} from "./IDeleteFinalStep";

/**
 *
 * 功能描述:
 *
 * @className IDeleteConditionStep
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/21 15:37
 */
export interface IDeleteConditionStep<T> extends IDeleteFinalStep<T> {
    and(condition: ICondition): IDeleteConditionStep<T>;
    and(sql: string): IDeleteConditionStep<T>;
    and(sql: string, ...args: any[]): IDeleteConditionStep<T>;

    andNot(condition: ICondition): IDeleteConditionStep<T>;
    andNot(sql: string): IDeleteConditionStep<T>;
    andNot(sql: string, ...args: any[]): IDeleteConditionStep<T>;

    andExists(select: ISelect<any>): IDeleteConditionStep<T>;
    andNotExists(select: ISelect<any>): IDeleteConditionStep<T>;

    or(condition: IDeleteConditionStep<T>): IDeleteConditionStep<T>;
    or(sql: string): IDeleteConditionStep<T>;
    or(sql: string, ...args: any[]): IDeleteConditionStep<T>;

    orNot(condition: ICondition): IDeleteConditionStep<T>;
    orNot(sql: string): IDeleteConditionStep<T>;
    orNot(sql: string, ...args: any[]): IDeleteConditionStep<T>;

    orExists(select: ISelect<any>): IDeleteConditionStep<T>;
    orNotExists(select: ISelect<any>): IDeleteConditionStep<T>;
}
