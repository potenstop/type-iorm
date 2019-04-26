/**
 *
 * 功能描述:
 *
 * @className IInsert
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/20 16:28
 */
import {IQuery} from "./IQuery";
import {IRecord} from "./IRecord";

export interface IInsert<R extends IRecord> extends IQuery {

}
