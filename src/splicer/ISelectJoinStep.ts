import {ISelectWhereStep} from "./ISelectWhereStep";
import {ObjectType} from "../type/ObjectType";
import {ISelectOnStep} from "./ISelectOnStep";
import {IObjectLiteral} from "../type/IObjectLiteral";

/**
 *
 * 功能描述:
 *
 * @className ISelectJoinStep
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/13 15:53
 */
export interface ISelectJoinStep<T> extends ISelectWhereStep<T> {
    join(table: ObjectType<T>): ISelectOnStep<T>;
    join(sql: string): ISelectOnStep<T>;
    join(sql: string, args: IObjectLiteral): ISelectOnStep<T>;
    innerJoin(table: ObjectType<T>): ISelectOnStep<T>;
    innerJoin(sql: string): ISelectOnStep<T>;
    innerJoin(sql: string, args: IObjectLiteral): ISelectOnStep<T>;
    crossJoin(table: ObjectType<T>): ISelectJoinStep<T>;
    crossJoin(sql: string): ISelectJoinStep<T>;
    crossJoin(sql: string, args: IObjectLiteral): ISelectJoinStep<T>;
    leftJoin(table: ObjectType<T>): ISelectOnStep<T>;
    leftJoin(sql: string): ISelectOnStep<T>;
    leftJoin(sql: string, args: IObjectLiteral): ISelectOnStep<T>;
    leftOutJoin(table: ObjectType<T>): ISelectOnStep<T>;
    leftOutJoin(sql: string): ISelectOnStep<T>;
    leftOutJoin(sql: string, args: IObjectLiteral): ISelectOnStep<T>;
    rightJoin(table: ObjectType<T>): ISelectOnStep<T>;
    rightJoin(sql: string): ISelectOnStep<T>;
    rightJoin(sql: string, args: IObjectLiteral): ISelectOnStep<T>;
    rightOutJoin(table: ObjectType<T>): ISelectOnStep<T>;
    rightOutJoin(sql: string): ISelectOnStep<T>;
    rightOutJoin(sql: string, args: IObjectLiteral): ISelectOnStep<T>;
    fullJoin(table: ObjectType<T>): ISelectOnStep<T>;
    fullJoin(sql: string): ISelectOnStep<T>;
    fullJoin(sql: string, args: IObjectLiteral): ISelectOnStep<T>;
    fullOutJoin(table: ObjectType<T>): ISelectOnStep<T>;
    fullOutJoin(sql: string): ISelectOnStep<T>;
    fullOutJoin(sql: string, args: IObjectLiteral): ISelectOnStep<T>;
}
