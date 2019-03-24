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

export class InsertImpl<T> extends AbstractDelegatingQuery<IInsertQuery<T>> implements IInsertSetStep<T>, IInsertValuesStep<T> {
    private into: ObjectType<T>;
    private fields: Array<IField<any>> ;
    constructor(connection: ISqlConnection, into: ObjectType<T>) {
        super(new InsertQueryImpl(connection, into));
        this.into = into;
    }

    public columns(...field: Array<IField<any>>): IInsertValuesStep<T> {
        this.fields = field;
        return this;
    }
    public async getAffectedRow(): Promise<number> {
        return 0;
    }

    public async getInsertId(): Promise<number> {
        return 0;
    }

    public async getResult(): Promise<IChangeResult> {
        await this.execute();
        return undefined;
    }
    public values(...value: any): IInsertValuesStep<T> {
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
