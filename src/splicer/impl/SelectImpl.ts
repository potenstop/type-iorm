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
import {IObjectLiteral} from "../../type/IObjectLiteral";
import {IContext} from "../IContext";
import {IRecord} from "../IRecord";

export class SelectImpl<R extends IRecord> implements ISelectSelectStep<R>, ISelectOnConditionStep<R> {
    public and(condition: ICondition): ISelectOnConditionStep<R>;
    public and(sql: string): ISelectOnConditionStep<R>;
    public and(sql: string, args: IObjectLiteral): ISelectOnConditionStep<R>;
    public and(condition: ICondition | string, args?: IObjectLiteral): ISelectOnConditionStep<R> {
        return undefined;
    }

    public andExists(select: ISelect<any>): ISelectOnConditionStep<R> {
        return undefined;
    }

    public andNot(condition: ICondition): ISelectOnConditionStep<R>;
    public andNot(sql: string): ISelectOnConditionStep<R>;
    public andNot(sql: string, args: IObjectLiteral): ISelectOnConditionStep<R>;
    public andNot(condition: ICondition | string, args?: IObjectLiteral): ISelectOnConditionStep<R> {
        return undefined;
    }

    public andNotExists(select: ISelect<any>): ISelectOnConditionStep<R> {
        return undefined;
    }

    public crossJoin(table: ObjectType<R>): ISelectJoinStep<R>;
    public crossJoin(sql: string): ISelectJoinStep<R>;
    public crossJoin(sql: string, args: IObjectLiteral): ISelectJoinStep<R>;
    public crossJoin(table: ObjectType<R> | string, args?: IObjectLiteral): ISelectJoinStep<R> {
        return undefined;
    }

    public equals(value: any): boolean {
        return false;
    }

    public execute(): Promise<IContext> {
        return undefined;
    }

    public fetch(): Array<IResult<R>> {
        return undefined;
    }

    public fetchMap(): Map<string, IResult<R>> {
        return undefined;
    }

    public fetchOne(): IResult<R> {
        return undefined;
    }

    public fetchSize(size: number): IResultQuery<R> {
        return undefined;
    }

    public forShare(): ISelectOptionStep<R> {
        return undefined;
    }

    public from(...table: Array<ObjectType<R>>): ISelectJoinStep<R>;
    public from(sql: string): ISelectJoinStep<R>;
    public from(sql: string, args: IObjectLiteral): ISelectJoinStep<R>;
    public from(...table: Array<ObjectType<R> | string | IObjectLiteral>): ISelectJoinStep<R> {
        return undefined;
    }

    public fullJoin(table: ObjectType<R>): ISelectOnStep<R>;
    public fullJoin(sql: string): ISelectOnStep<R>;
    public fullJoin(sql: string, args: IObjectLiteral): ISelectOnStep<R>;
    public fullJoin(table: ObjectType<R> | string, args?: IObjectLiteral): ISelectOnStep<R> {
        return undefined;
    }

    public fullOutJoin(table: ObjectType<R>): ISelectOnStep<R>;
    public fullOutJoin(sql: string): ISelectOnStep<R>;
    public fullOutJoin(sql: string, args: IObjectLiteral): ISelectOnStep<R>;
    public fullOutJoin(table: ObjectType<R> | string, args?: IObjectLiteral): ISelectOnStep<R> {
        return undefined;
    }

    public getQuery(): string {
        return "";
    }

    public getSQL(): string {
        return "";
    }

    public groupBy(...fields: Array<IField<R>>): ISelectHavingStep<R> {
        return undefined;
    }

    public hashCode(): number {
        return 0;
    }

    public having(...condition: ICondition[]): ISelectHavingConditionStep<R>;
    public having(sql: string): ISelectHavingConditionStep<R>;
    public having(sql: string, args: IObjectLiteral): ISelectHavingConditionStep<R>;
    public having(...condition: Array<ICondition | string | IObjectLiteral>): ISelectHavingConditionStep<R> {
        return undefined;
    }

    public hint(hint: string): ISelectFromStep<R> {
        return undefined;
    }

    public innerJoin(table: ObjectType<R>): ISelectOnStep<R>;
    public innerJoin(sql: string): ISelectOnStep<R>;
    public innerJoin(sql: string, args: IObjectLiteral): ISelectOnStep<R>;
    public innerJoin(table: ObjectType<R> | string, args?: IObjectLiteral): ISelectOnStep<R> {
        return undefined;
    }

    public into(table: ObjectType<R>): ISelectIntoStep<R> {
        return undefined;
    }

    public isExecutable(): boolean {
        return false;
    }

    public join(table: ObjectType<R>): ISelectOnStep<R>;
    public join(sql: string): ISelectOnStep<R>;
    public join(sql: string, args: IObjectLiteral): ISelectOnStep<R>;
    public join(table: ObjectType<R> | string, args?: IObjectLiteral): ISelectOnStep<R> {
        return undefined;
    }

    public leftJoin(table: ObjectType<R>): ISelectOnStep<R>;
    public leftJoin(sql: string): ISelectOnStep<R>;
    public leftJoin(sql: string, args: IObjectLiteral): ISelectOnStep<R>;
    public leftJoin(table: ObjectType<R> | string, args?: IObjectLiteral): ISelectOnStep<R> {
        return undefined;
    }

    public leftOutJoin(table: ObjectType<R>): ISelectOnStep<R>;
    public leftOutJoin(sql: string): ISelectOnStep<R>;
    public leftOutJoin(sql: string, args: IObjectLiteral): ISelectOnStep<R>;
    public leftOutJoin(table: ObjectType<R> | string, args?: IObjectLiteral): ISelectOnStep<R> {
        return undefined;
    }

    public limit(offset: number, numberOfRows: number): ISelectForUpdateStep<R>;
    public limit(offset: number): ISelectForUpdateStep<R>;
    public limit(offset: number, numberOfRows?: number): ISelectForUpdateStep<R> {
        return undefined;
    }

    public maxRows(size: number): IResultQuery<R> {
        return undefined;
    }

    public option(var1: string): ISelectUnionStep<R> {
        return undefined;
    }

    public or(condition: ICondition): ISelectOnConditionStep<R>;
    public or(sql: string): ISelectOnConditionStep<R>;
    public or(sql: string, args: IObjectLiteral): ISelectOnConditionStep<R>;
    public or(condition: ICondition | string, args?: IObjectLiteral): ISelectOnConditionStep<R> {
        return undefined;
    }

    public orExists(select: ISelect<any>): ISelectOnConditionStep<R> {
        return undefined;
    }

    public orNot(condition: ICondition): ISelectOnConditionStep<R>;
    public orNot(sql: string): ISelectOnConditionStep<R>;
    public orNot(sql: string, args: IObjectLiteral): ISelectOnConditionStep<R>;
    public orNot(condition: ICondition | string, args?: IObjectLiteral): ISelectOnConditionStep<R> {
        return undefined;
    }

    public orNotExists(select: ISelect<any>): ISelectOnConditionStep<R> {
        return undefined;
    }

    public orderBy(...fields: Array<IField<R>>) {
    }

    public queryTimeout(seconds: number): IQuery {
        return undefined;
    }

    public rightJoin(table: ObjectType<R>): ISelectOnStep<R>;
    public rightJoin(sql: string): ISelectOnStep<R>;
    public rightJoin(sql: string, args: IObjectLiteral): ISelectOnStep<R>;
    public rightJoin(table: ObjectType<R> | string, args?: IObjectLiteral): ISelectOnStep<R> {
        return undefined;
    }

    public rightOutJoin(table: ObjectType<R>): ISelectOnStep<R>;
    public rightOutJoin(sql: string): ISelectOnStep<R>;
    public rightOutJoin(sql: string, args: IObjectLiteral): ISelectOnStep<R>;
    public rightOutJoin(table: ObjectType<R> | string, args?: IObjectLiteral): ISelectOnStep<R> {
        return undefined;
    }

    public select(...fields: IQueryPart[]): ISelectSelectStep<R> {
        return undefined;
    }

    public union(select: ISelect<R>) {
    }

    public unionAll(select: ISelect<R>) {
    }

    public where(...condition: ICondition[]): ISelectConditionStep<R>;
    public where(sql: string): ISelectConditionStep<R>;
    public where(sql: string, args: IObjectLiteral): ISelectConditionStep<R>;
    public where(...condition: Array<ICondition | string | IObjectLiteral>): ISelectConditionStep<R> {
        return undefined;
    }

    public whereExists(select: ISelect<R>): ISelectConditionStep<R> {
        return undefined;
    }

    public whereNotExists(select: ISelect<R>): ISelectConditionStep<R> {
        return undefined;
    }

}
