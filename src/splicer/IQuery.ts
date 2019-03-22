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

export interface IQuery extends IStatement {
    execute(): Promise<number>;
    isExecutable(): boolean;
    getSQL(): string;
    queryTimeout(seconds: number): IQuery;
}
