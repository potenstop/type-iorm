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
import {Joint} from "./Joint";
import {IUpdateSetMoreStep} from "../IUpdateSetMoreStep";
import {IObjectLiteral} from "../../type/IObjectLiteral";
import {Operator} from "./Operator";

export class UpdateImpl<T> extends AbstractDelegatingQuery<IUpdateQuery<T>> implements IUpdateSetStep<T>, IUpdateConditionStep<T>, IUpdateWhereStep<T> {
    private table: ObjectType<T>;
    constructor(connection: ISqlConnection, table: ObjectType<T>) {
        super(new UpdateQueryImpl(connection, table));
        this.table = table;
    }
    public and(condition: ICondition): IUpdateConditionStep<T>;
    public and(sql: string): IUpdateConditionStep<T>;
    public and(sql: string, args: IObjectLiteral): IUpdateConditionStep<T>;
    public and(filed: IField<boolean>): IUpdateConditionStep<T>;
    public and(condition: ICondition | string | IField<boolean>, args?: IObjectLiteral): IUpdateConditionStep<T> {
        if (typeof condition === "string") {
            this.getDelegate().addConditions(Joint.condition(condition, args));
        } else {
            if ("and" in condition) {
                this.getDelegate().addConditions(Operator.AND, condition);
            } else {
                this.getDelegate().addConditions(Joint.condition(condition));
            }
        }
        return this;
    }

    public andExists(select: ISelect<any>): IUpdateConditionStep<T> {
        return this.and(Joint.exists(select));
    }

    public andNot(condition: ICondition): IUpdateConditionStep<T>;
    public andNot(filed: IField<boolean>): IUpdateConditionStep<T>;
    public andNot(condition: ICondition | IField<boolean>): IUpdateConditionStep<T> {
        if ("and" in condition) {
            return this.and(condition.not());
        } else {
            return this.and(Joint.condition(condition));
        }
    }

    public andNotExists(select: ISelect<any>): IUpdateConditionStep<T> {
        return this.and(Joint.notExists(select));
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

    public or(condition: ICondition): IUpdateConditionStep<T>;
    public or(sql: string): IUpdateConditionStep<T>;
    public or(sql: string, args: IObjectLiteral): IUpdateConditionStep<T>;
    public or(filed: IField<boolean>): IUpdateConditionStep<T>;
    public or(condition: ICondition | string | IField<boolean>, args?: IObjectLiteral): IUpdateConditionStep<T> {
        if (typeof condition === "string") {
            this.getDelegate().addConditions(Joint.condition(condition, args));
        } else {
            if ("and" in condition) {
                this.getDelegate().addConditions(Operator.OR, condition);
            } else {
                this.getDelegate().addConditions(Joint.condition(condition));
            }
        }
        return this;
    }

    public orExists(select: ISelect<any>): IUpdateConditionStep<T> {
        return this.or(Joint.exists(select));
    }

    public orNot(condition: ICondition): IUpdateConditionStep<T>;
    public orNot(filed: IField<boolean>): IUpdateConditionStep<T>;
    public orNot(condition: ICondition | IField<boolean>): IUpdateConditionStep<T> {
        if ("and" in condition) {
            return this.or(condition.not());
        } else {
            return this.or(Joint.condition(condition));
        }
    }

    public orNotExists(select: ISelect<any>): IUpdateConditionStep<T> {
        return this.or(Joint.notExists(select));
    }

    public set<R>(field: IField<R>, value: R): IUpdateSetMoreStep<T>;
    public set(map: Map<string, any>): IUpdateSetMoreStep<T>;
    public set<R>(field: IField<R> | Map<string, any>, value?: R): IUpdateSetMoreStep<T> {
        if (field instanceof Map) {
            this.getDelegate().addValues(field);
        } else {
            this.getDelegate().addValue(field, value);
        }
        return this;

    }

    public where(...condition: ICondition[]): IUpdateConditionStep<T>;
    public where(sql: string): IUpdateConditionStep<T>;
    public where(sql: string, args: IObjectLiteral): IUpdateConditionStep<T>;
    public where(...condition: Array<ICondition | string | IObjectLiteral>): IUpdateConditionStep<T> {
        if (typeof condition[0] === "string") {
            this.getDelegate().addConditions(Joint.condition(condition[0] as string, condition[1] as IObjectLiteral));
        } else {
            const condition1 = condition as ICondition[];
            this.getDelegate().addConditions(...condition1);
        }
        return this;
    }

    public whereExists(select: ISelect<T>): IUpdateConditionStep<T> {
        return this.and(Joint.exists(select));
    }

    public whereNotExists(select: ISelect<T>): IUpdateConditionStep<T> {
        return this.and(Joint.notExists(select));
    }
}
