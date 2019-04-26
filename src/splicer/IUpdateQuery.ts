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
import {Operator} from "./impl/Operator";
import {IRecord} from "./IRecord";

export interface IUpdateQuery<R extends IRecord> extends IStoreQuery<R>, IUpdate<R> {
    addConditions(...condition: ICondition[]): void;
    addConditions(operator: Operator, condition: ICondition): void;
}
