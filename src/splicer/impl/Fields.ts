/**
 *
 * 功能描述:
 *
 * @className Fields
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/5/6 11:34
 */
import {IRecord} from "../IRecord";
import {AbstractQueryPart} from "./AbstractQueryPart";
import {IRecordType} from "../IRecordType";
import {IField} from "../IField";
import {IContext} from "../IContext";
import {IName} from "../IName";
import {IDataType} from "../IDataType";
import {JSHelperUtil} from "../../util/JSHelperUtil";

export class Fields<R extends IRecord> extends AbstractQueryPart implements IRecordType<R> {
    public accept(ctx: IContext): void {
    }

    public dateType(fieldName: string): IDataType<any>;
    public dateType(fieldName: IName): IDataType<any>;
    public dateType(fieldName: string | IName): IDataType<any> {
        return undefined;
    }

    public dateTypes(): Array<IDataType<any>> {
        return undefined;
    }

    public field<T>(field: IField<T>): IField<T>;
    public field(name: string): IField<any>;
    public field(name: IName): IField<any>;
    public field<T>(field: IField<T> | string | IName): IField<any> | IField<T> {
        if (JSHelperUtil.isNullOrUndefined(field)) {
            return null;
        }
        return null;
    }

    public fields(): Array<IField<any>>;
    public fields(...fields: Array<IField<any>>): Array<IField<any>>;
    public fields(...fieldNames: IName[]): Array<IField<any>>;
    public fields(...fields: Array<IField<any> | IName>): Array<IField<any>> {
        return undefined;
    }

    public size(): number {
        return this.fields0.length;
    }

    public type(fieldName: string): Class<any>;
    public type(fieldName: IName): Class<any>;
    public type(fieldName: string | IName): Class<any> {
        return undefined;
    }

    public types(): Array<Class<any>> {
        return undefined;
    }
    private fields0: Array<IField<any>>;
    constructor(fields: Array<IField<any>>) {
        super();
        this.fields0 = fields;
    }

}
