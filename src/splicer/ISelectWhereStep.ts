import {ICondition} from "./ICondition";
import {ISelectGroupByStep} from "./ISelectGroupByStep";
import {ISelectConditionStep} from "./ISelectConditionStep";
import {ISelect} from "./ISelect";

/**
 *
 * 功能描述:
 *
 * @className ISelectWhereStep
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/11 18:03
 */
export interface ISelectWhereStep<T> extends ISelectGroupByStep<T> {
    where(...condition: ICondition[]): ISelectConditionStep;
    where(sql: string): ISelectConditionStep;
    where(sql: string, ...args: any[]): ISelectConditionStep;
    whereExists(select: ISelect<T>): ISelectConditionStep;
    whereNotExists(select: ISelect<T>): ISelectConditionStep;

}
