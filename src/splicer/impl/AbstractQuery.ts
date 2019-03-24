/**
 *
 * 功能描述:
 *
 * @className AbstractQuery
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/22 14:39
 */
import {AbstractQueryPart} from "./AbstractQueryPart";
import {IQuery} from "../IQuery";
import {LoggerFactory} from "type-slf4";
import {DefaultContext} from "./DefaultContext";
import {ISqlConnection} from "../../driver/ISqlConnection";
import {SqlExecuteError} from "../../error/SqlExecuteError";
const logger = LoggerFactory.getLogger("type-iorm.splicer.impl.AbstractQueryPart");
export abstract class AbstractQuery extends AbstractQueryPart implements IQuery {
    private timeout: number;
    private connection: ISqlConnection;
    constructor(connection: ISqlConnection) {
        super();
        this.connection = connection;
    }

    public async execute(): Promise<number> {
        const ctx = new DefaultContext();
        if (this.isExecutable()) {
            // 构建sql
            const Accept = this as any;
            if (typeof Accept.accept === "function") {
                Accept.accept(ctx);
            }
            const sql = ctx.render();
            try {
                await this.connection.query(sql, [], this.timeout);
            } catch (e) {
                throw new SqlExecuteError(e.message);
            }
            return 1;
        } else {
            logger.debug("Query is not executable");
            return 0;
        }
    }

    public getSQL(): string {
        return "";
    }

    public isExecutable(): boolean {
        return true;
    }

    public queryTimeout(seconds: number): IQuery {
        this.timeout = seconds;
        return this;
    }

}
