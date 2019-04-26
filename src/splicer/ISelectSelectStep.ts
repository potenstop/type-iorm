/**
 *
 * 功能描述:
 *
 * @className ISelectSelectStep
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/13 19:27
 */
import {ISelectIntoStep} from "./ISelectIntoStep";
import {IQueryPart} from "./IQueryPart";
import {IRecord} from "./IRecord";

export interface ISelectSelectStep<R extends IRecord> extends ISelectIntoStep<R> {
    select(...fields: IQueryPart[]): ISelectSelectStep<R>;
}
