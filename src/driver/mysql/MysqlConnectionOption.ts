/**
 *
 * 功能描述:
 *
 * @className MysqlConnectionOption
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/6 13:10
 */
export class MysqlConnectionOption {
    public host: string;
    public port: number;
    public user: string;
    public password: string;
    public database: string;
    public charset: string;
    public timezone: string;
    public connectionTimeout: number;
    public stringifyObjects: boolean;
    public insecureAuth: boolean;
    public typeCast: boolean;
    public supportBigNumbers: boolean;
    public bigNumberStrings: boolean;
    public dateStrings: boolean;
    public debug: boolean;
    public trace: boolean;
    public multipleStatements: boolean;
    public flags: boolean;
    public ssl: any;
}
