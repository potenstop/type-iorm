/**
 *
 * 功能描述:
 *
 * @className IResultQuery
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/20 16:32
 */
import {IQuery} from "./IQuery";
import {IResult} from "./IResult";

export interface IResultQuery<T> extends IQuery {
    fetch(): Array<IResult<T>>;
    fetchOne(): IResult<T>;
    fetchMap(): Map<string, IResult<T>>;
    maxRows(size: number): IResultQuery<T>;
    fetchSize(size: number): IResultQuery<T>;
}
