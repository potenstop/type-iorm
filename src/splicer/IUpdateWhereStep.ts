import {ICondition} from "./ICondition";
import {ISelectConditionStep} from "./ISelectConditionStep";
import {ISelect} from "./ISelect";
import {IUpdateConditionStep} from "./IUpdateConditionStep";

/**
 *
 * 功能描述:
 *
 * @className IUpdateWhereStep
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/21 14:59
 */
export interface IUpdateWhereStep<T> extends IUpdateConditionStep<T> {
    where(...condition: ICondition[]): IUpdateConditionStep<T>;
    where(sql: string): IUpdateConditionStep<T>;
    where(sql: string, ...args: any[]): IUpdateConditionStep<T>;
    whereExists(select: ISelect<T>): IUpdateConditionStep<T>;
    whereNotExists(select: ISelect<T>): IUpdateConditionStep<T>;
}
