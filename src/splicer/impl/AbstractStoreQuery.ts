/**
 *
 * 功能描述:
 *
 * @className AbstractStoreQuery
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/22 13:11
 */
import {AbstractDMLQuery} from "./AbstractDMLQuery";
import {IStoreQuery} from "../IStoreQuery";
import {IField} from "../IField";
import {IResult} from "../IResult";
import {ObjectType} from "../../type/ObjectType";

export class AbstractStoreQuery<T> extends AbstractDMLQuery<T> implements IStoreQuery<T> {
    constructor(table: ObjectType<T>) {
        super(table);
    }
    public addValue(field: IField<T>, value: T): void;
    public addValue(field: IField<T>, value: IField<T>): void;
    public addValue(map: Map<any, any>): void;
    public addValue(field: IField<T> | Map<any, any>, value?: T | IField<T>): void {

    }
}
