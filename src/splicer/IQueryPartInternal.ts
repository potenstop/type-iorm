/**
 *
 * 功能描述:
 *
 * @className IQueryPartInternal
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/22 11:06
 */
import {IQueryPart} from "./IQueryPart";

export interface IQueryPartInternal extends IQueryPart {
    declaresFields(): boolean;
    declaresTables(): boolean;
}
