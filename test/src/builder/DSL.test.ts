import {DataSource} from "../../../src/connection/DataSource";
import {DSL} from "../../../src/builder/DSL";

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
        DSL.select()
    });
})
