/**
 *
 * 功能描述:
 *
 * @className IUniqueKey
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/5/7 15:29
 */
import {IRecord} from "./IRecord";
import {IKey} from "./IKey";

export interface IUniqueKey<R extends IRecord> extends IKey<R> {
    isPrimary(): boolean;
}
