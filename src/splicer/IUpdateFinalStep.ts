/**
 *
 * 功能描述:
 *
 * @className IUpdateFinalStep
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/21 15:03
 */
import {IUpdate} from "./IUpdate";
import {IChangeResult} from "./IChangeResult";

export interface IUpdateFinalStep<T> extends IUpdate<T> {
    getInsertId(): number;
    getAffectedRow(): number;
    getResult(): IChangeResult;
}
