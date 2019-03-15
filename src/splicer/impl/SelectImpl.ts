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

export class SelectImpl<T> implements ISelectSelectStep<T> {
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
        return undefined;
    }

    public getQuery(): string {
        return "";
    }

    public groupBy(...fields: IField[]): ISelectHavingStep<T> {
        return undefined;
    }

    public hashCode(): number {
        return 0;
    }

    public having(...condition: ICondition[]): ISelectHavingConditionStep;
    public having(sql: string): ISelectHavingConditionStep;
    public having(sql: string, ...args: any[]): ISelectHavingConditionStep;
    public having(...condition: Array<ICondition | string | any>): ISelectHavingConditionStep {
        return undefined;
    }

    public hint(hint: string): ISelectFromStep<T> {
        return undefined;
    }

    public into(table: ObjectType<T>): ISelectIntoStep<T> {
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

    public orderBy(...fields: IField[]) {
    }

    public select(...fields: IQueryPart[]): ISelectSelectStep<T> {
        return undefined;
    }

    public union(select: ISelect<T>) {
    }

    public unionAll(select: ISelect<T>) {
    }

    public where(...condition: ICondition[]): ISelectConditionStep;
    public where(sql: string): ISelectConditionStep;
    public where(sql: string, ...args: any[]): ISelectConditionStep;
    public where(...condition: Array<ICondition | string | any>): ISelectConditionStep {
        return undefined;
    }

    public whereExists(select: ISelect<T>): ISelectConditionStep {
        return undefined;
    }

    public whereNotExists(select: ISelect<T>): ISelectConditionStep {
        return undefined;
    }

}
