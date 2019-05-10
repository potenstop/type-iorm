/**
 *
 * 功能描述:
 *
 * @className IUpdatableRecord
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/5/7 15:36
 */
import {ITableRecord} from "./ITableRecord";

export interface IUpdatableRecord<R extends IUpdatableRecord<R>> extends ITableRecord<R> {

}
