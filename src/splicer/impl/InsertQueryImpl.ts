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
import {IQuery} from "../IQuery";
import {ISelect} from "../ISelect";
import {ObjectType} from "../../type/ObjectType";
import {AbstractStoreQuery} from "./AbstractStoreQuery";

export class InsertQueryImpl<T> extends AbstractStoreQuery<T> implements IInsertQuery<T> {
    constructor(into: ObjectType<T>) {
        super(into);
    }
    public addValueForUpdate(field: IField<T>, value: T): void;
    public addValueForUpdate(field: IField<T>, value: IField<T>): void;
    public addValueForUpdate(map: Map<any, any>): void;
    public addValueForUpdate(field: IField<T> | Map<any, any>, value?: T | IField<T>): void {
    }

    public setSelect(fields: Array<IField<any>>, select: ISelect<any>): void {
    }

}
