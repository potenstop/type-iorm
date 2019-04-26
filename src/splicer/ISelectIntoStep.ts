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
import {IRecord} from "./IRecord";

export interface ISelectIntoStep<R extends IRecord> extends ISelectFromStep<R> {
    into(table: ObjectType<R>): ISelectIntoStep<R>;
}
