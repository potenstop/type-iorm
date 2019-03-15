import {UpdateBuilder} from "../../../src/builder/UpdateBuilder";
import {DataSource} from "../../../src/connection/DataSource";
import {Entity} from "../../../src/annotation/entity/Entity";
import {PrimaryGeneratedColumn} from "../../../src/annotation/column/PrimaryGeneratedColumn";
import {Column} from "../../../src/annotation/column/Column";
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
        const result = await UpdateBuilder
            .into(ShellTask)
            .setConnection(connection)
            .set(shellTask)
            .where()
        console.log(result);
    });
})

function f(k: any) {
    console.log(k);
}
