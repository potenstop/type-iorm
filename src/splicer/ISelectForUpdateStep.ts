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
import {IRecord} from "./IRecord";

export interface ISelectForUpdateStep<R extends IRecord> extends ISelectOptionStep<R> {
    forShare(): ISelectOptionStep<R>;
}
