/**
 *
 * 功能描述:
 *
 * @className ISelectForUpdateStep
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/13 9:41
 */
import {ISelectOptionStep} from "./ISelectOptionStep";

export interface ISelectForUpdateStep<T> extends ISelectOptionStep<T> {
    forShare(): ISelectOptionStep<T>;
}
