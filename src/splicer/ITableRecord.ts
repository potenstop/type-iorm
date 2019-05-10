/**
 *
 * 功能描述:
 *
 * @className ITableRecord
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/5/7 10:54
 */
import {IRecord} from "./IRecord";
import {ITable} from "./ITable";

export interface ITableRecord<R extends ITableRecord<R>>  extends IRecord {
    getTable(): ITable<R>;
}
