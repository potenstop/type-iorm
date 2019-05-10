/**
 *
 * 功能描述:
 *
 * @className UpdatableRecordImpl
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/5/7 15:38
 */
import {IUpdatableRecord} from "../IUpdatableRecord";
import {TableRecordImpl} from "./TableRecordImpl";
import {ITable} from "../ITable";
import {IUniqueKey} from "../IUniqueKey";

export class UpdatableRecordImpl<R extends IUpdatableRecord<R>> extends TableRecordImpl<R> implements IUpdatableRecord<R> {
    constructor(table: ITable<R>) {
        super(table);

    }

    public getPrimaryKey(): IUniqueKey<R> {
        return this.getTable().getPrimaryKey();
    }
}
