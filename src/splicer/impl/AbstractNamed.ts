/**
 *
 * 功能描述:
 *
 * @className AbstractNamed
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/4/23 14:44
 */
import {AbstractQueryPart} from "./AbstractQueryPart";
import {INamed} from "../INamed";
import {IName} from "../IName";
import {IComment} from "../IComment";

export abstract class AbstractNamed extends AbstractQueryPart implements INamed {
    private name: IName;
    private commend: IComment;

    constructor(name: IName, comment: IComment) {

    }
    public getComment(): string {
        return ;
    }

    public getName(): string {
        return "";
    }

    public getQualifiedName(): IName {
        return undefined;
    }

    public getUnqualifiedName(): IName {
        return undefined;
    }

}
