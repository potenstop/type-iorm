/**
 *
 * 功能描述:
 *
 * @className ShellTaskRecord
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/4/23 14:41
 */
import {TableRecordImpl} from "../../../../../src/splicer/impl/TableRecordImpl";

export class ShellTaskRecord extends TableRecordImpl<ShellTaskRecord> {
    // private shellTaskId:

    public setShellTaskId(value: number): void {
        this.set("shell_task_id", value);
    }

}
