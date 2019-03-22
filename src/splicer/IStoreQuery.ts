/**
 *
 * 功能描述:
 *
 * @className IStoreQuery
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/22 13:07
 */
import {IQuery} from "./IQuery";
import {IField} from "./IField";
import {IResult} from "./IResult";

export interface IStoreQuery<T> extends IQuery {
    addValue(field: IField<T>, value: T): void;
    addValue(field: IField<T>, value: IField<T>): void;
    addValue(map: Map<any, any>): void;
    getResult(): IResult<any> ;
}
