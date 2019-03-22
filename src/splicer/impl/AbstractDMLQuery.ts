/**
 *
 * 功能描述:
 *
 * @className AbstractDMLQuery
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/22 14:34
 */
import {AbstractQuery} from "./AbstractQuery";
import {ObjectType} from "../../type/ObjectType";
import {IResult} from "../IResult";

export class AbstractDMLQuery<T> extends AbstractQuery {
    private returnedResult: IResult<any>;
    private table: ObjectType<T>;
    constructor(table: ObjectType<T>) {
        super();
        this.table = table;
    }
    public getResult(): IResult<any> {
        if (this.returnedResult == null) {

        }
        return this.returnedResult;
    }
}
