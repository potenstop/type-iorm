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
import {UpdateImpl} from "./UpdateImpl";
import {IRecord} from "../IRecord";
import {ITable} from "../ITable";

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

    public insertInto<R extends IRecord>(table: ITable<R>): IInsertSetStep<R> {
        return new InsertImpl(this.connection, table);
    }

    public select(...field: ISelectFieldOrAsterisk[]): ISelectSelectStep<any> {
        return undefined;
    }

    public delete<R extends IRecord>(table: ITable<R>): IDeleteWhereStep<R> {
        return undefined;
    }

    public update<R extends IRecord>(table: ITable<R>): IUpdateSetStep<R> {
        return new UpdateImpl(this.connection, table);
    }

}
