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

export interface ISelectOptionStep<T> extends ISelectFinalStep<T> {
    option(var1: string): ISelectUnionStep;
}
