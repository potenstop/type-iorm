/**
 *
 * 功能描述:
 *
 * @className ISelectUnionStep
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/13 9:35
 */
import {ISelect} from "./ISelect";
import {ISelectFinalStep} from "./ISelectFinalStep";
import {IRecord} from "./IRecord";

export interface ISelectUnionStep<R extends IRecord> extends ISelectFinalStep<R> {
    union(select: ISelect<R>);
    unionAll(select: ISelect<R>);
}
