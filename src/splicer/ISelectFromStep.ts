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
import {IObjectLiteral} from "../type/IObjectLiteral";
import {IRecord} from "./IRecord";

export interface ISelectFromStep<R extends IRecord> extends ISelectWhereStep<R> {
    from(...table: Array<ObjectType<R>>): ISelectJoinStep<R>;
    from(sql: string): ISelectJoinStep<R>;
    from(sql: string, args: IObjectLiteral): ISelectJoinStep<R>;
    hint(hint: string): ISelectFromStep<R>;
}
