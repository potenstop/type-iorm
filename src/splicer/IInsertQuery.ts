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
import {IRecord} from "./IRecord";

export interface IInsertQuery<R extends IRecord> extends IInsert<R>, IStoreQuery<R> {
    addValueForUpdate(field: IField<R>, value: R): void;
    addValueForUpdate(field: IField<R>, value: IField<R>): void;
    addValueForUpdate(map: Map<any, any>): void;
    setSelect(fields: Array<IField<any>>, select: ISelect<any>): void;
}
