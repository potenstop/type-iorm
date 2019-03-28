/**
 *
 * 功能描述:
 *
 * @className FieldMapsForInsert
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/23 16:22
 */
import {AbstractQueryPart} from "./AbstractQueryPart";
import {ObjectType} from "../../type/ObjectType";
import {IField} from "../IField";
import {IContext} from "../IContext";
import {DateUtil} from "../../util/DateUtil";
import {Tool} from "./Tool";

export class FieldMapsForInsert extends AbstractQueryPart {
    private table: ObjectType<any>;
    private tableName: string;
    private values: Map<IField<any>, Object[]>;
    private row: number;
    private isNext: boolean;
    constructor(table: ObjectType<any>) {
        super();
        this.row = 0;
        this.isNext = true;
        this.table = table;
        this.values = new Map<IField<any>, Object[]>();
        this.tableName = Tool.getTableName(this.table);
    }
    public getTableName() {
        return this.tableName;
    }
    private initNextRow() {
        if (this.isNext) {
            this.row++;
        }
    }
    private map(index: number) {
        this.initNextRow();
        const values = this.values;
        const than = this;
        class AbstractMap extends Map {
            public set(key: any, value: any): this {
                const objects = values.get(key);
                if (!objects) {
                    than.isNext = true;
                    values.set(key, [value]);
                } else {
                    than.isNext = false;
                    values.get(key).push(value);
                }
                return this;
            }
            public get(key: any): any | undefined {
                const objects = values.get(key);
                return !objects ? null : objects[index];
            }
            public has(key: any): boolean {
                values.forEach((value, field) => {
                    if (field.equals(key)) {
                        return true;
                    }
                });
                return false;
            }
            public delete(key: any): boolean {
                const objects = values.get(key);
                if (!objects) {
                    return false;
                }
                const sp = objects.splice(index, 1);
                return sp.length === 1;
            }
        }
        return new AbstractMap();
    }
    public lastMap(): Map<IField<any>, Object> {
        return this.map(this.row - 1);
    }
    private isExecutable(): boolean {
        return this.row > 0;
    }
    public toSQLReferenceKeys(ctx: IContext) {
        if (!this.isExecutable()) { return; }
        if (this.values.size === 0 ) {return; }
        ctx.sql("(");
        let separator: string = "";
        this.values.forEach((value, key) => {
            ctx.sql(separator);
            const fieldName = key.getName();
            ctx.sql(fieldName);
            separator = ", ";
        });
        ctx.sql(")");
    }
    public toSQLValues(ctx: IContext) {
        ctx.sql(" values ");
        for (let index = 0; index < this.row; index++) {
            if (index > 0) { ctx.sql(", "); }
            ctx.sql("(");
            let separator = "";
            this.values.forEach((list, key) => {
                const value = list[index];
                ctx.sql(separator);
                if (value instanceof String || typeof value === "string") {
                    ctx.sql("\'" + value.toString() + "\'");
                } else if (value instanceof Boolean || typeof value === "boolean") {
                    ctx.sql(value.toString());
                } else if (value instanceof Number || typeof value === "number") {
                    ctx.sql(value.toString());
                } else if (value instanceof Date) {
                    ctx.sql("\'" + DateUtil.format(value, "yyyy-MM-dd HH:mm:ss.S") + "\'");
                } else if (value instanceof Buffer) {
                    ctx.sql("\'" + value.toString + "\'");
                } else if (value === null || value === undefined) {
                    ctx.sql(null);
                } else {
                    ctx.sql("\'" + JSON.stringify(value) + "\'");
                }
                separator = ",";

            });
            ctx.sql(")");
        }
    }
    public addFields(its: Iterator<string>) {
        const stringIteratorResult = its.next();
        if (stringIteratorResult && !stringIteratorResult.done) {
            const key = stringIteratorResult.value;
            const field = Tool.tableField(this.table, key);
            if (field && !this.values.has(field)) {
                this.values.set(field, []);
            }
        }
    }
    public set(map: Map<string, any>): void {
        this.addFields(map.keys());
        map.forEach(((value, key) => {
            const field = Tool.tableField(this.table, key);
            this.values.get(field).splice(this.row - 1, 0, value);
        }));
    }

}
