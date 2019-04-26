/**
 *
 * 功能描述:
 *
 * @className ISelectHavingStep
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/11 20:36
 */
import {ISelectOrderByStep} from "./ISelectOrderByStep";
import {ICondition} from "./ICondition";
import {ISelectHavingConditionStep} from "./ISelectHavingConditionStep";
import {IObjectLiteral} from "../type/IObjectLiteral";
import {IRecord} from "./IRecord";

export interface ISelectHavingStep<R extends IRecord> extends ISelectOrderByStep<R> {
    having(...condition: ICondition[]): ISelectHavingConditionStep<R>;
    having(sql: string): ISelectHavingConditionStep<R>;
    having(sql: string, args: IObjectLiteral): ISelectHavingConditionStep<R>;
}
