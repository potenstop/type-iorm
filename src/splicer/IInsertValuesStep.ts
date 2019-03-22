/**
 *
 * 功能描述:
 *
 * @className IInsertValuesStep
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/21 13:31
 */
import {IInsertFinalStep} from "./IInsertFinalStep";

export interface IInsertValuesStep<T> extends IInsertFinalStep<T> {
    values(...value: any): IInsertValuesStep<T>;
}
