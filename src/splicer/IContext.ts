/**
 *
 * 功能描述:
 *
 * @className IContext
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/23 17:53
 */
import {IScope} from "./IScope";
import {IField} from "./IField";

export interface IContext extends IScope {
    sql(sql: string): this;
    render(): string;
}
