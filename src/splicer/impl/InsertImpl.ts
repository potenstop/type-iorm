/**
 *
 * 功能描述:
 *
 * @className InsertImpl
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/21 19:59
 */
import {IInsertSetStep} from "../IInsertSetStep";
import {IField} from "../IField";
import {IInsertValuesStep} from "../IInsertValuesStep";
import {IChangeResult} from "../IChangeResult";
import {ObjectType} from "../../type/ObjectType";
import {AbstractDelegatingQuery} from "./AbstractDelegatingQuery";
import {IInsertQuery} from "../IInsertQuery";
import {InsertQueryImpl} from "./InsertQueryImpl";
import {ISqlConnection} from "../../driver/ISqlConnection";
import {SqlBuilderError} from "../../error/SqlBuilderError";
import {IRecord} from "../IRecord";
import {ITable} from "../ITable";

export class InsertImpl<R extends IRecord> extends AbstractDelegatingQuery<IInsertQuery<R>> implements IInsertSetStep<R>, IInsertValuesStep<R> {
    private into: ITable<R>;
    private fields: Array<IField<any>> ;
    constructor(connection: ISqlConnection, into: ITable<R>) {
        super(new InsertQueryImpl(connection, into));
        this.into = into;
    }

    public columns(...field: Array<IField<any>>): IInsertValuesStep<R> {
        this.fields = field;
        return this;
    }
    public async getAffectedRow(): Promise<number> {
        const result = await this.getResult();
        return result.affectedRows;
    }

    public async getInsertId(): Promise<number> {
        const result = await this.getResult();
        return result.insertId;
    }

    public async getResult(): Promise<IChangeResult> {
        const ctx = await this.execute();
        if (ctx) {
            return ctx.getSourceResult() as IChangeResult;
        } else {
            throw new SqlBuilderError("sql error");
        }
    }
    public values(...value: any): IInsertValuesStep<R> {
        if (this.fields.length > 0 && this.fields.length !== value.length) {
            throw new Error("The number of values must match the number of fields");
        }
        if (this.fields.length === 0) {
            value.forEach((v) =>  this.getDelegate().addValue(null as IField<void>, v));
        } else {
            this.fields.forEach((field, i) =>  this.getDelegate().addValue(field, value[i]));
        }
        return this;
    }
}
