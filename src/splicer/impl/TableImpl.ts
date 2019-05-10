/**
 *
 * 功能描述:
 *
 * @className TableImpl
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/4/23 14:41
 */
import {IRecord} from "../IRecord";
import {AbstractTable} from "./AbstractTable";
import {IContext} from "../IContext";
import {IWindowDefinition} from "../IWindowDefinition";
import {IWindowSpecification} from "../IWindowSpecification";
import {ITable} from "../ITable";
import {IName} from "../IName";
import {ISelect} from "../ISelect";
import {ITableLike} from "../ITableLike";
import {ISQL} from "../ISQL";
import {IObjectLiteral} from "../../type/IObjectLiteral";
import {IField} from "../IField";
import {IDerivedColumnList} from "../IDerivedColumnList";
import {IRow} from "../IRow";
import {ITableOnStep} from "../ITableOnStep";
import {IDataType} from "../IDataType";
import {ITableOptionalOnStep} from "../ITableOptionalOnStep";
import {JoinType} from "./JoinType";
import {IRecordType} from "../IRecordType";

export class TableImpl<R extends IRecord> extends AbstractTable<R> {
    private child: ITable<R> ;
    constructor(name: IName, table: ITable<R> ) {
        super(name);
        this.child = table;
    }
    public accept(ctx: IContext): void {
    }

    public append(name: string): IName;
    public append(name: IName): IName;
    public append(name: string | IName): IName {
        return undefined;
    }

    public asTable(alias: string): ITable<R>;
    public asTable(alias: string): ITable<R>;
    public asTable(alias: string): ITable<R> {
        return undefined;
    }

    public crossJoin(table: ITableLike<any>): ITable<IRecord>;
    public crossJoin(sql: ISQL): ITable<IRecord>;
    public crossJoin(sql: string): ITable<IRecord>;
    public crossJoin(sql: string, args: IObjectLiteral): ITable<IRecord>;
    public crossJoin(name: IName): ITable<IRecord>;
    public crossJoin(table: ITableLike<any> | ISQL | string | IName, args?: IObjectLiteral): ITable<IRecord> {
        return undefined;
    }

    public equalsIgnoreCase(name: IName): boolean {
        return false;
    }

    public field<T>(field: IField<T>): IField<T>;
    public field(name: string): IField<any>;
    public field(name: IName): IField<any>;
    public field<T>(field: IField<T>): IField<T>;
    public field(field): any {
    }

    public fields(): Array<IField<any>>;
    public fields(...fields: Array<IField<any>>): Array<IField<any>>;
    public fields(...fieldNames: IName[]): Array<IField<any>>;
    public fields(...fields: string[]): IDerivedColumnList;
    public fields(...names: IName[]): IDerivedColumnList;
    public fields(...fields: Array<IField<any> | IName | string>): Array<IField<any>> | IDerivedColumnList {
        return undefined;
    }

    public fieldsRow(): IRow {
        return undefined;
    }

    public first(): string {
        return "";
    }

    public fullJoin(table: ITableLike<any>): ITableOnStep<IRecord>;
    public fullJoin(sql: ISQL): ITableOnStep<IRecord>;
    public fullJoin(sql: string): ITableOnStep<IRecord>;
    public fullJoin(sql: string, args: IObjectLiteral): ITableOnStep<IRecord>;
    public fullJoin(name: IName): ITableOnStep<IRecord>;
    public fullJoin(table: ITableLike<any> | ISQL | string | IName, args?: IObjectLiteral): ITableOnStep<IRecord> {
        return undefined;
    }

    public fullOuterJoin(table: ITableLike<any>): ITableOnStep<IRecord>;
    public fullOuterJoin(sql: ISQL): ITableOnStep<IRecord>;
    public fullOuterJoin(sql: string): ITableOnStep<IRecord>;
    public fullOuterJoin(sql: string, args: IObjectLiteral): ITableOnStep<IRecord>;
    public fullOuterJoin(name: IName): ITableOnStep<IRecord>;
    public fullOuterJoin(table: ITableLike<any> | ISQL | string | IName, args?: IObjectLiteral): ITableOnStep<IRecord> {
        return undefined;
    }

    public getDataType(): IDataType<R>;
    public getDataType(): IDataType<R>;
    public getDataType(): IDataType<R> {
        return undefined;
    }

    public getName(): string {
        return "";
    }

    public getRecordType(): Class<R>;
    public getRecordType(): Class<R>;
    public getRecordType(): Class<R> {
        return undefined;
    }

    public innerJoin(table: ITableLike<any>): ITableOnStep<IRecord>;
    public innerJoin(sql: ISQL): ITableOnStep<IRecord>;
    public innerJoin(sql: string): ITableOnStep<IRecord>;
    public innerJoin(sql: string, args: IObjectLiteral): ITableOnStep<IRecord>;
    public innerJoin(name: IName): ITableOnStep<IRecord>;
    public innerJoin(table: ITableLike<any> | ISQL | string | IName, args?: IObjectLiteral): ITableOnStep<IRecord> {
        return undefined;
    }

    public join(table: ITableLike<any>, type: JoinType): ITableOptionalOnStep<IRecord>;
    public join(table: ITableLike<any>): ITableOnStep<IRecord>;
    public join(sql: ISQL): ITableOnStep<IRecord>;
    public join(sql: string): ITableOnStep<IRecord>;
    public join(sql: string, args: IObjectLiteral): ITableOnStep<IRecord>;
    public join(name: IName): ITableOnStep<IRecord>;
    public join(table: ITableLike<any> | ISQL | string | IName, type?: JoinType | IObjectLiteral): ITableOptionalOnStep<IRecord> | ITableOnStep<IRecord> {
        return undefined;
    }

    public last(): string {
        return "";
    }

    public leftJoin(table: ITableLike<any>): ITableOnStep<IRecord>;
    public leftJoin(sql: ISQL): ITableOnStep<IRecord>;
    public leftJoin(sql: string): ITableOnStep<IRecord>;
    public leftJoin(sql: string, args: IObjectLiteral): ITableOnStep<IRecord>;
    public leftJoin(name: IName): ITableOnStep<IRecord>;
    public leftJoin(table: ITableLike<any> | ISQL | string | IName, args?: IObjectLiteral): ITableOnStep<IRecord> {
        return undefined;
    }

    public leftOuterJoin(table: ITableLike<any>): ITableOnStep<IRecord>;
    public leftOuterJoin(sql: ISQL): ITableOnStep<IRecord>;
    public leftOuterJoin(sql: string): ITableOnStep<IRecord>;
    public leftOuterJoin(sql: string, args: IObjectLiteral): ITableOnStep<IRecord>;
    public leftOuterJoin(name: IName): ITableOnStep<IRecord>;
    public leftOuterJoin(table: ITableLike<any> | ISQL | string | IName, args?: IObjectLiteral): ITableOnStep<IRecord> {
        return undefined;
    }

    public naturalJoin(table: ITableLike<any>): ITable<IRecord>;
    public naturalJoin(sql: ISQL): ITable<IRecord>;
    public naturalJoin(sql: string): ITable<IRecord>;
    public naturalJoin(sql: string, args: IObjectLiteral): ITable<IRecord>;
    public naturalJoin(name: IName): ITable<IRecord>;
    public naturalJoin(table: ITableLike<any> | ISQL | string | IName, args?: IObjectLiteral): ITable<IRecord> {
        return undefined;
    }

    public naturalLeftOuterJoin(table: ITableLike<any>): ITable<IRecord>;
    public naturalLeftOuterJoin(sql: ISQL): ITable<IRecord>;
    public naturalLeftOuterJoin(sql: string): ITable<IRecord>;
    public naturalLeftOuterJoin(sql: string, args: IObjectLiteral): ITable<IRecord>;
    public naturalLeftOuterJoin(name: IName): ITable<IRecord>;
    public naturalLeftOuterJoin(table: ITableLike<any> | ISQL | string | IName, args?: IObjectLiteral): ITable<IRecord> {
        return undefined;
    }

    public naturalRightOuterJoin(table: ITableLike<any>): ITable<IRecord>;
    public naturalRightOuterJoin(sql: ISQL): ITable<IRecord>;
    public naturalRightOuterJoin(sql: string): ITable<IRecord>;
    public naturalRightOuterJoin(sql: string, args: IObjectLiteral): ITable<IRecord>;
    public naturalRightOuterJoin(name: IName): ITable<IRecord>;
    public naturalRightOuterJoin(table: ITableLike<any> | ISQL | string | IName, args?: IObjectLiteral): ITable<IRecord> {
        return undefined;
    }

    public newRecord(): R;
    public newRecord(): R;
    public newRecord(): R {
        return undefined;
    }

    public parts(): IName[] {
        return [];
    }

    public qualified(): boolean {
        return false;
    }

    public qualifier(): IName {
        return undefined;
    }

    public quotedName(): IName {
        return undefined;
    }

    public recordType(): IRecordType<R>;
    public recordType(): IRecordType<R>;
    public recordType(): IRecordType<R> {
        return undefined;
    }

    public rightJoin(table: ITableLike<any>): ITableOnStep<IRecord>;
    public rightJoin(sql: ISQL): ITableOnStep<IRecord>;
    public rightJoin(sql: string): ITableOnStep<IRecord>;
    public rightJoin(sql: string, args: IObjectLiteral): ITableOnStep<IRecord>;
    public rightJoin(name: IName): ITableOnStep<IRecord>;
    public rightJoin(table: ITableLike<any> | ISQL | string | IName, args?: IObjectLiteral): ITableOnStep<IRecord> {
        return undefined;
    }

    public unqualifiedName(): IName {
        return undefined;
    }

    public unquotedName(): IName {
        return undefined;
    }

    public as(alias: string): ITable<R>;
    public as(alias: string, ...fieldAliases: string[]): ITable<R>;
    public as(alias: IName): ITable<R>;
    public as(alias: IName, ...fieldAliases: IName[]): ITable<R>;
    public as(otherTable: ITable<any>): ITable<R>;
    public as(): IWindowDefinition;
    public as(win: IWindowSpecification): IWindowDefinition;
    public as<R1 extends IRecord>(select: ISelect<R1>): IWindowDefinition;
    public as(alias: string): ITable<R>;
    public as(alias: string, ...fieldAliases: string[]): ITable<R>;
    public as(alais: IName): ITable<R>;
    public as(alais: IName, ...fieldAliases: IName[]): ITable<R>;
    public as(otherTable: ITable<any>): ITable<R>;
    public as(alias?, ...fieldAliases: Array<string | IName>): any {

    }

}
