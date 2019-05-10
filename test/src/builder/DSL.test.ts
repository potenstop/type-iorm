import {DataSource} from "../../../src/connection/DataSource";
import {DSL} from "../../../src/builder/DSL";
import {ShellTask} from "./ShellTask";

const dataSource = new DataSource();
dataSource.setName("mysql-slave2");
dataSource.setReadOnly(true);
dataSource.setUrl("mysql://localhost:3306/common_util");
dataSource.setUsername("common_util_root");
dataSource.setPassword("123456");
dataSource.build();
describe("测试 DSL", () => {
    it("select", async () => {
        const connection = await dataSource.getConnection();
        const iResult = DSL.select()
            .from(ShellTask)
            .where(ShellTask.SHELL_TASK.SHELL_TASK_ID.eq(1))
            .and(ShellTask.SHELL_TASK.CREATE_TIME.eq(new Date("1111"))).fetchOne();
    });
    it("insert", async () => {
        const connection = await dataSource.getConnection();
        const iChangeResult = await DSL.using(connection)
            .insertInto(ShellTask.SHELL_TASK)
            .columns(ShellTask.SHELL_TASK.CREATE_TIME, ShellTask.SHELL_TASK.SHELL_TEMPLATE_ID)
            .values(new Date(), 1)
            .values(new Date(), 2)
            .values(new Date(), 3)
            .getResult();
        console.log(iChangeResult);
    });
    it("update", async () => {
        const connection = await dataSource.getConnection();
        await DSL.using(connection)
            .update(ShellTask.SHELL_TASK)
            .set(ShellTask.SHELL_TASK.CREATE_TIME, new Date())
            .where(ShellTask.SHELL_TASK.SHELL_TEMPLATE_ID.eq(1))
            .getAffectedRow();

    });
    it("delete", async () => {
       await DSL.delete(ShellTask.SHELL_TASK).where().getAffectedRow();
    });
    it("buff", async () => {
        /*const buf5 = Buffer.from("tést");
        console.log(buf5);*/


    });
});
