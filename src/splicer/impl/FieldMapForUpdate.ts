/**
 *
 * 功能描述:
 *
 * @className FieldMapForUpdate
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/4/20 11:39
 */
import {AbstractQueryPartMap} from "./AbstractQueryPartMap";
import {IField} from "../IField";
import {IContext} from "../IContext";
import {ObjectType} from "../../type/ObjectType";
import {ITable} from "../ITable";

export class FieldMapForUpdate extends AbstractQueryPartMap<IField<any>, IField<any>> {
    private table0: ITable<any>;
    constructor(table: ITable<any>) {
        super();
        this.table0 = table;
    }
    public accept(ctx: IContext): void {
        if (this.size > 0) {
            let separator = "";
            this.forEach((value, key) => {
                ctx.sql(separator);
                if (!("" === separator)) {
                    ctx.formatNewLine();
                }
                ctx.visitFiled(key);
                ctx.sql(" = ");
                ctx.visitFiled(value);
                separator = ", ";
            });
        } else {
            ctx.sql("[ no fields are updated ]");
        }
    }

}
