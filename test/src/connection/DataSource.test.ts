
import { expect } from "chai";
import {DataSource} from "../../../src/connection/DataSource";

describe("datasource", () => {
    it("create", async () => {
        const dataSource = new DataSource();
        dataSource.setName("mysql-slave2");
        dataSource.setReadOnly(true);
        dataSource.setUrl("mysql://localhost:3306/common_util");
        dataSource.setUsername("common_util_root");
        dataSource.setPassword("123456");
        dataSource.build();
        const connection = await dataSource.getConnection();
        await connection.query("select * from network_host");
        const result = await connection.query("INSERT INTO `shell_task` (`shell_template_id`) VALUES ('1'),('2')");
        const result1 = await connection.query("UPDATE `shell_task` SET `shell_template_id`='3' WHERE (`shell_task_id`='371') LIMIT 1");
        const buffer = Buffer.from("tést");
        const result2 = await connection.query("INSERT INTO `test` (`a1`,`a2`) VALUES ('2', ?)", [ "111"]);
        console.log(result, result1, result2);
    });
});
