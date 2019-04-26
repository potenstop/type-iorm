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
import {IRecord} from "./IRecord";
export interface IInsertFinalStep<R extends IRecord> extends IInsert<R> {
    getInsertId(): Promise<number>;
    getAffectedRow(): Promise<number>;
    getResult(): Promise<IChangeResult>;
}
