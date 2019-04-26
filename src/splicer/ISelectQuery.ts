/**
 *
 * 功能描述:
 *
 * @className ISelectQuery
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/20 15:53
 */
import {ISelect} from "./ISelect";
import {IRecord} from "./IRecord";

export interface ISelectQuery<R extends IRecord> extends ISelect<R> {

}
