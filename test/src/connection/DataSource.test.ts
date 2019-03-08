
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
        connection.query("select * from network_host");
    });
});
