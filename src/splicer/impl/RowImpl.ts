/**
 *
 * 功能描述:
 *
 * @className RowImpl
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/5/6 11:29
 */
import {IRow} from "../IRow";
import {IDataType} from "../IDataType";
import {IField} from "../IField";
import {ICondition} from "../ICondition";

export class RowImpl implements IRow {
    constructor(fields: Array<IField<any>>) {

    }
    public addField<T>(field: string, dataType: IDataType<T>): boolean {
        return false;
    }

    public dataType(field: string): IDataType<any> {
        return undefined;
    }

    public dataTypes(): Array<IDataType<any>> {
        return undefined;
    }

    public equals(value: any): boolean {
        return false;
    }

    public getField(field: string): IField<any> {
        return undefined;
    }

    public getFields(): IField<any> {
        return undefined;
    }

    public hashCode(): number {
        return 0;
    }

    public isNotNull(): ICondition {
        return undefined;
    }

    public isNull(): ICondition {
        return undefined;
    }

    public size(): number {
        return 0;
    }

    public type(field: string): Object {
        return undefined;
    }

    public types(): Object[] {
        return [];
    }

}
