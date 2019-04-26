import {ICondition} from "./ICondition";
import {ISelect} from "./ISelect";
import {IUpdateConditionStep} from "./IUpdateConditionStep";
import {IUpdateFinalStep} from "./IUpdateFinalStep";
import {IObjectLiteral} from "../type/IObjectLiteral";
import {IRecord} from "./IRecord";

/**
 *
 * 功能描述:
 *
 * @className IUpdateWhereStep
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/21 14:59
 */
export interface IUpdateWhereStep<R extends IRecord> extends IUpdateFinalStep<R> {
    where(...condition: ICondition[]): IUpdateConditionStep<R>;
    where(sql: string): IUpdateConditionStep<R>;
    where(sql: string, args: IObjectLiteral): IUpdateConditionStep<R>;
    whereExists(select: ISelect<R>): IUpdateConditionStep<R>;
    whereNotExists(select: ISelect<R>): IUpdateConditionStep<R>;
}
