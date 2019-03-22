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
        ShellTask.SHELL_TASK_ID.eq(1);
        const iResult = DSL.select(ShellTask.SHELL_TASK_ID)
            .from(ShellTask)
            .where(ShellTask.SHELL_TASK_ID.eq(1))
            .and(ShellTask.CREATE_TIME.eq(new Date("1111"))).fetchOne();
        const into = iResult.into(A);
    });
    it("insert", async () => {
        await DSL.insertInto(ShellTask).columns(ShellTask.CREATE_TIME).values(1, 2).getResult();
    });
    it("update", async () => {
        await DSL.update(ShellTask).set(ShellTask.CREATE_TIME, new Date()).where().getAffectedRow();
    });
    it("delete", async () => {
       await DSL.delete(ShellTask).where().getAffectedRow();
    });
});
class A {

}
