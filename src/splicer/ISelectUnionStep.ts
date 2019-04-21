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

export interface ISelectUnionStep<T> extends ISelectFinalStep<T> {
    union(select: ISelect<T>);
    unionAll(select: ISelect<T>);
}
