import {ICondition} from "./ICondition";
import {ISelectGroupByStep} from "./ISelectGroupByStep";
import {ISelectConditionStep} from "./ISelectConditionStep";
import {ISelect} from "./ISelect";
import {IObjectLiteral} from "../type/IObjectLiteral";
import {IRecord} from "./IRecord";

/**
 *
 * 功能描述:
 *
 * @className ISelectWhereStep
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/11 18:03
 */
export interface ISelectWhereStep<R extends IRecord> extends ISelectGroupByStep<R> {
    where(...condition: ICondition[]): ISelectConditionStep<R>;
    where(sql: string): ISelectConditionStep<R>;
    where(sql: string, args: IObjectLiteral): ISelectConditionStep<R>;
    whereExists(select: ISelect<R>): ISelectConditionStep<R>;
    whereNotExists(select: ISelect<R>): ISelectConditionStep<R>;

}
