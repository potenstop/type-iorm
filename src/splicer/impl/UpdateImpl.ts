/**
 *
 * 功能描述:
 *
 * @className UpdateImpl
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/21 19:08
 */
import {IUpdateSetStep} from "../IUpdateSetStep";
import {IUpdateConditionStep} from "../IUpdateConditionStep";
import {ICondition} from "../ICondition";
import {ISelect} from "../ISelect";
import {IChangeResult} from "../IChangeResult";
import {IQuery} from "../IQuery";
import {IUpdateWhereStep} from "../IUpdateWhereStep";
import {IField} from "../IField";

export class UpdateImpl<T> implements IUpdateSetStep<T>, IUpdateConditionStep<T> {
    public and(condition: ICondition): IUpdateConditionStep<T>;
    public and(sql: string): IUpdateConditionStep<T>;
    public and(sql: string, ...args: any[]): IUpdateConditionStep<T>;
    public and(condition: ICondition | string, ...args: any[]): IUpdateConditionStep<T> {
        return undefined;
    }

    public andExists(select: ISelect<any>): IUpdateConditionStep<T> {
        return undefined;
    }

    public andNot(condition: ICondition): IUpdateConditionStep<T>;
    public andNot(sql: string): IUpdateConditionStep<T>;
    public andNot(sql: string, ...args: any[]): IUpdateConditionStep<T>;
    public andNot(condition: ICondition | string, ...args: any[]): IUpdateConditionStep<T> {
        return undefined;
    }

    public andNotExists(select: ISelect<any>): IUpdateConditionStep<T> {
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

    public or(condition: IUpdateConditionStep<T>): IUpdateConditionStep<T>;
    public or(sql: string): IUpdateConditionStep<T>;
    public or(sql: string, ...args: any[]): IUpdateConditionStep<T>;
    public or(condition: IUpdateConditionStep<T> | string, ...args: any[]): IUpdateConditionStep<T> {
        return undefined;
    }

    public orExists(select: ISelect<any>): IUpdateConditionStep<T> {
        return undefined;
    }

    public orNot(condition: ICondition): IUpdateConditionStep<T>;
    public orNot(sql: string): IUpdateConditionStep<T>;
    public orNot(sql: string, ...args: any[]): IUpdateConditionStep<T>;
    public orNot(condition: ICondition | string, ...args: any[]): IUpdateConditionStep<T> {
        return undefined;
    }

    public orNotExists(select: ISelect<any>): IUpdateConditionStep<T> {
        return undefined;
    }

    public queryTimeout(seconds: number): IQuery {
        return undefined;
    }

    public set<R>(field: IField<R>, value: R): IUpdateWhereStep<T>;
    public set(map: Map<any, any>): IUpdateWhereStep<T>;
    public set(field, value?): IUpdateWhereStep<T> {
        return undefined;
    }

}
