/**
 *
 * 功能描述:
 *
 * @className BaseConnection
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/6 14:14
 */
import {ConnectionOption} from "../connection/ConnectionOption";
import {IConnection} from "type-interface";

export class BaseConnection {
    /**
     * 方法功能描述: 自动获取连接
     * @author yanshaowen
     * @date 2019/3/6 14:20
     * @param option    配置参数
     * @return
     */
    public static getAutoConnection(option: ConnectionOption): IConnection {
        const url = new URL(option.url);
        let DriverConnection: new (ConnectionOption) => IConnection;
        const pro = url.protocol.slice(0, url.protocol.length - 1);
        if (pro === "mysql") {
            DriverConnection = require("./mysql/MysqlConnection").MysqlConnection;
        } else {
            throw new Error(`not found driver(${pro})`);
        }
        return new DriverConnection(option);
    }
}
