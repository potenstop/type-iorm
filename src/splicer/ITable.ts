/**
 *
 * 功能描述:
 *
 * @className ITable
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/4/20 18:35
 */
import {IName} from "./IName";
import {ITableLike} from "./ITableLike";
import {IRecord} from "./IRecord";
import {IRecordType} from "./IRecordType";
import {IDataType} from "./IDataType";
import {JoinType} from "./impl/JoinType";
import {ITableOptionalOnStep} from "./ITableOptionalOnStep";
import {ITableOnStep} from "./ITableOnStep";
import {ISQL} from "./ISQL";
import {IObjectLiteral} from "../type/IObjectLiteral";

export interface ITable<R extends IRecord>  extends ITableLike<R>, IName {
    recordType(): IRecordType<R>;
    getRecordType(): Class<R>;
    getDataType(): IDataType<R>;
    newRecord(): R;
    as(alias: string): ITable<R>;
    as(alias: string, ...fieldAliases: string[]): ITable<R>;
    as(alais: IName): ITable<R>;
    as(alais: IName, ...fieldAliases: IName[]): ITable<R>;
    as(otherTable: ITable<any>): ITable<R>;

    join(table: ITableLike<any>, type: JoinType): ITableOptionalOnStep<IRecord>;

    join(table: ITableLike<any>): ITableOnStep<IRecord>;
    join(sql: ISQL): ITableOnStep<IRecord>;
    join(sql: string): ITableOnStep<IRecord>;
    join(sql: string, args: IObjectLiteral): ITableOnStep<IRecord>;
    join(name: IName): ITableOnStep<IRecord>;

    innerJoin(table: ITableLike<any>): ITableOnStep<IRecord>;
    innerJoin(sql: ISQL): ITableOnStep<IRecord>;
    innerJoin(sql: string): ITableOnStep<IRecord>;
    innerJoin(sql: string, args: IObjectLiteral): ITableOnStep<IRecord>;
    innerJoin(name: IName): ITableOnStep<IRecord>;

    leftJoin(table: ITableLike<any>): ITableOnStep<IRecord>;
    leftJoin(sql: ISQL): ITableOnStep<IRecord>;
    leftJoin(sql: string): ITableOnStep<IRecord>;
    leftJoin(sql: string, args: IObjectLiteral): ITableOnStep<IRecord>;
    leftJoin(name: IName): ITableOnStep<IRecord>;

    rightJoin(table: ITableLike<any>): ITableOnStep<IRecord>;
    rightJoin(sql: ISQL): ITableOnStep<IRecord>;
    rightJoin(sql: string): ITableOnStep<IRecord>;
    rightJoin(sql: string, args: IObjectLiteral): ITableOnStep<IRecord>;
    rightJoin(name: IName): ITableOnStep<IRecord>;

    fullJoin(table: ITableLike<any>): ITableOnStep<IRecord>;
    fullJoin(sql: ISQL): ITableOnStep<IRecord>;
    fullJoin(sql: string): ITableOnStep<IRecord>;
    fullJoin(sql: string, args: IObjectLiteral): ITableOnStep<IRecord>;
    fullJoin(name: IName): ITableOnStep<IRecord>;

    fullOuterJoin(table: ITableLike<any>): ITableOnStep<IRecord>;
    fullOuterJoin(sql: ISQL): ITableOnStep<IRecord>;
    fullOuterJoin(sql: string): ITableOnStep<IRecord>;
    fullOuterJoin(sql: string, args: IObjectLiteral): ITableOnStep<IRecord>;
    fullOuterJoin(name: IName): ITableOnStep<IRecord>;

    crossJoin(table: ITableLike<any>): ITable<IRecord>;
    crossJoin(sql: ISQL): ITable<IRecord>;
    crossJoin(sql: string): ITable<IRecord>;
    crossJoin(sql: string, args: IObjectLiteral): ITable<IRecord>;
    crossJoin(name: IName): ITable<IRecord>;

    naturalJoin(table: ITableLike<any>): ITable<IRecord>;
    naturalJoin(sql: ISQL): ITable<IRecord>;
    naturalJoin(sql: string): ITable<IRecord>;
    naturalJoin(sql: string, args: IObjectLiteral): ITable<IRecord>;
    naturalJoin(name: IName): ITable<IRecord>;

    naturalLeftOuterJoin(table: ITableLike<any>): ITable<IRecord>;
    naturalLeftOuterJoin(sql: ISQL): ITable<IRecord>;
    naturalLeftOuterJoin(sql: string): ITable<IRecord>;
    naturalLeftOuterJoin(sql: string, args: IObjectLiteral): ITable<IRecord>;
    naturalLeftOuterJoin(name: IName): ITable<IRecord>;

    naturalRightOuterJoin(table: ITableLike<any>): ITable<IRecord>;
    naturalRightOuterJoin(sql: ISQL): ITable<IRecord>;
    naturalRightOuterJoin(sql: string): ITable<IRecord>;
    naturalRightOuterJoin(sql: string, args: IObjectLiteral): ITable<IRecord>;
    naturalRightOuterJoin(name: IName): ITable<IRecord>;

    leftOuterJoin(table: ITableLike<any>): ITableOnStep<IRecord>;
    leftOuterJoin(sql: ISQL): ITableOnStep<IRecord>;
    leftOuterJoin(sql: string): ITableOnStep<IRecord>;
    leftOuterJoin(sql: string, args: IObjectLiteral): ITableOnStep<IRecord>;
    leftOuterJoin(name: IName): ITableOnStep<IRecord>;

    leftOuterJoin(table: ITableLike<any>): ITableOnStep<IRecord>;
    leftOuterJoin(sql: ISQL): ITableOnStep<IRecord>;
    leftOuterJoin(sql: string): ITableOnStep<IRecord>;
    leftOuterJoin(sql: string, args: IObjectLiteral): ITableOnStep<IRecord>;
    leftOuterJoin(name: IName): ITableOnStep<IRecord>;


}
