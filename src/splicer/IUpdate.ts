/**
 *
 * 功能描述:
 *
 * @className IUpdate
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/20 16:02
 */
import {IQuery} from "./IQuery";
import {IRecord} from "./IRecord";

export interface IUpdate<R extends IRecord> extends IQuery {

}
