/**
 *
 * 功能描述:
 *
 * @className DataSource
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/6 12:39
 */
import {IConnection, IDataSource} from "type-interface";
import {createPool, Options, Pool} from "generic-pool";
import {BaseConnection} from "../driver/BaseConnection";
import {ConnectionOption} from "./ConnectionOption";
import {ISqlConnection} from "../driver/ISqlConnection";

export class DataSource implements IDataSource {
    public kind: "IDataSource";

    protected loginTimeout: number;
    protected name: string;
    protected url: string;
    protected type: string;
    protected poolOption: Options;
    protected connectionPool: Pool<IConnection>;
    private readonlyConnection: boolean;
    protected username: string;
    protected password: string;
    constructor() {
        this.type = "mysql";
        this.url = "mysql://localhost/test";
        this.readonlyConnection = false;
        this.poolOption = {
            max: 10,
            min: 1,
            idleTimeoutMillis: 100000,
            acquireTimeoutMillis: 2000,
        };
    }
    public getLogWriter(): () => {} {
        return null;
    }

    public getLoginTimeout(): number {
        return this.loginTimeout;
    }

    public setLogWriter(printWrite: () => {}): void {
    }

    public setLoginTimeout(seconds: number): void {
        this.loginTimeout = seconds;
    }
    public getName() {
        return this.name;
    }
    public setName(name: string): void {
        this.name = name;
    }

    public getUrl() {
        return this.url;
    }
    public setUrl(url: string): void {
        this.url = url;
    }
    public getPoolOptions() {
        return this.poolOption;
    }
    public setPoolOptions(poolOption: Options): void {
        this.poolOption = poolOption;
    }
    public getUsername() {
        return this.username;
    }
    public setUsername(username: string): void {
        this.username = username;
    }
    public getPassword() {
        return this.password;
    }
    public setPassword(password: string): void {
        this.password = password;
    }
    public isReadOnly(): boolean {
        return this.readonlyConnection;
    }
    public setReadOnly(readOnly: boolean): void {
        this.readonlyConnection = readOnly;
    }
    public build() {
        const connectionOption = new ConnectionOption();
        connectionOption.url = this.url;
        connectionOption.username = this.username;
        connectionOption.password = this.password;
        this.connectionPool = createPool({
            async create() {
                const autoConnection = BaseConnection.getAutoConnection(connectionOption);
                await autoConnection.connect();
                return autoConnection;
            },
            destroy(client: IConnection) {
                client.close();
            }}, this.poolOption);
    }

    public getConnection(): Promise<ISqlConnection>;
    public getConnection(username: string, password: string): Promise<ISqlConnection>;
    public async getConnection(username?: string, password?: string): Promise<ISqlConnection> {
        try {
            return await this.connectionPool.acquire();
        } catch (e) {
            throw e;
        }
    }
    public releaseConnection(con: IConnection): Promise<void> {
        return this.connectionPool.release(con);
    }

}
