/**
 *
 * 功能描述:
 *
 * @className ISelectOptionStep
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/13 9:30
 */
import {ISelectFinalStep} from "./ISelectFinalStep";
import {ISelectUnionStep} from "./ISelectUnionStep";
import {IRecord} from "./IRecord";

export interface ISelectOptionStep<R extends IRecord> extends ISelectFinalStep<R> {
    option(var1: string): ISelectUnionStep<R>;
}
