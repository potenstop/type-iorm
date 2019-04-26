/**
 *
 * 功能描述:
 *
 * @className ICommonTableExpression
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/4/24 9:50
 */
import {IRecord} from "./IRecord";
import {ITable} from "./ITable";

export interface ICommonTableExpression<R extends IRecord> extends ITable<R> {

}
