import {ISelectFieldOrAsterisk} from "./ISelectFieldOrAsterisk";
import {ISelectSelectStep} from "./ISelectSelectStep";
import {ObjectType} from "../type/ObjectType";
import {IUpdateFinalStep} from "./IUpdateFinalStep";
import {IInsertSetStep} from "./IInsertSetStep";
import {IUpdateSetStep} from "./IUpdateSetStep";
import {IDeleteWhereStep} from "./IDeleteWhereStep";
import {IRecord} from "./IRecord";
import {ITable} from "./ITable";

/**
 *
 * 功能描述:
 *
 * @className IDSLContext
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/22 9:15
 */
export interface IDSLContext {
    select(...field: ISelectFieldOrAsterisk[]): ISelectSelectStep<any>;
    insertInto<R extends IRecord>(table: ITable<R>): IInsertSetStep<R>;
    update<R extends IRecord>(table: ITable<R>): IUpdateSetStep<R>;
    delete<R extends IRecord>(table: ITable<R>): IDeleteWhereStep<R>;

}
