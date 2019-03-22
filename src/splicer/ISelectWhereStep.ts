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
    where(...condition: ICondition[]): ISelectConditionStep<T>;
    where(sql: string): ISelectConditionStep<T>;
    where(sql: string, ...args: any[]): ISelectConditionStep<T>;
    whereExists(select: ISelect<T>): ISelectConditionStep<T>;
    whereNotExists(select: ISelect<T>): ISelectConditionStep<T>;

}
