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

export class AbstractTable {
    public static createField<T>(dataType: IDataType<T>, name: string): IField<T> {
        return new FieldImpl<T>(dataType, name);
    }
}
