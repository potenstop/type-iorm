/**
 *
 * 功能描述:
 *
 * @className IDeleteFinalStep
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/21 15:35
 */
import {IDelete} from "./IDelete";
import {IChangeResult} from "./IChangeResult";

export interface IDeleteFinalStep<T> extends IDelete<T> {
    getInsertId(): number;
    getAffectedRow(): number;
    getResult(): IChangeResult;
}
