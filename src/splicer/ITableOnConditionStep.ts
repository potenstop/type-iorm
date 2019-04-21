/**
 *
 * 功能描述:
 *
 * @className ITableOnConditionStep
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/4/21 11:01
 */
import {ITable} from "./ITable";
import {IRecord} from "./IRecord";
import {ICondition} from "./ICondition";
import {IField} from "./IField";
import {ISQL} from "./ISQL";
import {IObjectLiteral} from "../type/IObjectLiteral";
import {ISelect} from "./ISelect";

export interface ITableOnConditionStep<R extends IRecord> extends ITable<R> {
    and(condition: ICondition): ITableOnConditionStep<R>;
    and(condition: IField<boolean>): ITableOnConditionStep<R>;
    and(sql: ISQL): ITableOnConditionStep<R>;
    and(sql: string): ITableOnConditionStep<R>;
    and(sql: string, args: IObjectLiteral): ITableOnConditionStep<R>;

    andNot(condition: ICondition): ITableOnConditionStep<R>;
    andNot(condition: IField<boolean>): ITableOnConditionStep<R>;

    andExists(select: ISelect<any>): ITableOnConditionStep<R>;
    andNotExists(select: ISelect<any>): ITableOnConditionStep<R>;

    or(condition: ICondition): ITableOnConditionStep<R>;
    or(condition: IField<boolean>): ITableOnConditionStep<R>;
    or(sql: ISQL): ITableOnConditionStep<R>;
    or(sql: string): ITableOnConditionStep<R>;
    or(sql: string, args: IObjectLiteral): ITableOnConditionStep<R>;

    orNot(condition: ICondition): ITableOnConditionStep<R>;
    orNot(condition: IField<boolean>): ITableOnConditionStep<R>;

    orExists(select: ISelect<any>): ITableOnConditionStep<R>;
    orNotExists(select: ISelect<any>): ITableOnConditionStep<R>;

}
