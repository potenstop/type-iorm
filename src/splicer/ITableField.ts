/**
 *
 * 功能描述:
 *
 * @className ITableField
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/13 11:49
 */
import {IField} from "./IField";
import {IRecord} from "./IRecord";
import {ITable} from "./ITable";

export interface ITableField<R extends IRecord, T> extends IField<T> {
    getTable(): ITable<R>;
}
