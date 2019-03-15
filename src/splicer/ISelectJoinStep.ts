import {ISelectWhereStep} from "./ISelectWhereStep";
import {ObjectType} from "../type/ObjectType";
import {ISelectOnStep} from "./ISelectOnStep";

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
    join(sql: string, ...args: any[]): ISelectOnStep<T>;
    innerJoin(table: ObjectType<T>): ISelectOnStep<T>;
    innerJoin(sql: string): ISelectOnStep<T>;
    innerJoin(sql: string, ...args: any[]): ISelectOnStep<T>;
    crossJoin(table: ObjectType<T>): ISelectJoinStep<T>;
    crossJoin(sql: string): ISelectJoinStep<T>;
    crossJoin(sql: string, ...args: any[]): ISelectJoinStep<T>;
    leftJoin(table: ObjectType<T>): ISelectOnStep<T>;
    leftJoin(sql: string): ISelectOnStep<T>;
    leftJoin(sql: string, ...args: any[]): ISelectOnStep<T>;
    leftOutJoin(table: ObjectType<T>): ISelectOnStep<T>;
    leftOutJoin(sql: string): ISelectOnStep<T>;
    leftOutJoin(sql: string, ...args: any[]): ISelectOnStep<T>;
    rightJoin(table: ObjectType<T>): ISelectOnStep<T>;
    rightJoin(sql: string): ISelectOnStep<T>;
    rightJoin(sql: string, ...args: any[]): ISelectOnStep<T>;
    rightOutJoin(table: ObjectType<T>): ISelectOnStep<T>;
    rightOutJoin(sql: string): ISelectOnStep<T>;
    rightOutJoin(sql: string, ...args: any[]): ISelectOnStep<T>;
    fullJoin(table: ObjectType<T>): ISelectOnStep<T>;
    fullJoin(sql: string): ISelectOnStep<T>;
    fullJoin(sql: string, ...args: any[]): ISelectOnStep<T>;
    fullOutJoin(table: ObjectType<T>): ISelectOnStep<T>;
    fullOutJoin(sql: string): ISelectOnStep<T>;
    fullOutJoin(sql: string, ...args: any[]): ISelectOnStep<T>;
}
