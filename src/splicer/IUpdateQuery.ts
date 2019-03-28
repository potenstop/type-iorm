/**
 *
 * 功能描述:
 *
 * @className IUpdateQuery
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/27 9:15
 */
import {IStoreQuery} from "./IStoreQuery";
import {IUpdate} from "./IUpdate";
import {ICondition} from "./ICondition";

export interface IUpdateQuery<T> extends IStoreQuery<T>, IUpdate<T> {
    addConditions(...condition: ICondition[]): void;
}
