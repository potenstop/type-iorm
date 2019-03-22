/**
 *
 * 功能描述:
 *
 * @className ISelectOnConditionStep
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/13 16:34
 */
import {ISelectJoinStep} from "./ISelectJoinStep";
import {ISelect} from "./ISelect";
import {ICondition} from "./ICondition";

export interface ISelectOnConditionStep<T> extends ISelectJoinStep<T> {
    and(condition: ICondition): ISelectOnConditionStep<T>;
    and(sql: string): ISelectOnConditionStep<T>;
    and(sql: string, ...args: any[]): ISelectOnConditionStep<T>;

    andNot(condition: ICondition): ISelectOnConditionStep<T>;
    andNot(sql: string): ISelectOnConditionStep<T>;
    andNot(sql: string, ...args: any[]): ISelectOnConditionStep<T>;

    andExists(select: ISelect<any>): ISelectOnConditionStep<T>;
    andNotExists(select: ISelect<any>): ISelectOnConditionStep<T>;

    or(condition: ICondition): ISelectOnConditionStep<T>;
    or(sql: string): ISelectOnConditionStep<T>;
    or(sql: string, ...args: any[]): ISelectOnConditionStep<T>;

    orNot(condition: ICondition): ISelectOnConditionStep<T>;
    orNot(sql: string): ISelectOnConditionStep<T>;
    orNot(sql: string, ...args: any[]): ISelectOnConditionStep<T>;

    orExists(select: ISelect<any>): ISelectOnConditionStep<T>;
    orNotExists(select: ISelect<any>): ISelectOnConditionStep<T>;
}
