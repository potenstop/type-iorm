/**
 *
 * 功能描述:
 *
 * @className IDeleteWhereStep
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/21 15:35
 */
import {IDeleteFinalStep} from "./IDeleteFinalStep";
import {ICondition} from "./ICondition";
import {ISelect} from "./ISelect";
import {IDeleteConditionStep} from "./IDeleteConditionStep";
import {IObjectLiteral} from "../type/IObjectLiteral";

export interface IDeleteWhereStep<T> extends IDeleteFinalStep<T> {
    where(...condition: ICondition[]): IDeleteConditionStep<T>;
    where(sql: string): IDeleteConditionStep<T>;
    where(sql: string, args: IObjectLiteral): IDeleteConditionStep<T>;
    whereExists(select: ISelect<T>): IDeleteConditionStep<T>;
    whereNotExists(select: ISelect<T>): IDeleteConditionStep<T>;
}
