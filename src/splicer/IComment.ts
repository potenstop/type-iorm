/**
 *
 * 功能描述:
 *
 * @className IComment
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/4/23 16:13
 */
import {IQueryPart} from "./IQueryPart";

export interface IComment extends IQueryPart {
    getComment(): string;
}
