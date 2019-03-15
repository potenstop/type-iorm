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

export interface ISelectSelectStep<T> extends ISelectIntoStep<T> {
    select(...fields: IQueryPart[]): ISelectSelectStep<T>;
}
