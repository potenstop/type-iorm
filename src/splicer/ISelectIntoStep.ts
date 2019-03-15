/**
 *
 * 功能描述:
 *
 * @className ISelectIntoStep
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/13 15:49
 */
import {ISelectFromStep} from "./ISelectFromStep";
import {ObjectType} from "../type/ObjectType";

export interface ISelectIntoStep<T> extends ISelectFromStep<T> {
    into(table: ObjectType<T>): ISelectIntoStep<T>;
}
