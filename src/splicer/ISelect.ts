/**
 *
 * 功能描述: 子查询
 *
 * @className ISelect
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/11 17:53
 */
import {IQueryPart} from "./IQueryPart";
import {IResultQuery} from "./IResultQuery";

export interface ISelect<T> extends IResultQuery<T> {
    union(select: ISelect<T>);
    unionAll(select: ISelect<T>);
}
