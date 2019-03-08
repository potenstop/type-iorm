import {InsertBuilder} from "../../../src/builder/InsertBuilder";
import {DataSource} from "../../../src/connection/DataSource";
import {Entity} from "../../../src/annotation/entity/Entity";
import {PrimaryGeneratedColumn} from "../../../src/annotation/column/PrimaryGeneratedColumn";
import {Column} from "../../../src/annotation/column/Column";


const dataSource = new DataSource();
dataSource.setName("mysql-slave2");
dataSource.setReadOnly(true);
dataSource.setUrl("mysql://localhost:3306/common_util");
dataSource.setUsername("common_util_root");
dataSource.setPassword("123456");
dataSource.build();

@Entity("shell_task")
export class ShellTask {
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
describe("测试 InsertBuilder", () => {
    it("insert values", async () => {
        const connection = await dataSource.getConnection();
        const shellTask = new ShellTask();
        shellTask.createTime = new Date();
        const result = await InsertBuilder
            .into(ShellTask)
            .setConnection(connection)
            .values(shellTask)
            .execute();
        console.log(result);
    });
})

