/**
 *
 * 功能描述:
 *
 * @className ISelectOnStep
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/13 16:06
 */
import {ICondition} from "./ICondition";
import {ISelectOnConditionStep} from "./ISelectOnConditionStep";
import {IObjectLiteral} from "../type/IObjectLiteral";
import {IRecord} from "./IRecord";

export interface ISelectOnStep<R extends IRecord> {
    on(...condition: ICondition[]): ISelectOnConditionStep<R>;
    on(sql: string): ISelectOnConditionStep<R>;
    on(sql: string, args: IObjectLiteral): ISelectOnConditionStep<R>;
}
