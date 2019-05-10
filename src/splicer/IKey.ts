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

export interface IKey<R extends IRecord>  {
    getName(): string;

}
