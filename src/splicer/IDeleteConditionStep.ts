import {ICondition} from "./ICondition";
import {ISelect} from "./ISelect";
import {IDeleteFinalStep} from "./IDeleteFinalStep";
import {IObjectLiteral} from "../type/IObjectLiteral";
import {IRecord} from "./IRecord";

/**
 *
 * 功能描述:
 *
 * @className IDeleteConditionStep
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/21 15:37
 */
export interface IDeleteConditionStep<R extends IRecord> extends IDeleteFinalStep<R> {
    and(condition: ICondition): IDeleteConditionStep<R>;
    and(sql: string): IDeleteConditionStep<R>;
    and(sql: string, args: IObjectLiteral): IDeleteConditionStep<R>;

    andNot(condition: ICondition): IDeleteConditionStep<R>;
    andNot(sql: string): IDeleteConditionStep<R>;
    andNot(sql: string, args: IObjectLiteral): IDeleteConditionStep<R>;

    andExists(select: ISelect<any>): IDeleteConditionStep<R>;
    andNotExists(select: ISelect<any>): IDeleteConditionStep<R>;

    or(condition: IDeleteConditionStep<R>): IDeleteConditionStep<R>;
    or(sql: string): IDeleteConditionStep<R>;
    or(sql: string, args: IObjectLiteral): IDeleteConditionStep<R>;

    orNot(condition: ICondition): IDeleteConditionStep<R>;
    orNot(sql: string): IDeleteConditionStep<R>;
    orNot(sql: string, args: IObjectLiteral): IDeleteConditionStep<R>;

    orExists(select: ISelect<any>): IDeleteConditionStep<R>;
    orNotExists(select: ISelect<any>): IDeleteConditionStep<R>;
}
