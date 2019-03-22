/**
 *
 * 功能描述:
 *
 * @className MysqlConnection
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/6 13:05
 */
import {ISavepoint} from "type-interface";
import {ConnectionOption} from "../../connection/ConnectionOption";
import {MysqlConnectionOption} from "./MysqlConnectionOption";
import {TypeConvertUtil} from "../../util/TypeConvertUtil";
import * as mysql from "mysql";
import {ISqlConnection} from "../ISqlConnection";
export class MysqlConnection implements ISqlConnection {
    public kind: "IConnection";
    public readonly options: any;
    public driverOption: MysqlConnectionOption;
    private sourceConnection: any;
    constructor(connectionOption: ConnectionOption) {
        this.driverOption = new MysqlConnectionOption();
        const url = new URL(connectionOption.url);
        const searchParams = url.searchParams as any;
        this.driverOption.host = url.hostname;
        this.driverOption.port = +url.port || 3306;
        this.driverOption.user = connectionOption.username;
        this.driverOption.password = connectionOption.password;
        this.driverOption.database = url.pathname.slice(1, url.pathname.length);
        this.driverOption.charset = searchParams.charset;
        this.driverOption.timezone = searchParams.timezone;
        this.driverOption.connectionTimeout = +searchParams.connectionTimeout || undefined;
        this.driverOption.stringifyObjects = TypeConvertUtil.getBooleanByString(searchParams.stringifyObjects);
        this.driverOption.insecureAuth = TypeConvertUtil.getBooleanByString(searchParams.insecureAuth);
        this.driverOption.typeCast = TypeConvertUtil.getBooleanByString(searchParams.typeCast);
        this.driverOption.supportBigNumbers = TypeConvertUtil.getBooleanByString(searchParams.supportBigNumbers);
        this.driverOption.bigNumberStrings = TypeConvertUtil.getBooleanByString(searchParams.bigNumberStrings);
        this.driverOption.dateStrings = TypeConvertUtil.getBooleanByString(searchParams.dateStrings);
        this.driverOption.debug = TypeConvertUtil.getBooleanByString(searchParams.debug);
        this.driverOption.trace = TypeConvertUtil.getBooleanByString(searchParams.trace);
        this.driverOption.multipleStatements  = TypeConvertUtil.getBooleanByString(searchParams.multipleStatements);
        this.driverOption.flags = TypeConvertUtil.getBooleanByString(searchParams.flags);
        this.driverOption.ssl = undefined;
        this.sourceConnection = mysql.createConnection(this.driverOption);
    }

    public close(): Promise<void> {
        return undefined;
    }

    public commit(savePoint: ISavepoint): Promise<void> {
        return undefined;
    }

    public async connect(): Promise<void> {
        await this.sourceConnection.connect();
    }

    public isClosed(): boolean {
        return false;
    }

    public isConnected(): boolean {
        return false;
    }

    public isReadOnly(): boolean {
        return false;
    }

    public rollback(savePoint: ISavepoint): Promise<void> {
        return undefined;
    }

    public setReadOnly(readOnly: boolean): void {
    }

    public setSavepoint(name?: string): ISavepoint {
        return undefined;
    }

    public startTransaction(level?: any): Promise<ISavepoint> {
        return undefined;
    }

    public query(sql: string, params?: any[], timeout?: number): Promise<any> {
        if (!params) {
            params = [];
        }
        return new Promise<any>((resolve, reject) => {
            this.sourceConnection.query({
                sql,
                values: params,
                timeout,
            }, function(err, result, fields) {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
            /*this.sourceConnection.query({
                sql,
                values: params,
                timeout,
            }).on("error", (err) => {
                reject(err);
            }).on("fields", (fields) => {
                console.log(fields);
                return fields;
            }).on("result", (row) => {
                console.log(row);
            }).on("end", (a) => {
                resolve([]);
            });*/
            /*this.sourceConnection.query(sql, [], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });*/
        });

    }

}
