import {ISqlConnection} from "../driver/ISqlConnection";
import {IField} from "../splicer/IField";
import {DefaultDSLContext} from "../splicer/impl/DefaultDSLContext";
import {ObjectType} from "../type/ObjectType";
import {IInsertSetStep} from "../splicer/IInsertSetStep";
import {IUpdateSetStep} from "../splicer/IUpdateSetStep";
import {IDeleteWhereStep} from "../splicer/IDeleteWhereStep";
import {IRecord} from "../splicer/IRecord";
import {ITable} from "../splicer/ITable";
import {ISelectFieldOrAsterisk} from "../splicer/ISelectFieldOrAsterisk";
/**
 *
 * 功能描述:
 *
 * @className DSL
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/13 19:49
 */
export class DSL {
    public static using(connection: ISqlConnection) {
        return new DefaultDSLContext(connection);
    }
    private static dsl(connection?: ISqlConnection) {
        return DSL.using(connection);
    }
    public static select<R extends IRecord>(...field: ISelectFieldOrAsterisk[]) {
        return DSL.dsl().select(...field);
    }
    public static insertInto<R extends IRecord>(table: ITable<R>): IInsertSetStep<R> {
        return DSL.dsl().insertInto(table);
    }
    public static update<R extends IRecord>(table: ITable<R>): IUpdateSetStep<R> {
        return DSL.dsl().update(table);
    }
    public static delete<R extends IRecord>(table: ITable<R>): IDeleteWhereStep<R> {
        return DSL.dsl().delete(table);
    }
}
