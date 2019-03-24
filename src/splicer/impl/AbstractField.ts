/**
 *
 * 功能描述:
 *
 * @className AbstractField
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/23 21:38
 */
import {IField} from "../IField";
import {ICondition} from "../ICondition";
import {IConverter} from "../IConverter";
import {IDataType} from "../IDataType";

export class AbstractField<T> implements IField<T> {
    public as(alias: string): IField<T> {
        return undefined;
    }

    public eq(field: T): ICondition {
        return undefined;
    }

    public equals(value: any): boolean {
        return false;
    }

    public getConverter(): IConverter<any, any> {
        return undefined;
    }

    public getDataType(): IDataType<T> {
        return undefined;
    }

    public getName(): string {
        return "";
    }

    public getType(): Object {
        return undefined;
    }

    public hashCode(): number {
        return 0;
    }

}
