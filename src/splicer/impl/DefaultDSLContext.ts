import {IField} from "../IField";
import {SelectImpl} from "./SelectImpl";
import {IDSLContext} from "../IDSLContext";
import {ObjectType} from "../../type/ObjectType";
import {IInsertSetStep} from "../IInsertSetStep";
import {ISelectSelectStep} from "../ISelectSelectStep";
import {ISelectFieldOrAsterisk} from "../ISelectFieldOrAsterisk";
import {IUpdateSetStep} from "../IUpdateSetStep";
import {IDeleteWhereStep} from "../IDeleteWhereStep";
import {InsertImpl} from "./InsertImpl";
import {ISqlConnection} from "../../driver/ISqlConnection";

/**
 *
 * 功能描述:
 *
 * @className DefaultDSLContext
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/13 20:16
 */
export class DefaultDSLContext implements IDSLContext {
    private connection: ISqlConnection;
    constructor(connection: ISqlConnection) {
        this.connection = connection;
    }

    public insertInto<T>(table: ObjectType<T>): IInsertSetStep<T> {
        return new InsertImpl(this.connection, table);
    }

    public select(...field: ISelectFieldOrAsterisk[]): ISelectSelectStep<any> {
        return undefined;
    }

    public delete<T>(table: ObjectType<T>): IDeleteWhereStep<T> {
        return undefined;
    }

    public update<T>(table: ObjectType<T>): IUpdateSetStep<T> {
        return undefined;
    }

}