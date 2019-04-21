/**
 *
 * 功能描述:
 *
 * @className DefaultContexrt
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/24 11:24
 */
import {IContext} from "../IContext";
import {JSHelperUtil} from "../../util/JSHelperUtil";
import {RenderFormatting} from "./RenderFormatting";
import * as leftPad from "left-pad";
import {IQueryPart} from "../IQueryPart";
import {AbstractQueryPart} from "./AbstractQueryPart";
import {ObjectType} from "../../type/ObjectType";
import {Tool} from "./Tool";
import {IField} from "../IField";

export class DefaultContext implements IContext {
    private sourceResult: any;
    private sqlStr: string;
    private cachedIndentWidth: number;
    private cachedRenderFormatted: boolean;
    private cachedIndentation: string;
    private cachedPrintMargin: number;
    private indent: number;
    private stringLiteral: number;
    private stringLiteralEscapedApos: string;
    private separator: boolean;
    private newline: boolean;
    private cachedNewline: string;
    private static NEWLINE: RegExp = /[\n\r]/g;
    constructor() {
        this.sqlStr = "";
        this.cachedRenderFormatted = true;
        let formatting: RenderFormatting = new RenderFormatting();
        if (formatting == null) {
            formatting = new RenderFormatting();
        }
        this.cachedNewline = formatting.newline == null ? "\n" : formatting.newline;
        this.cachedIndentation = JSHelperUtil.isNullOrUndefined(formatting.indentation) ? "  " : formatting.indentation;
        this.cachedIndentWidth = this.cachedIndentation.length;
        this.cachedPrintMargin = JSHelperUtil.isNullOrUndefined(formatting.printMargin) ? 80 : formatting.printMargin;
        this.indent = 0;
        this.stringLiteral = 0;
        this.stringLiteralEscapedApos = "'";
        this.separator =  false;
    }
    public getStringLiteral(): boolean {
        return this.stringLiteral > 0;
    }
    public sql(sql: string, literal?: boolean): this {
        if (JSHelperUtil.isNullOrUndefined(literal)) {
            this.sql(sql, JSHelperUtil.isNullOrUndefined(sql) || !this.cachedRenderFormatted);
            return this;
        }
        if (!literal) {
            sql = sql.replace(DefaultContext.NEWLINE, this.indentation());
        }
        if (this.getStringLiteral()) {
            sql = sql.replace("'", this.stringLiteralEscapedApos);
        }
        this.sqlStr += sql;
        this.separator = false;
        this.newline = false;
        return this;

    }
    public render(): string {
        return this.sqlStr;
    }

    public getSourceResult() {
        return this.sourceResult;
    }
    public setSourceResult(obj: any): void {
        this.sourceResult = obj;
    }

    public formatIndentEnd(len?: number): this {
        if (JSHelperUtil.isNullOrUndefined(len)) {
            this.formatIndentEnd(this.cachedIndentWidth);
        }
        this.indent -= len;
        return this;
    }

    public formatIndentStart(len?: number): this {
        if (JSHelperUtil.isNullOrUndefined(len)) {
            this.formatIndentStart(this.cachedIndentWidth);
        }
        this.indent += len;
        return this;
    }
    public indentation(): string {
        return leftPad("", this.indent, this.cachedIndentation);
    }

    public formatNewLine(): this {
        if (this.cachedRenderFormatted) {
            this.sql(this.cachedNewline, true);
            this.sql(this.indentation(), true);
            this.newline = true;
        }
        return this;
    }

    public visitSql(part: IQueryPart): this {
        if (JSHelperUtil.isNotNull(part)) {
            if (part instanceof AbstractQueryPart) {
                part.accept(this);
            }
        }
        return this;
    }

    public formatSeparator(): this {
        if (!this.separator && !this.newline) {
            if (this.cachedRenderFormatted) {
                this.formatNewLine();
            } else {
                this.sql(" ", true);
            }
            this.separator = true;
        }
        return this;
    }

    public visitTable(table: ObjectType<any>): this {
        const tableName = Tool.getTableName(table);
        this.sql("`" + tableName + "`");
        return undefined;
    }

    public visitFiled(filed: IField<any>): this {

        return undefined;
    }
}
