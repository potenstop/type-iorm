/**
 *
 * 功能描述:
 *
 * @className ISelectFromStep
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/13 15:50
 */
import {ISelectWhereStep} from "./ISelectWhereStep";
import {ObjectType} from "../type/ObjectType";
import {ISelectJoinStep} from "./ISelectJoinStep";

export interface ISelectFromStep<T> extends ISelectWhereStep<T> {
    from(...table: Array<ObjectType<T>>): ISelectJoinStep<T>;
    from(sql: string): ISelectJoinStep<T>;
    from(sql: string, ...args: any[]): ISelectJoinStep<T>;
    hint(hint: string): ISelectFromStep<T>;
}
