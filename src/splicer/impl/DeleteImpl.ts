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
import {IObjectLiteral} from "../../type/IObjectLiteral";
import {IContext} from "../IContext";
import {IRecord} from "../IRecord";

export class DeleteImpl<R extends IRecord> implements IDeleteWhereStep<R>, IDeleteConditionStep<R> {
    public and(condition: ICondition): IDeleteConditionStep<R>;
    public and(sql: string): IDeleteConditionStep<R>;
    public and(sql: string, args: IObjectLiteral): IDeleteConditionStep<R>;
    public and(condition: ICondition | string, args?: IObjectLiteral): IDeleteConditionStep<R> {
        return undefined;
    }

    public andExists(select: ISelect<any>): IDeleteConditionStep<R> {
        return undefined;
    }

    public andNot(condition: ICondition): IDeleteConditionStep<R>;
    public andNot(sql: string): IDeleteConditionStep<R>;
    public andNot(sql: string, args: IObjectLiteral): IDeleteConditionStep<R>;
    public andNot(condition: ICondition | string, args?: IObjectLiteral): IDeleteConditionStep<R> {
        return undefined;
    }

    public andNotExists(select: ISelect<any>): IDeleteConditionStep<R> {
        return undefined;
    }

    public equals(value: any): boolean {
        return false;
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

    public or(condition: IDeleteConditionStep<R>): IDeleteConditionStep<R>;
    public or(sql: string): IDeleteConditionStep<R>;
    public or(sql: string, args: IObjectLiteral): IDeleteConditionStep<R>;
    public or(condition: IDeleteConditionStep<R> | string, args?: IObjectLiteral): IDeleteConditionStep<R> {
        return undefined;
    }

    public orExists(select: ISelect<any>): IDeleteConditionStep<R> {
        return undefined;
    }

    public orNot(condition: ICondition): IDeleteConditionStep<R>;
    public orNot(sql: string): IDeleteConditionStep<R>;
    public orNot(sql: string, args: IObjectLiteral): IDeleteConditionStep<R>;
    public orNot(condition: ICondition | string, args?: IObjectLiteral): IDeleteConditionStep<R> {
        return undefined;
    }

    public orNotExists(select: ISelect<any>): IDeleteConditionStep<R> {
        return undefined;
    }

    public queryTimeout(seconds: number): IQuery {
        return undefined;
    }

    public whereExists(select: ISelect<R>): IDeleteConditionStep<R> {
        return undefined;
    }

    public whereNotExists(select: ISelect<R>): IDeleteConditionStep<R> {
        return undefined;
    }

    public execute(): Promise<IContext> {
        return undefined;
    }

    public isExecutable(): boolean {
        return false;
    }

    public where(...condition: ICondition[]): IDeleteConditionStep<R>;
    public where(sql: string): IDeleteConditionStep<R>;
    public where(sql: string, args: IObjectLiteral): IDeleteConditionStep<R>;
    public where(...condition: Array<ICondition | string | IObjectLiteral>): IDeleteConditionStep<R> {
        return undefined;
    }

}
