/**
 *
 * 功能描述:
 *
 * @className IInsertFinalStep
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/21 14:25
 */
import {IInsert} from "./IInsert";
import {IChangeResult} from "./IChangeResult";
export interface IInsertFinalStep<T> extends IInsert<T> {
    getInsertId(): number;
    getAffectedRow(): number;
    getResult(): IChangeResult;
}
