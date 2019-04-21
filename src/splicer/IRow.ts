/**
 *
 * 功能描述:
 *
 * @className IRow
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/20 20:19
 */
import {IFieldOrRow} from "./IFieldOrRow";
import {IDataType} from "./IDataType";
import {IField} from "./IField";
import {ICondition} from "./ICondition";

export interface IRow extends IFieldOrRow {
    size(): number;
    addField<T>(field: string, dataType: IDataType<T>): boolean;
    getFields(): IField<any>;
    getField(field: string): IField<any>;
    type(field: string): Object;
    types(): Object[];
    dataType(field: string): IDataType<any>;
    dataTypes(): Array<IDataType<any>>;
    isNull(): ICondition;
    isNotNull(): ICondition;
}
