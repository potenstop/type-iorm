/**
 *
 * 功能描述:
 *
 * @className ISelectConditionStep
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/13 11:35
 */
import {ISelectGroupByStep} from "./ISelectGroupByStep";
import {ICondition} from "./ICondition";
import {ISelect} from "./ISelect";
import {IObjectLiteral} from "../type/IObjectLiteral";
import {IRecord} from "./IRecord";

export interface ISelectConditionStep<R extends IRecord> extends ISelectGroupByStep<R> {
    and(condition: ICondition): ISelectConditionStep<R>;
    and(sql: string): ISelectConditionStep<R>;
    and(sql: string, args: IObjectLiteral): ISelectConditionStep<R>;

    andNot(condition: ICondition): ISelectConditionStep<R>;
    andNot(sql: string): ISelectConditionStep<R>;
    andNot(sql: string, args: IObjectLiteral): ISelectConditionStep<R>;

    andExists(select: ISelect<R>): ISelectConditionStep<R>;
    andNotExists(select: ISelect<R>): ISelectConditionStep<R>;

    or(condition: ICondition): ISelectConditionStep<R>;
    or(sql: string): ISelectConditionStep<R>;
    or(sql: string, args: IObjectLiteral): ISelectConditionStep<R>;

    orNot(condition: ICondition): ISelectConditionStep<R>;
    orNot(sql: string): ISelectConditionStep<R>;
    orNot(sql: string, args: IObjectLiteral): ISelectConditionStep<R>;

    orExists(select: ISelect<R>): ISelectConditionStep<R>;
    orNotExists(select: ISelect<R>): ISelectConditionStep<R>;
}
