/**
 *
 * 功能描述:
 *
 * @className IInsertQuery
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/22 12:54
 */
import {IInsert} from "./IInsert";
import {IField} from "./IField";
import {ISelect} from "./ISelect";
import {IStoreQuery} from "./IStoreQuery";

export interface IInsertQuery<T> extends IInsert<T>, IStoreQuery<T> {
    addValueForUpdate(field: IField<T>, value: T): void;
    addValueForUpdate(field: IField<T>, value: IField<T>): void;
    addValueForUpdate(map: Map<any, any>): void;
    setSelect(fields: Array<IField<any>>, select: ISelect<any>): void;
}
