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
import {UpdatableRecordImpl} from "../../../../../src/splicer/impl/UpdatableRecordImpl";

export class ShellTaskRecord extends UpdatableRecordImpl<ShellTaskRecord> {
    // private shellTaskId:

    public setShellTaskId(value: number): void {
        this.set("shell_task_id", value);
    }
    public getShellTaskId(): number {
        return this.get("shell_task_id") as number;
    }
}
