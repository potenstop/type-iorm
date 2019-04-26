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
import {IRecord} from "./IRecord";

export interface IDeleteFinalStep<R extends IRecord> extends IDelete<R> {
    getInsertId(): number;
    getAffectedRow(): number;
    getResult(): IChangeResult;
}
