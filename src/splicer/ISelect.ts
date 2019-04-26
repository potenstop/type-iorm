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
import {IRecord} from "./IRecord";

export interface ISelect<R extends IRecord> extends IResultQuery<R> {
    union(select: ISelect<R>);
    unionAll(select: ISelect<R>);
}
