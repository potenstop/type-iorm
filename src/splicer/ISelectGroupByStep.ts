/**
 *
 * 功能描述:
 *
 * @className ISelectGroupByStep
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/11 20:35
 */
import {ISelectHavingStep} from "./ISelectHavingStep";
import {IField} from "./IField";

export interface ISelectGroupByStep<T> extends ISelectHavingStep<T> {
    groupBy(...fields: Array<IField<T>>): ISelectHavingStep<T>;
}
