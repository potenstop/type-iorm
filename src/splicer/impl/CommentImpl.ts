/**
 *
 * 功能描述:
 *
 * @className CommentImpl
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/4/23 16:20
 */
import {AbstractQueryPart} from "./AbstractQueryPart";
import {IComment} from "../IComment";
import {IContext} from "../IContext";
import {JSHelperUtil} from "../../util/JSHelperUtil";
import {Joint} from "./Joint";

export class CommentImpl extends AbstractQueryPart implements IComment {
    private comment: string;

    constructor(comment: string) {
        super();
        this.comment = JSHelperUtil.isNullOrUndefined(comment) ? "" : comment;
    }
    public accept(ctx: IContext): void {
    }

    public getComment(): string {
        return this.comment;
    }

}
