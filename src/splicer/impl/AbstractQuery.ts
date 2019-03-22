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

export class AbstractQuery extends AbstractQueryPart implements IQuery {
    private timeout: number;
    public execute(): Promise<number> {

        return undefined;
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
