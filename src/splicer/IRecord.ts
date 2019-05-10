/**
 *
 * 功能描述:
 *
 * @className IRecord
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/4/20 18:37
 */
import {IRow} from "./IRow";
import {IField} from "./IField";
import {IName} from "./IName";
import {ITable} from "./ITable";

export interface IRecord {
    fieldsRow(): IRow;

    field<T>(field: IField<T>): IField<T>;
    field(name: string): IField<any>;
    field(name: IName): IField<any>;
    field(name: IName): IField<any>;
    fields(): Array<IField<any>>;
    fields(...fields: Array<IField<any>>): Array<IField<any>>;
    fields(...fieldNames: IName[]): Array<IField<any>>;

    valuesRow(): IRow;

    get<T>(field: IField<T>): T;
    get<T>(field: IField<T>, type: Class<T>): T;
    get<T>(fieldName: string): Object;
    get<T>(fieldName: string, type: Class<T>): T;
    get<T>(fileName: IName): Object;
    get<T>(fileName: IName, type: Class<T>): T;

    set<T>(field: IField<T>, value: T): void;
    set<T>(field: string, value: T): void;

    with<T>(field: IField<T>, value: T): IRecord;
    size(): number;

    original(): IRecord;
    original<T>(field: IField<T>): T;
    original<T>(fieldName: string): Object;
    original<T>(fieldName: IName): Object;

    changed(): boolean;
    changed(field: IField<any>): boolean;
    changed(field: string): boolean;
    changed(fieldName: IName): boolean;
    changed(changed: boolean): void;
    changed(field: IField<any>, changed: boolean): void;
    changed(fieldName: string, changed: boolean): void;
    changed(fieldName: IName, changed: boolean): void;

    reset(fieldName: string): void;
    reset(fieldName: IName): void;

    intoArray(): Object[];
    intoMap(): Map<string, Object>;
    into(...fields: Array<IField<any>>): IRecord;
    intoTable<R extends IRecord>(table: ITable<R>): R;

}
