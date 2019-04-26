/**
 *
 * 功能描述: 获取查询
 *
 * @className ISelectFinalStep
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/11 20:42
 */
import {ISelect} from "./ISelect";
import {IRecord} from "./IRecord";

export interface ISelectFinalStep<R extends IRecord> extends ISelect<R> {
    getQuery(): string;
}
