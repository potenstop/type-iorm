/**
 *
 * 功能描述:
 *
 * @className InsertQueryImpl
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/22 13:02
 */
import {IInsertQuery} from "../IInsertQuery";
import {IField} from "../IField";
import {ISelect} from "../ISelect";
import {ObjectType} from "../../type/ObjectType";
import {AbstractStoreQuery} from "./AbstractStoreQuery";
import {FieldMapsForInsert} from "./FieldMapsForInsert";
import {IContext} from "../IContext";
import {ISqlConnection} from "../../driver/ISqlConnection";
import {Keywords} from "./Keywords";

export class InsertQueryImpl<T> extends AbstractStoreQuery<T> implements IInsertQuery<T> {
    private insertMaps: FieldMapsForInsert;
    private table0: ObjectType<T>;
    constructor(connection: ISqlConnection, into: ObjectType<T>) {
        super(connection, into);
        this.table0 = into;
        this.insertMaps = new FieldMapsForInsert(into);
    }

    public addValueForUpdate(field: IField<T>, value: T): void;
    public addValueForUpdate(field: IField<T>, value: IField<T>): void;
    public addValueForUpdate(map: Map<any, any>): void;
    public addValueForUpdate(field: IField<T> | Map<any, any>, value?: T | IField<T>): void {
    }

    public setSelect(fields: Array<IField<any>>, select: ISelect<any>): void {
    }

    protected getValues(): Map<IField<any>, Object> {
        return this.insertMaps.lastMap();
    }

    public toSQLInsert(ctx: IContext) {
        this.insertMaps.toSQLReferenceKeys(ctx);
        this.insertMaps.toSQLValues(ctx);
    }

    public addValues(map: Map<string, any>): void {
        this.insertMaps.set(map);
    }

    public accept0(ctx: IContext): void {
        // 增加inser 和表名
        ctx.visitSql(Keywords.K_INSERT).sql(" ");
        ctx.visitSql(Keywords.K_INTO).sql(" ").visitTable(this.table0);
        this.toSQLInsert(ctx);
    }
}
