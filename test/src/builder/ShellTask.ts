import {Entity} from "../../../src/annotation/entity/Entity";
import {AbstractTable} from "../../../src/splicer/impl/AbstractTable";
import {PrimaryGeneratedColumn} from "../../../src/annotation/column/PrimaryGeneratedColumn";
import {Column} from "../../../src/annotation/column/Column";
import {SqlDataType} from "../../../src/splicer/impl/SqlDataType";
import {TableImpl} from "../../../src/splicer/impl/TableImpl";
import {ShellTaskRecord} from "./table/records/ShellTaskRecord";
import {Joint} from "../../../src/splicer/impl/Joint";
import {JSHelperUtil} from "../../../src/util/JSHelperUtil";

/**
 *
 * 功能描述:
 *
 * @className ShellTask
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/13 13:21
 */
export class ShellTask extends TableImpl<ShellTaskRecord> {
    constructor(alias?: string) {
        super(Joint.getName(JSHelperUtil.isNullOrUndefined(alias) ? "shell_task" : alias), ShellTask.SHELL_TASK);
    }
    public static SHELL_TASK = new ShellTask();
    public SHELL_TASK_ID = AbstractTable.createField<ShellTaskRecord, number>("shell_task_id", SqlDataType.VARCHAR, this);
    public CREATE_TIME = AbstractTable.createField<ShellTaskRecord, Date>("create_time", SqlDataType.DATETIME, this);
    public UPDATE_TIME = AbstractTable.createField<ShellTaskRecord, Date>("update_time", SqlDataType.DATETIME, this);
    public SHELL_TEMPLATE_ID = AbstractTable.createField<ShellTaskRecord, number>("shell_template_id", SqlDataType.INTEGER, this);
}
