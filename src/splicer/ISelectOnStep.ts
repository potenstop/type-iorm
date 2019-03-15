/**
 *
 * 功能描述:
 *
 * @className ISelectOnStep
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/13 16:06
 */
import {ICondition} from "./ICondition";
import {ISelectOnConditionStep} from "./ISelectOnConditionStep";

export interface ISelectOnStep<T> {
    on(...condition: ICondition[]): ISelectOnConditionStep<T>;
    on(sql: string): ISelectOnConditionStep<T>;
    on(sql: string, ...args: any[]): ISelectOnConditionStep<T>;
}
