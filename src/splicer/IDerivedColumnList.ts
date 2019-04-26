/**
 *
 * 功能描述:
 *
 * @className IDerivedColumnList
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/4/24 9:49
 */
import {IQueryPart} from "./IQueryPart";
import {ISelect} from "./ISelect";
import {IRecord} from "./IRecord";
import {ICommonTableExpression} from "./ICommonTableExpression";

export interface IDerivedColumnList extends IQueryPart {
    as<R extends IRecord>(select: ISelect<R>): ICommonTableExpression<R>;

}
