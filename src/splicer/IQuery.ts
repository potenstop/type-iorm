/**
 *
 * 功能描述:
 *
 * @className IQuery
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/20 16:08
 */
import {IStatement} from "./IStatement";
import {IContext} from "./IContext";

export interface IQuery extends IStatement {
    execute(): Promise<IContext>;
    isExecutable(): boolean;
    getSQL(): string;
    queryTimeout(seconds: number): IQuery;
}
