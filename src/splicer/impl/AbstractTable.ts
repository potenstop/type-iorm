/**
 *
 * 功能描述:
 *
 * @className AbstractTable
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/13 11:54
 */
import {IField} from "../IField";
import {IDataType} from "../IDataType";
import {IRecord} from "../IRecord";
import {ITable} from "../ITable";
import {AbstractNamed} from "./AbstractNamed";
import {IName} from "../IName";
import {IWindowSpecification} from "../IWindowSpecification";
import {IWindowDefinition} from "../IWindowDefinition";
import {ISelect} from "../ISelect";
import {ITableLike} from "../ITableLike";
import {ISQL} from "../ISQL";
import {IObjectLiteral} from "../../type/IObjectLiteral";
import {IDerivedColumnList} from "../IDerivedColumnList";
import {IRow} from "../IRow";
import {ITableOnStep} from "../ITableOnStep";
import {ITableOptionalOnStep} from "../ITableOptionalOnStep";
import {JoinType} from "./JoinType";
import {IRecordType} from "../IRecordType";
import {TableFieldImpl} from "./TableFieldImpl";
import {Joint} from "./Joint";
import {IUniqueKey} from "../IUniqueKey";

export abstract class AbstractTable<R extends IRecord> extends AbstractNamed implements ITable<R> {
    constructor(name: IName) {
        super(name);
    }

    public static createField<R extends IRecord, T>(name: string, dataType: IDataType<T>, table: ITable<R>): IField<T> {
        return new TableFieldImpl(Joint.getName(name), dataType, table);
        // return null;
    }

    public abstract append(name: string): IName;
    public abstract append(name: IName): IName;

    public abstract as(alias: string): ITable<R>;
    public abstract as(alias: string, ...fieldAliases: string[]): ITable<R>;
    public abstract as(alias: IName): ITable<R>;
    public abstract as(alais: IName, ...fieldAliases: IName[]): ITable<R>;
    public abstract as(otherTable: ITable<any>): ITable<R>;
    public abstract as(): IWindowDefinition;
    public abstract as(win: IWindowSpecification): IWindowDefinition;
    public abstract as<R1 extends IRecord>(select: ISelect<R1>): IWindowDefinition;

    public abstract asTable(alias: string): ITable<R>;

    public abstract crossJoin(table: ITableLike<any>): ITable<IRecord>;
    public abstract crossJoin(sql: ISQL): ITable<IRecord>;
    public abstract crossJoin(sql: string): ITable<IRecord>;
    public abstract crossJoin(sql: string, args: IObjectLiteral): ITable<IRecord>;
    public abstract crossJoin(name: IName): ITable<IRecord>;

    public abstract equalsIgnoreCase(name: IName): boolean;

    public abstract field<T>(field: IField<T>): IField<T>;
    public abstract field(name: string): IField<any>;
    public abstract field(name: IName): IField<any>;

    public abstract fields(): Array<IField<any>>;
    public abstract fields(...fields: Array<IField<any>>): Array<IField<any>>;
    public abstract fields(...fieldNames: IName[]): Array<IField<any>>;
    public abstract fields(...fields: string[]): IDerivedColumnList;
    public abstract fields(...names: IName[]): IDerivedColumnList;

    public abstract fieldsRow(): IRow;

    public abstract first(): string;

    public abstract fullJoin(table: ITableLike<any>): ITableOnStep<IRecord>;
    public abstract fullJoin(sql: ISQL): ITableOnStep<IRecord>;
    public abstract fullJoin(sql: string): ITableOnStep<IRecord>;
    public abstract fullJoin(sql: string, args: IObjectLiteral): ITableOnStep<IRecord>;
    public abstract fullJoin(name: IName): ITableOnStep<IRecord>;

    public abstract fullOuterJoin(table: ITableLike<any>): ITableOnStep<IRecord>;
    public abstract fullOuterJoin(sql: ISQL): ITableOnStep<IRecord>;
    public abstract fullOuterJoin(sql: string): ITableOnStep<IRecord>;
    public abstract fullOuterJoin(sql: string, args: IObjectLiteral): ITableOnStep<IRecord>;
    public abstract fullOuterJoin(name: IName): ITableOnStep<IRecord>;

    public abstract getDataType(): IDataType<R>;

    public abstract getRecordType(): Class<R>;

    public abstract innerJoin(table: ITableLike<any>): ITableOnStep<IRecord>;
    public abstract innerJoin(sql: ISQL): ITableOnStep<IRecord>;
    public abstract innerJoin(sql: string): ITableOnStep<IRecord>;
    public abstract innerJoin(sql: string, args: IObjectLiteral): ITableOnStep<IRecord>;
    public abstract innerJoin(name: IName): ITableOnStep<IRecord>;

    public abstract join(table: ITableLike<any>, type: JoinType): ITableOptionalOnStep<IRecord>;
    public abstract join(table: ITableLike<any>): ITableOnStep<IRecord>;
    public abstract join(sql: ISQL): ITableOnStep<IRecord>;
    public abstract join(sql: string): ITableOnStep<IRecord>;
    public abstract join(sql: string, args: IObjectLiteral): ITableOnStep<IRecord>;
    public abstract join(name: IName): ITableOnStep<IRecord>;

    public abstract last(): string;

    public abstract leftJoin(table: ITableLike<any>): ITableOnStep<IRecord>;
    public abstract leftJoin(sql: ISQL): ITableOnStep<IRecord>;
    public abstract leftJoin(sql: string): ITableOnStep<IRecord>;
    public abstract leftJoin(sql: string, args: IObjectLiteral): ITableOnStep<IRecord>;
    public abstract leftJoin(name: IName): ITableOnStep<IRecord>;

    public abstract leftOuterJoin(table: ITableLike<any>): ITableOnStep<IRecord>;
    public abstract leftOuterJoin(sql: ISQL): ITableOnStep<IRecord>;
    public abstract leftOuterJoin(sql: string): ITableOnStep<IRecord>;
    public abstract leftOuterJoin(sql: string, args: IObjectLiteral): ITableOnStep<IRecord>;
    public abstract leftOuterJoin(name: IName): ITableOnStep<IRecord>;

    public abstract naturalJoin(table: ITableLike<any>): ITable<IRecord>;
    public abstract naturalJoin(sql: ISQL): ITable<IRecord>;
    public abstract naturalJoin(sql: string): ITable<IRecord>;
    public abstract naturalJoin(sql: string, args: IObjectLiteral): ITable<IRecord>;
    public abstract naturalJoin(name: IName): ITable<IRecord>;

    public abstract naturalLeftOuterJoin(table: ITableLike<any>): ITable<IRecord>;
    public abstract naturalLeftOuterJoin(sql: ISQL): ITable<IRecord>;
    public abstract naturalLeftOuterJoin(sql: string): ITable<IRecord>;
    public abstract naturalLeftOuterJoin(sql: string, args: IObjectLiteral): ITable<IRecord>;
    public abstract naturalLeftOuterJoin(name: IName): ITable<IRecord>;

    public abstract naturalRightOuterJoin(table: ITableLike<any>): ITable<IRecord>;
    public abstract naturalRightOuterJoin(sql: ISQL): ITable<IRecord>;
    public abstract naturalRightOuterJoin(sql: string): ITable<IRecord>;
    public abstract naturalRightOuterJoin(sql: string, args: IObjectLiteral): ITable<IRecord>;
    public abstract naturalRightOuterJoin(name: IName): ITable<IRecord>;

    public abstract newRecord(): R;

    public abstract parts(): IName[];

    public abstract qualified(): boolean;

    public abstract qualifier(): IName;

    public abstract quotedName(): IName;

    public abstract recordType(): IRecordType<R>;

    public abstract rightJoin(table: ITableLike<any>): ITableOnStep<IRecord>;
    public abstract rightJoin(sql: ISQL): ITableOnStep<IRecord>;
    public abstract rightJoin(sql: string): ITableOnStep<IRecord>;
    public abstract rightJoin(sql: string, args: IObjectLiteral): ITableOnStep<IRecord>;
    public abstract rightJoin(name: IName): ITableOnStep<IRecord>;

    public abstract unqualifiedName(): IName;

    public abstract unquotedName(): IName;

    public getPrimaryKey(): IUniqueKey<R> {
        return null;
    }
}
