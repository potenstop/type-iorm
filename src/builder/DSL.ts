import {ISqlConnection} from "../driver/ISqlConnection";
import {IField} from "../splicer/IField";
import {DefaultDSLContext} from "../splicer/impl/DefaultDSLContext";
import {ObjectType} from "../type/ObjectType";
import {IInsertSetStep} from "../splicer/IInsertSetStep";
import {IUpdateSetStep} from "../splicer/IUpdateSetStep";
import {IDeleteWhereStep} from "../splicer/IDeleteWhereStep";
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
    public static select<T>(...field: Array<IField<T>>) {
        return DSL.dsl().select(...field);
    }
    public static insertInto<T>(table: ObjectType<T>): IInsertSetStep<T> {
        return DSL.dsl().insertInto(table);
    }
    public static update<T>(table: ObjectType<T>): IUpdateSetStep<T> {
        return DSL.dsl().update(table);
    }
    public static delete<T>(table: ObjectType<T>): IDeleteWhereStep<T> {
        return DSL.dsl().delete(table);
    }
}
