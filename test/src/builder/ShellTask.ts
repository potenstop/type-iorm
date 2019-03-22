import {Entity} from "../../../src/annotation/entity/Entity";
import {AbstractTable} from "../../../src/splicer/impl/AbstractTable";
import {PrimaryGeneratedColumn} from "../../../src/annotation/column/PrimaryGeneratedColumn";
import {Column} from "../../../src/annotation/column/Column";
import {SqlDataType} from "../../../src/splicer/impl/SqlDataType";

/**
 *
 * 功能描述:
 *
 * @className ShellTask
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/13 13:21
 */
@Entity("shell_task")
export class ShellTask {
    public static SHELL_TASK_ID = AbstractTable.createField<number>(SqlDataType.VARCHAR, "shell_task_id");
    public static CREATE_TIME = AbstractTable.createField<Date>(SqlDataType.DATETIME, "create_time");
    public static UPDATE_TIME = AbstractTable.createField<Date>(SqlDataType.DATETIME, "update_time");
    public static SHELL_TEMPLATE_ID = AbstractTable.createField<number>(SqlDataType.INTEGER, "shell_template_id");
    @PrimaryGeneratedColumn("shell_task_id")
    public shellTaskId: number;

    @Column("create_time")
    public createTime: Date;

    @Column("update_time")
    public updateTime: Date;

    @Column("shell_template_id")
    public shellTemplateId: number;

    @Column("hz_year")
    public hzYear: string;

    @Column("hz_month")
    public hzMonth: string;

    @Column("hz_day")
    public hzDay: string;

    @Column("hz_hour")
    public hzHour: string;

    @Column("hz_minute")
    public hzMinute: string;

    @Column("hz_second")
    public hzSecond: string;
}
