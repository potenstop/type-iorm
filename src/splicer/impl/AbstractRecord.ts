/**
 *
 * 功能描述:
 *
 * @className AbstractRecord
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/4/25 9:29
 */
import {IRecord} from "../IRecord";
import {IField} from "../IField";
import {IRow} from "../IRow";
import {RowImpl} from "./RowImpl";
import {IName} from "../IName";
import {ITable} from "../ITable";
import {Joint} from "./Joint";

export abstract class AbstractRecord implements IRecord {
    constructor(fields: Array<IField<any>>);
    constructor(fields: IRow);
    constructor(fields: Array<IField<any>> | IRow) {
        let rowImpl = null;
        if (Array.isArray(fields)) {
            rowImpl = new RowImpl(fields);
        } else {
            rowImpl = fields;
        }
    }

    public changed(): boolean;
    public changed(field: IField<any>): boolean;
    public changed(field: string): boolean;
    public changed(fieldName: IName): boolean;
    public changed(changed: boolean): void;
    public changed(field: IField<any>, changed: boolean): void;
    public changed(fieldName: string, changed: boolean): void;
    public changed(fieldName: IName, changed: boolean): void;
    public changed(field?: IField<any> | string | IName | boolean, changed?: boolean): boolean | void {
        return undefined;
    }

    public field<T>(field: IField<T>): IField<T>;
    public field(name: string): IField<any>;
    public field(name: IName): IField<any>;
    public field(field): any {
    }

    public fields(): Array<IField<any>>;
    public fields(...fields: Array<IField<any>>): Array<IField<any>>;
    public fields(...fieldNames: IName[]): Array<IField<any>>;
    public fields(...fields: Array<IField<any> | IName>): Array<IField<any>> {
        return undefined;
    }

    public fieldsRow(): IRow {
        return undefined;
    }

    public get<T>(field: IField<T>): T;
    public get<T>(field: IField<T>, type: Class<T>): T;
    public get<T>(fieldName: string): Object;
    public get<T>(fieldName: string, type: Class<T>): T;
    public get<T>(fileName: IName): Object;
    public get<T>(fileName: IName, type: Class<T>): T;
    public get(field, type?): any {
    }

    public into(...fields: Array<IField<any>>): IRecord {
        return undefined;
    }

    public intoArray(): Object[] {
        return [];
    }

    public intoMap(): Map<string, Object> {
        return undefined;
    }

    public intoTable<R extends IRecord>(table: ITable<R>): R {
        return undefined;
    }

    public original(): IRecord;
    public original<T>(field: IField<T>): T;
    public original<T>(fieldName: string): Object;
    public original<T>(fieldName: IName): Object;
    public original(field?): any {
    }

    public reset(fieldName: string): void;
    public reset(fieldName: IName): void;
    public reset(fieldName: string | IName): void {
    }

    public set<T>(field: IField<T>, value: T): void;
    public set<T>(field: string, value: T): void;
    public set<T>(field: string | IField<T>, value: T): void {
        if (typeof field === "string") {
        }
    }

    public size(): number {
        return 0;
    }

    public valuesRow(): IRow {
        return undefined;
    }

    public with<T>(field: IField<T>, value: T): IRecord {
        return undefined;
    }

}
