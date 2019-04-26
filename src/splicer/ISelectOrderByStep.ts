/**
 *
 * 功能描述:
 *
 * @className ISelectOrderByStep
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/11 20:40
 */
import {ISelectLimitStep} from "./ISelectLimitStep";
import {IField} from "./IField";
import {IRecord} from "./IRecord";

export interface ISelectOrderByStep<R extends IRecord> extends ISelectLimitStep<R> {
    orderBy(... fields: Array<IField<R>>);
}
