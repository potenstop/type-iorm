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

export class FieldImpl<T> implements IField<T> {
    constructor(dataType: IDataType<T>, name: string) {

    }
    public as(alias: string): IField<T> {
        return undefined;
    }

    public getName(): string {
        return "";
    }

    public eq(field: T): ICondition {
        return undefined;
    }
}
