/**
 *
 * 功能描述:
 *
 * @className IUpdateSetStep
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/21 14:52
 */
import {IField} from "./IField";
import {IUpdateWhereStep} from "./IUpdateWhereStep";
import {IUpdateSetMoreStep} from "./IUpdateSetMoreStep";

export interface IUpdateSetStep<T> {
    set<R>(field: IField<R>, value: R): IUpdateSetMoreStep<T>;
    set(map: Map<string, any>): IUpdateSetMoreStep<T>;
}
