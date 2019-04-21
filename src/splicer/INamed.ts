/**
 *
 * 功能描述:
 *
 * @className Named
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/23 20:41
 */
import {IQueryPart} from "./IQueryPart";
import {IName} from "./IName";

export interface INamed extends IQueryPart {
    /**
     * The unqualified name of this object.
     */
    getName(): string;

    /**
     * The qualified name of this object.
     */
    getQualifiedName(): IName;

    /**
     * The unqualified name of this object.
     */
    getUnqualifiedName(): IName;

    /**
     * The comment on this object.
     */
    getComment(): string;
}
