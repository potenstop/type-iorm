import {IField} from "./IField";
import {IName} from "./IName";
import {IDataType} from "./IDataType";
import {IRecord} from "./IRecord";

/**
 *
 * 功能描述:
 *
 * @className IRecordType
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/4/20 22:00
 */
export interface IRecordType<R extends IRecord> {
    size(): number;
    field<T>(field: IField<T>): IField<T>;
    field(name: string): IField<any>;
    field(name: IName): IField<any>;
    field(name: IName): IField<any>;
    fields(): Array<IField<any>>;
    fields(...fields: Array<IField<any>>): Array<IField<any>>;
    fields(...fieldNames: IName[]): Array<IField<any>>;

    types(): Array<Class<any>>;
    type(fieldName: string): Class<any>;
    type(fieldName: IName): Class<any>;

    dateTypes(): Array<IDataType<any>>;
    dateType(fieldName: string): IDataType<any>;
    dateType(fieldName: IName): IDataType<any>;

}
