/**
 *
 * 功能描述:
 *
 * @className ISelectLimitStep
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/11 20:40
 */
import {ISelectForUpdateStep} from "./ISelectForUpdateStep";
import {IRecord} from "./IRecord";

export interface ISelectLimitStep<R extends IRecord> extends ISelectForUpdateStep<R> {
    limit(offset: number, numberOfRows: number): ISelectForUpdateStep<R>;
    limit(offset: number): ISelectForUpdateStep<R>;
}
