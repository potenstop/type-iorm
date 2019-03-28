/**
 *
 * 功能描述:
 *
 * @className ISqlConnection
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/6 15:32
 */
import {IConnection} from "type-interface";
import {DriverEnum} from "../enum/DriverEnum";

export interface ISqlConnection extends IConnection {
    readonly driver: DriverEnum;
    query(sql: string): Promise<any>;
    query(sql: string, params: any[]): Promise<any>;
    query(sql: string, params: any[], timeout: number): Promise<any>;
}
