import {ISelectWhereStep} from "./ISelectWhereStep";
import {ObjectType} from "../type/ObjectType";
import {ISelectOnStep} from "./ISelectOnStep";
import {IObjectLiteral} from "../type/IObjectLiteral";
import {IRecord} from "./IRecord";

/**
 *
 * 功能描述:
 *
 * @className ISelectJoinStep
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/13 15:53
 */
export interface ISelectJoinStep<R extends IRecord> extends ISelectWhereStep<R> {
    join(table: ObjectType<R>): ISelectOnStep<R>;
    join(sql: string): ISelectOnStep<R>;
    join(sql: string, args: IObjectLiteral): ISelectOnStep<R>;
    innerJoin(table: ObjectType<R>): ISelectOnStep<R>;
    innerJoin(sql: string): ISelectOnStep<R>;
    innerJoin(sql: string, args: IObjectLiteral): ISelectOnStep<R>;
    crossJoin(table: ObjectType<R>): ISelectJoinStep<R>;
    crossJoin(sql: string): ISelectJoinStep<R>;
    crossJoin(sql: string, args: IObjectLiteral): ISelectJoinStep<R>;
    leftJoin(table: ObjectType<R>): ISelectOnStep<R>;
    leftJoin(sql: string): ISelectOnStep<R>;
    leftJoin(sql: string, args: IObjectLiteral): ISelectOnStep<R>;
    leftOutJoin(table: ObjectType<R>): ISelectOnStep<R>;
    leftOutJoin(sql: string): ISelectOnStep<R>;
    leftOutJoin(sql: string, args: IObjectLiteral): ISelectOnStep<R>;
    rightJoin(table: ObjectType<R>): ISelectOnStep<R>;
    rightJoin(sql: string): ISelectOnStep<R>;
    rightJoin(sql: string, args: IObjectLiteral): ISelectOnStep<R>;
    rightOutJoin(table: ObjectType<R>): ISelectOnStep<R>;
    rightOutJoin(sql: string): ISelectOnStep<R>;
    rightOutJoin(sql: string, args: IObjectLiteral): ISelectOnStep<R>;
    fullJoin(table: ObjectType<R>): ISelectOnStep<R>;
    fullJoin(sql: string): ISelectOnStep<R>;
    fullJoin(sql: string, args: IObjectLiteral): ISelectOnStep<R>;
    fullOutJoin(table: ObjectType<R>): ISelectOnStep<R>;
    fullOutJoin(sql: string): ISelectOnStep<R>;
    fullOutJoin(sql: string, args: IObjectLiteral): ISelectOnStep<R>;
}
