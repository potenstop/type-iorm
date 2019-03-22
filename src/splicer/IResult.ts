/**
 *
 * 功能描述:
 *
 * @className IResult
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/20 16:38
 */
import {IRow} from "./IRow";
import {ObjectType} from "../type/ObjectType";

export interface IResult<T> {
    fieldsRow(): IRow;
    getValues(fieldName: string): any[];
    isEmpty(): boolean;
    isNotEmpty(): boolean;
    intoMaps(): Array<Map<string, any>>;
    intoArrays(): any[][];
    into<R>(clazz: R): R[];
}
