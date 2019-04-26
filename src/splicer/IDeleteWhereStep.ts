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
import {IRecord} from "./IRecord";

export interface IDeleteWhereStep<R extends IRecord> extends IDeleteFinalStep<R> {
    where(...condition: ICondition[]): IDeleteConditionStep<R>;
    where(sql: string): IDeleteConditionStep<R>;
    where(sql: string, args: IObjectLiteral): IDeleteConditionStep<R>;
    whereExists(select: ISelect<R>): IDeleteConditionStep<R>;
    whereNotExists(select: ISelect<R>): IDeleteConditionStep<R>;
}
