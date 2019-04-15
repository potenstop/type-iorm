import {ICondition} from "./ICondition";
import {ISelect} from "./ISelect";
import {IUpdateConditionStep} from "./IUpdateConditionStep";
import {IUpdateFinalStep} from "./IUpdateFinalStep";
import {IObjectLiteral} from "../type/IObjectLiteral";

/**
 *
 * 功能描述:
 *
 * @className IUpdateWhereStep
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/21 14:59
 */
export interface IUpdateWhereStep<T> extends IUpdateFinalStep<T> {
    where(...condition: ICondition[]): IUpdateConditionStep<T>;
    where(sql: string): IUpdateConditionStep<T>;
    where(sql: string, args: IObjectLiteral): IUpdateConditionStep<T>;
    whereExists(select: ISelect<T>): IUpdateConditionStep<T>;
    whereNotExists(select: ISelect<T>): IUpdateConditionStep<T>;
}
