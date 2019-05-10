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
import {IRecord} from "../IRecord";
import {ITable} from "../ITable";

export class UpdateImpl<R extends IRecord> extends AbstractDelegatingQuery<IUpdateQuery<R>> implements IUpdateSetStep<R>, IUpdateConditionStep<R>, IUpdateWhereStep<R> {
    private table: ITable<R>;
    constructor(connection: ISqlConnection, table: ITable<R>) {
        super(new UpdateQueryImpl(connection, table));
        this.table = table;
    }
    public and(condition: ICondition): IUpdateConditionStep<R>;
    public and(sql: string): IUpdateConditionStep<R>;
    public and(sql: string, args: IObjectLiteral): IUpdateConditionStep<R>;
    public and(filed: IField<boolean>): IUpdateConditionStep<R>;
    public and(condition: ICondition | string | IField<boolean>, args?: IObjectLiteral): IUpdateConditionStep<R> {
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

    public andExists(select: ISelect<any>): IUpdateConditionStep<R> {
        return this.and(Joint.exists(select));
    }

    public andNot(condition: ICondition): IUpdateConditionStep<R>;
    public andNot(filed: IField<boolean>): IUpdateConditionStep<R>;
    public andNot(condition: ICondition | IField<boolean>): IUpdateConditionStep<R> {
        if ("and" in condition) {
            return this.and(condition.not());
        } else {
            return this.and(Joint.condition(condition));
        }
    }

    public andNotExists(select: ISelect<any>): IUpdateConditionStep<R> {
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

    public or(condition: ICondition): IUpdateConditionStep<R>;
    public or(sql: string): IUpdateConditionStep<R>;
    public or(sql: string, args: IObjectLiteral): IUpdateConditionStep<R>;
    public or(filed: IField<boolean>): IUpdateConditionStep<R>;
    public or(condition: ICondition | string | IField<boolean>, args?: IObjectLiteral): IUpdateConditionStep<R> {
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

    public orExists(select: ISelect<any>): IUpdateConditionStep<R> {
        return this.or(Joint.exists(select));
    }

    public orNot(condition: ICondition): IUpdateConditionStep<R>;
    public orNot(filed: IField<boolean>): IUpdateConditionStep<R>;
    public orNot(condition: ICondition | IField<boolean>): IUpdateConditionStep<R> {
        if ("and" in condition) {
            return this.or(condition.not());
        } else {
            return this.or(Joint.condition(condition));
        }
    }

    public orNotExists(select: ISelect<any>): IUpdateConditionStep<R> {
        return this.or(Joint.notExists(select));
    }

    public set<R>(field: IField<R>, value: R): IUpdateSetMoreStep<R>;
    public set(map: Map<string, any>): IUpdateSetMoreStep<R>;
    public set<R>(field: IField<R> | Map<string, any>, value?: R): IUpdateSetMoreStep<R> {
        if (field instanceof Map) {
            this.getDelegate().addValues(field);
        } else {
            this.getDelegate().addValue(field, value);
        }
        return this;

    }

    public where(...condition: ICondition[]): IUpdateConditionStep<R>;
    public where(sql: string): IUpdateConditionStep<R>;
    public where(sql: string, args: IObjectLiteral): IUpdateConditionStep<R>;
    public where(...condition: Array<ICondition | string | IObjectLiteral>): IUpdateConditionStep<R> {
        if (typeof condition[0] === "string") {
            this.getDelegate().addConditions(Joint.condition(condition[0] as string, condition[1] as IObjectLiteral));
        } else {
            const condition1 = condition as ICondition[];
            this.getDelegate().addConditions(...condition1);
        }
        return this;
    }

    public whereExists(select: ISelect<R>): IUpdateConditionStep<R> {
        return this.and(Joint.exists(select));
    }

    public whereNotExists(select: ISelect<R>): IUpdateConditionStep<R> {
        return this.and(Joint.notExists(select));
    }
}
