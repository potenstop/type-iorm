/**
 *
 * 功能描述:
 *
 * @className TableRecordImpl
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/5/7 10:55
 */
import {ITableRecord} from "../ITableRecord";
import {AbstractRecord} from "./AbstractRecord";
import {ITable} from "../ITable";

export class TableRecordImpl<R extends ITableRecord<R>> extends AbstractRecord implements ITableRecord<R> {
    private table: ITable<R>;
    constructor(table: ITable<R>) {
        super(table.fields());
        this.table = table;
    }

    public getTable(): ITable<R> {
        return this.table;
    }
}
