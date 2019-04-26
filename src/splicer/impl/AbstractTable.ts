/**
 *
 * 功能描述:
 *
 * @className AbstractTable
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/13 11:54
 */
import {FieldImpl} from "./FieldImpl";
import {IField} from "../IField";
import {IDataType} from "../IDataType";
import {IRecord} from "../IRecord";
import {ITable} from "../ITable";
import {AbstractNamed} from "./AbstractNamed";

export abstract class AbstractTable<R extends IRecord> extends AbstractNamed implements ITable<R> {
    public static createField<T>(dataType: IDataType<T>, name: string): IField<T> {
        return new FieldImpl<T>(dataType, name);
    }
}
