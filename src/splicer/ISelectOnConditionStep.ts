/**
 *
 * 功能描述:
 *
 * @className ISelectOnConditionStep
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/13 16:34
 */
import {ISelectJoinStep} from "./ISelectJoinStep";
import {ISelect} from "./ISelect";
import {ICondition} from "./ICondition";
import {IObjectLiteral} from "../type/IObjectLiteral";
import {IRecord} from "./IRecord";

export interface ISelectOnConditionStep<R extends IRecord> extends ISelectJoinStep<R> {
    and(condition: ICondition): ISelectOnConditionStep<R>;
    and(sql: string): ISelectOnConditionStep<R>;
    and(sql: string, args: IObjectLiteral): ISelectOnConditionStep<R>;

    andNot(condition: ICondition): ISelectOnConditionStep<R>;
    andNot(sql: string): ISelectOnConditionStep<R>;
    andNot(sql: string, args: IObjectLiteral): ISelectOnConditionStep<R>;

    andExists(select: ISelect<any>): ISelectOnConditionStep<R>;
    andNotExists(select: ISelect<any>): ISelectOnConditionStep<R>;

    or(condition: ICondition): ISelectOnConditionStep<R>;
    or(sql: string): ISelectOnConditionStep<R>;
    or(sql: string, args: IObjectLiteral): ISelectOnConditionStep<R>;

    orNot(condition: ICondition): ISelectOnConditionStep<R>;
    orNot(sql: string): ISelectOnConditionStep<R>;
    orNot(sql: string, args: IObjectLiteral): ISelectOnConditionStep<R>;

    orExists(select: ISelect<any>): ISelectOnConditionStep<R>;
    orNotExists(select: ISelect<any>): ISelectOnConditionStep<R>;
}
