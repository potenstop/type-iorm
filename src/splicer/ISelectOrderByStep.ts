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

export interface ISelectOrderByStep<T> extends ISelectLimitStep<T> {
    orderBy(... fields: Array<IField<T>>);
}
