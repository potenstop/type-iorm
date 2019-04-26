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
import {IRecord} from "./IRecord";

export interface IUpdateSetStep<R extends IRecord> {
    set<T>(field: IField<T>, value: T): IUpdateSetMoreStep<R>;
    set(map: Map<any, any>): IUpdateSetMoreStep<R>;
}
