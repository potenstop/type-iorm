/**
 *
 * 功能描述:
 *
 * @className FieldImpl
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/13 12:37
 */
import {IField} from "../IField";
import {ICondition} from "../ICondition";
import {IDataType} from "../IDataType";
import {IConverter} from "../IConverter";
import {IName} from "../IName";

export class FieldImpl<T> implements IField<T> {
    private name: string;
    constructor(dataType: IDataType<T>, name: string) {
        this.name = name;
    }
    public as(alias: string): IField<T> {
        this.name = alias;
        return this;
    }

    public getName(): string {
        return this.name;
    }

    public eq(field: T): ICondition {
        return undefined;
    }
    public equals(value: any): boolean {
        if (value === this) {
            return true;
        } else {
            return typeof value.getName === "function" && this.getName() === value.getName();
        }
    }

    public hashCode(): number {
        return 0;
    }

    public getConverter(): IConverter<any, any> {
        return undefined;
    }

    public getDataType(): IDataType<T> {
        return undefined;
    }

    public getType(): Object {
        return undefined;
    }

    public getComment(): string {
        return "";
    }

    public getQualifiedName(): IName {
        return undefined;
    }

    public getUnqualifiedName(): IName {
        return undefined;
    }
}
