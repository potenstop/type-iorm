/**
 *
 * 功能描述:
 *
 * @className AbstractStoreQuery
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/22 13:11
 */
import {AbstractDMLQuery} from "./AbstractDMLQuery";
import {IStoreQuery} from "../IStoreQuery";
import {IField} from "../IField";
import {IResult} from "../IResult";
import {ObjectType} from "../../type/ObjectType";
import {ISqlConnection} from "../../driver/ISqlConnection";
import {IRecord} from "../IRecord";
import {ITable} from "../ITable";

export abstract class AbstractStoreQuery<R extends IRecord> extends AbstractDMLQuery<R> implements IStoreQuery<R> {
    constructor(connection: ISqlConnection, table: ITable<R>) {
        super(connection, table);
    }
    protected abstract getValues(): Map<IField<any>, Object>;

    public addValue<F>(field: IField<F>, value: F): void {
        this.getValues().set(field, value);
    }

    public abstract addValues(map: Map<string, any>): void;
}
