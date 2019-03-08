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

export interface ISqlConnection extends IConnection {
    query(sql: string): Promise<any>;
}
