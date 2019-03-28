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
import {IUpdateWhereStep} from "../IUpdateWhereStep";
import {IField} from "../IField";
import {AbstractDelegatingQuery} from "./AbstractDelegatingQuery";
import {IUpdateQuery} from "../IUpdateQuery";
import {ObjectType} from "../../type/ObjectType";
import {ISqlConnection} from "../../driver/ISqlConnection";
import {UpdateQueryImpl} from "./UpdateQueryImpl";

export class UpdateImpl<T> extends AbstractDelegatingQuery<IUpdateQuery<T>> implements IUpdateSetStep<T>, IUpdateConditionStep<T>, IUpdateWhereStep<T> {
    private table: ObjectType<T>;
    constructor(connection: ISqlConnection, table: ObjectType<T>) {
        super(new UpdateQueryImpl(connection, table));
        this.table = table;
    }
    public and(condition: ICondition): IUpdateConditionStep<T>;
    public and(sql: string): IUpdateConditionStep<T>;
    public and(sql: string, ...args: any[]): IUpdateConditionStep<T>;
    public and(condition: ICondition | string, ...args: any[]): IUpdateConditionStep<T> {
        (this.getDelegate() as IUpdateQuery<T>)

        return this;
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

    public getAffectedRow(): number {
        return 0;
    }

    public getInsertId(): number {
        return 0;
    }

    public getResult(): IChangeResult {
        return undefined;
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

    public set<R>(field: IField<R>, value: R): IUpdateWhereStep<T>;
    public set(map: Map<string, any>): IUpdateWhereStep<T>;
    public set<R>(field: IField<R> | Map<string, any>, value?: R): IUpdateWhereStep<T> {
        if (field instanceof Map) {
            this.getDelegate().addValues(field);
        } else {
            this.getDelegate().addValue(field, value);
        }
        return this;

    }

    public where(...condition: ICondition[]): IUpdateConditionStep<T>;
    public where(sql: string): IUpdateConditionStep<T>;
    public where(sql: string, ...args: any[]): IUpdateConditionStep<T>;
    public where(...condition: Array<ICondition | string | any>): IUpdateConditionStep<T> {
        return undefined;
    }

    public whereExists(select: ISelect<T>): IUpdateConditionStep<T> {
        return undefined;
    }

    public whereNotExists(select: ISelect<T>): IUpdateConditionStep<T> {
        return undefined;
    }
}
