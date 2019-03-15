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

export interface ISelectLimitStep<T> extends ISelectForUpdateStep<T> {
    limit(offset: number, numberOfRows: number): ISelectForUpdateStep<T>;
    limit(offset: number): ISelectForUpdateStep<T>;
}
