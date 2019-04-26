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
import {IRecord} from "./IRecord";

export interface ISelectGroupByStep<R extends IRecord> extends ISelectHavingStep<R> {
    groupBy(...fields: Array<IField<R>>): ISelectHavingStep<R>;
}
