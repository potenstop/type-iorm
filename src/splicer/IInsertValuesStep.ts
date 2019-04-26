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
import {IRecord} from "./IRecord";

export interface IInsertValuesStep<R extends IRecord> extends IInsertFinalStep<R> {
    values(...value: any): IInsertValuesStep<R>;
}
