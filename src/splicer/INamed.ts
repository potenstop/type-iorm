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

export interface INamed extends IQueryPart {
    getName(): string;
}
