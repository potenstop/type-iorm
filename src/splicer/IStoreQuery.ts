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
import {IRecord} from "./IRecord";

export interface IStoreQuery<R extends IRecord> extends IQuery {
    addValue<F>(field: IField<F>, value: F): void;
    addValues(map: Map<string, any>): void;
    getResult(): IResult<any> ;
}
