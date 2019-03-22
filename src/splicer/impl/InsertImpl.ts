/**
 *
 * 功能描述:
 *
 * @className InsertImpl
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/21 19:59
 */
import {IInsertSetStep} from "../IInsertSetStep";
import {IField} from "../IField";
import {IInsertValuesStep} from "../IInsertValuesStep";
import {IChangeResult} from "../IChangeResult";
import {IQuery} from "../IQuery";
import {ObjectType} from "../../type/ObjectType";
import {AbstractDelegatingQuery} from "./AbstractDelegatingQuery";
import {IInsertQuery} from "../IInsertQuery";

export class InsertImpl<T> extends AbstractDelegatingQuery<IInsertQuery<T>> implements IInsertSetStep<T>, IInsertValuesStep<T> {
    private into: ObjectType<T>;
    private fields: Array<IField<any>> ;
    constructor(into: ObjectType<T>) {
        this.into = into;
    }

    public columns(...field: Array<IField<any>>): IInsertValuesStep<T> {
        this.fields = field;
        return this;
    }

    public getAffectedRow(): number {
        return 0;
    }

    public getInsertId(): number {
        return 0;
    }

    public getResult(): IChangeResult {
        return undefined;
    }

    public values(...value: any): IInsertValuesStep<T> {
        return undefined;
    }

}
