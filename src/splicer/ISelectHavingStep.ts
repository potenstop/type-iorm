/**
 *
 * 功能描述:
 *
 * @className ISelectHavingStep
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/11 20:36
 */
import {ISelectOrderByStep} from "./ISelectOrderByStep";
import {ICondition} from "./ICondition";
import {ISelectHavingConditionStep} from "./ISelectHavingConditionStep";

export interface ISelectHavingStep<T> extends ISelectOrderByStep<T> {
    having(...condition: ICondition[]): ISelectHavingConditionStep<T>;
    having(sql: string): ISelectHavingConditionStep<T>;
    having(sql: string, ...args: any[]): ISelectHavingConditionStep<T>;
}
