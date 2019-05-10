/**
 *
 * 功能描述:
 *
 * @className TableFieldImpl
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/5/7 12:45
 */
import {IRecord} from "../IRecord";
import {AbstractField} from "./AbstractField";
import {ITableField} from "../ITableField";
import {IName} from "../IName";
import {ITable} from "../ITable";
import {IDataType} from "../IDataType";

export class TableFieldImpl<R extends IRecord, T> extends AbstractField<T> implements ITableField<R, T> {
    private table0: ITable<R>;
    constructor(name: IName, type: IDataType<T>, table: ITable<R>) {
        super();
        this.table0 = table;

    }

    public getComment(): string {
        return "";
    }

    public getQualifiedName(): IName {
        return undefined;
    }

    public getTable(): ITable<R> {
        return undefined;
    }

    public getUnqualifiedName(): IName {
        return undefined;
    }

}
