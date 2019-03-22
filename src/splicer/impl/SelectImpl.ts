/**
 *
 * 功能描述:
 *
 * @className SelectImpl
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/13 19:36
 */
import {ISelectSelectStep} from "../ISelectSelectStep";
import {ISelectOptionStep} from "../ISelectOptionStep";
import {ObjectType} from "../../type/ObjectType";
import {ISelectJoinStep} from "../ISelectJoinStep";
import {IField} from "../IField";
import {ISelectHavingStep} from "../ISelectHavingStep";
import {ISelectHavingConditionStep} from "../ISelectHavingConditionStep";
import {ICondition} from "../ICondition";
import {ISelectFromStep} from "../ISelectFromStep";
import {ISelectIntoStep} from "../ISelectIntoStep";
import {ISelectForUpdateStep} from "../ISelectForUpdateStep";
import {ISelectUnionStep} from "../ISelectUnionStep";
import {IQueryPart} from "../IQueryPart";
import {ISelect} from "../ISelect";
import {ISelectConditionStep} from "../ISelectConditionStep";
import {ISelectOnConditionStep} from "../ISelectOnConditionStep";
import {ISelectOnStep} from "../ISelectOnStep";
import {IResultQuery} from "../IResultQuery";
import {IQuery} from "../IQuery";
import {IResult} from "../IResult";

export class SelectImpl<T> implements ISelectSelectStep<T>, ISelectOnConditionStep<T> {
    public and(condition: ICondition): ISelectOnConditionStep<T>;
    public and(sql: string): ISelectOnConditionStep<T>;
    public and(sql: string, ...args: any[]): ISelectOnConditionStep<T>;
    public and(condition: ICondition | string, ...args: any[]): ISelectOnConditionStep<T> {
        return undefined;
    }

    public andExists(select: ISelect<any>): ISelectOnConditionStep<T> {
        return undefined;
    }

    public andNot(condition: ICondition): ISelectOnConditionStep<T>;
    public andNot(sql: string): ISelectOnConditionStep<T>;
    public andNot(sql: string, ...args: any[]): ISelectOnConditionStep<T>;
    public andNot(condition: ICondition | string, ...args: any[]): ISelectOnConditionStep<T> {
        return undefined;
    }

    public andNotExists(select: ISelect<any>): ISelectOnConditionStep<T> {
        return undefined;
    }

    public crossJoin(table: ObjectType<T>): ISelectJoinStep<T>;
    public crossJoin(sql: string): ISelectJoinStep<T>;
    public crossJoin(sql: string, ...args: any[]): ISelectJoinStep<T>;
    public crossJoin(table: ObjectType<T> | string, ...args: any[]): ISelectJoinStep<T> {
        return undefined;
    }

    public equals(value: any): boolean {
        return false;
    }

    public forShare(): ISelectOptionStep<T> {
        return undefined;
    }

    public from(...table: Array<ObjectType<T>>): ISelectJoinStep<T>;
    public from(sql: string): ISelectJoinStep<T>;
    public from(sql: string, ...args: any[]): ISelectJoinStep<T>;
    public from(...table: Array<ObjectType<T> | string | any>): ISelectJoinStep<T> {
        return this;
    }

    public fullJoin(table: ObjectType<T>): ISelectOnStep<T>;
    public fullJoin(sql: string): ISelectOnStep<T>;
    public fullJoin(sql: string, ...args: any[]): ISelectOnStep<T>;
    public fullJoin(table: ObjectType<T> | string, ...args: any[]): ISelectOnStep<T> {
        return undefined;
    }

    public fullOutJoin(table: ObjectType<T>): ISelectOnStep<T>;
    public fullOutJoin(sql: string): ISelectOnStep<T>;
    public fullOutJoin(sql: string, ...args: any[]): ISelectOnStep<T>;
    public fullOutJoin(table: ObjectType<T> | string, ...args: any[]): ISelectOnStep<T> {
        return undefined;
    }

    public getQuery(): string {
        return "";
    }

    public groupBy(...fields: Array<IField<T>>): ISelectHavingStep<T> {
        return undefined;
    }

    public hashCode(): number {
        return 0;
    }

    public having(...condition: ICondition[]): ISelectHavingConditionStep<T>;
    public having(sql: string): ISelectHavingConditionStep<T>;
    public having(sql: string, ...args: any[]): ISelectHavingConditionStep<T>;
    public having(...condition: Array<ICondition | string | any>): ISelectHavingConditionStep<T> {
        return undefined;
    }

    public hint(hint: string): ISelectFromStep<T> {
        return undefined;
    }

    public innerJoin(table: ObjectType<T>): ISelectOnStep<T>;
    public innerJoin(sql: string): ISelectOnStep<T>;
    public innerJoin(sql: string, ...args: any[]): ISelectOnStep<T>;
    public innerJoin(table: ObjectType<T> | string, ...args: any[]): ISelectOnStep<T> {
        return undefined;
    }

    public into(table: ObjectType<T>): ISelectIntoStep<T> {
        return undefined;
    }

    public join(table: ObjectType<T>): ISelectOnStep<T>;
    public join(sql: string): ISelectOnStep<T>;
    public join(sql: string, ...args: any[]): ISelectOnStep<T>;
    public join(table: ObjectType<T> | string, ...args: any[]): ISelectOnStep<T> {
        return undefined;
    }

    public leftJoin(table: ObjectType<T>): ISelectOnStep<T>;
    public leftJoin(sql: string): ISelectOnStep<T>;
    public leftJoin(sql: string, ...args: any[]): ISelectOnStep<T>;
    public leftJoin(table: ObjectType<T> | string, ...args: any[]): ISelectOnStep<T> {
        return undefined;
    }

    public leftOutJoin(table: ObjectType<T>): ISelectOnStep<T>;
    public leftOutJoin(sql: string): ISelectOnStep<T>;
    public leftOutJoin(sql: string, ...args: any[]): ISelectOnStep<T>;
    public leftOutJoin(table: ObjectType<T> | string, ...args: any[]): ISelectOnStep<T> {
        return undefined;
    }

    public limit(offset: number, numberOfRows: number): ISelectForUpdateStep<T>;
    public limit(offset: number): ISelectForUpdateStep<T>;
    public limit(offset: number, numberOfRows?: number): ISelectForUpdateStep<T> {
        return undefined;
    }

    public option(var1: string): ISelectUnionStep {
        return undefined;
    }

    public or(condition: ICondition): ISelectOnConditionStep<T>;
    public or(sql: string): ISelectOnConditionStep<T>;
    public or(sql: string, ...args: any[]): ISelectOnConditionStep<T>;
    public or(condition: ICondition | string, ...args: any[]): ISelectOnConditionStep<T> {
        return undefined;
    }

    public orExists(select: ISelect<any>): ISelectOnConditionStep<T> {
        return undefined;
    }

    public orNot(condition: ICondition): ISelectOnConditionStep<T>;
    public orNot(sql: string): ISelectOnConditionStep<T>;
    public orNot(sql: string, ...args: any[]): ISelectOnConditionStep<T>;
    public orNot(condition: ICondition | string, ...args: any[]): ISelectOnConditionStep<T> {
        return undefined;
    }

    public orNotExists(select: ISelect<any>): ISelectOnConditionStep<T> {
        return undefined;
    }

    public orderBy(...fields: Array<IField<T>>) {
    }

    public rightJoin(table: ObjectType<T>): ISelectOnStep<T>;
    public rightJoin(sql: string): ISelectOnStep<T>;
    public rightJoin(sql: string, ...args: any[]): ISelectOnStep<T>;
    public rightJoin(table: ObjectType<T> | string, ...args: any[]): ISelectOnStep<T> {
        return undefined;
    }

    public rightOutJoin(table: ObjectType<T>): ISelectOnStep<T>;
    public rightOutJoin(sql: string): ISelectOnStep<T>;
    public rightOutJoin(sql: string, ...args: any[]): ISelectOnStep<T>;
    public rightOutJoin(table: ObjectType<T> | string, ...args: any[]): ISelectOnStep<T> {
        return undefined;
    }

    public select(...fields: IQueryPart[]): ISelectSelectStep<T> {
        return undefined;
    }

    public union(select: ISelect<T>) {
    }

    public unionAll(select: ISelect<T>) {
    }

    public where(...condition: ICondition[]): ISelectConditionStep<T>;
    public where(sql: string): ISelectConditionStep<T>;
    public where(sql: string, ...args: any[]): ISelectConditionStep<T>;
    public where(...condition: Array<ICondition | string | any>): ISelectConditionStep<T> {
        return undefined;
    }

    public whereExists(select: ISelect<T>): ISelectConditionStep<T> {
        return undefined;
    }

    public whereNotExists(select: ISelect<T>): ISelectConditionStep<T> {
        return undefined;
    }

    public execute(): Promise<any> {
        return undefined;
    }

    public fetch(): Array<IResult<T>> {
        return undefined;
    }

    public fetchMap(): Map<string, IResult<T>> {
        return undefined;
    }

    public fetchOne(): IResult<T> {
        return undefined;
    }

    public fetchSize(size: number): IResultQuery<T> {
        return undefined;
    }

    public getSQL(): string {
        return "";
    }

    public maxRows(size: number): IResultQuery<T> {
        return undefined;
    }

    public queryTimeout(seconds: number): IQuery {
        return undefined;
    }

}
