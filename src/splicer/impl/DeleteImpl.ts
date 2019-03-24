/**
 *
 * 功能描述:
 *
 * @className DeleteImpl
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/21 20:08
 */
import {IDeleteWhereStep} from "../IDeleteWhereStep";
import {IDeleteConditionStep} from "../IDeleteConditionStep";
import {ICondition} from "../ICondition";
import {ISelect} from "../ISelect";
import {IChangeResult} from "../IChangeResult";
import {IQuery} from "../IQuery";

export class DeleteImpl<T> implements IDeleteWhereStep<T>, IDeleteConditionStep<T> {
    public and(condition: ICondition): IDeleteConditionStep<T>;
    public and(sql: string): IDeleteConditionStep<T>;
    public and(sql: string, ...args: any[]): IDeleteConditionStep<T>;
    public and(condition: ICondition | string, ...args: any[]): IDeleteConditionStep<T> {
        return undefined;
    }

    public andExists(select: ISelect<any>): IDeleteConditionStep<T> {
        return undefined;
    }

    public andNot(condition: ICondition): IDeleteConditionStep<T>;
    public andNot(sql: string): IDeleteConditionStep<T>;
    public andNot(sql: string, ...args: any[]): IDeleteConditionStep<T>;
    public andNot(condition: ICondition | string, ...args: any[]): IDeleteConditionStep<T> {
        return undefined;
    }

    public andNotExists(select: ISelect<any>): IDeleteConditionStep<T> {
        return undefined;
    }

    public equals(value: any): boolean {
        return false;
    }

    public execute(): Promise<number> {
        return undefined;
    }

    public getAffectedRow(): number {
        return 0;
    }

    public getInsertId(): number {
        return 0;
    }

    public getResult(): IChangeResult {
        return undefined;
    }

    public getSQL(): string {
        return "";
    }

    public hashCode(): number {
        return 0;
    }

    public or(condition: IDeleteConditionStep<T>): IDeleteConditionStep<T>;
    public or(sql: string): IDeleteConditionStep<T>;
    public or(sql: string, ...args: any[]): IDeleteConditionStep<T>;
    public or(condition: IDeleteConditionStep<T> | string, ...args: any[]): IDeleteConditionStep<T> {
        return undefined;
    }

    public orExists(select: ISelect<any>): IDeleteConditionStep<T> {
        return undefined;
    }

    public orNot(condition: ICondition): IDeleteConditionStep<T>;
    public orNot(sql: string): IDeleteConditionStep<T>;
    public orNot(sql: string, ...args: any[]): IDeleteConditionStep<T>;
    public orNot(condition: ICondition | string, ...args: any[]): IDeleteConditionStep<T> {
        return undefined;
    }

    public orNotExists(select: ISelect<any>): IDeleteConditionStep<T> {
        return undefined;
    }

    public queryTimeout(seconds: number): IQuery {
        return undefined;
    }

    public where(...condition: ICondition[]): IDeleteConditionStep<T>;
    public where(sql: string): IDeleteConditionStep<T>;
    public where(sql: string, ...args: any[]): IDeleteConditionStep<T>;
    public where(...condition: Array<ICondition | string | any>): IDeleteConditionStep<T> {
        return undefined;
    }

    public whereExists(select: ISelect<T>): IDeleteConditionStep<T> {
        return undefined;
    }

    public whereNotExists(select: ISelect<T>): IDeleteConditionStep<T> {
        return undefined;
    }

}