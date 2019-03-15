import {InsertBuilder} from "../../../src/builder/InsertBuilder";
import {DataSource} from "../../../src/connection/DataSource";
import {ShellTask} from "./ShellTask";

const dataSource = new DataSource();
dataSource.setName("mysql-slave2");
dataSource.setReadOnly(true);
dataSource.setUrl("mysql://localhost:3306/common_util");
dataSource.setUsername("common_util_root");
dataSource.setPassword("123456");
dataSource.build();


describe("测试 InsertBuilder", () => {
    it("insert values", async () => {
        const connection = await dataSource.getConnection();
        const shellTask = new ShellTask();
        shellTask.shellTemplateId = 1;
        shellTask.createTime = new Date();
        const result = await InsertBuilder
            .into(ShellTask)
            .setConnection(connection)
            .values(shellTask)
            .execute();
        console.log(result);
    });
})
