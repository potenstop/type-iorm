/**
 *
 * 功能描述:
 *
 * @className IContext
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/23 17:53
 */
import {IScope} from "./IScope";
import {IQueryPart} from "./IQueryPart";
import {ObjectType} from "../type/ObjectType";
import {IField} from "./IField";
import {ITable} from "./ITable";

export interface IContext extends IScope {
    sql(sql: string): this;
    sql(sql: string, literal: boolean): this;
    render(): string;
    getSourceResult(): any;
    setSourceResult(obj: any): void;
    formatIndentStart(): this;
    formatIndentStart(len: number): this;
    formatNewLine(): this;
    formatIndentEnd(): this;
    formatIndentEnd(len: number): this;
    visitSql(part: IQueryPart): this;
    visitTable(table: ITable<any>): this;
    visitFiled(filed: IField<any>): this;
    formatSeparator(): this;
}
