/**
 *
 * 功能描述:
 *
 * @className ITableLike
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/4/20 21:53
 */
import {IRecord} from "./IRecord";
import {IQueryPart} from "./IQueryPart";
import {IRow} from "./IRow";
import {IField} from "./IField";
import {IName} from "./IName";
import {ITable} from "./ITable";

export interface ITableLike<R extends IRecord> extends IQueryPart {
    fieldsRow(): IRow;
    field<T>(field: IField<T>): IField<T>;
    field(name: string): IField<any>;
    field(name: IName): IField<any>;
    field(name: IName): IField<any>;
    fields(): Array<IField<any>>;
    fields(...fields: Array<IField<any>>): Array<IField<any>>;
    fields(...fieldNames: IName[]): Array<IField<any>>;

    asTable(alias: string): ITable<R>;
}
