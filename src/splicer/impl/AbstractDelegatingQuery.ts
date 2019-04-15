/**
 *
 * 功能描述:
 *
 * @className AbstractDelegatingQuery
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/22 12:42
 */
import {AbstractQueryPart} from "./AbstractQueryPart";
import {IQuery} from "../IQuery";
import {AbstractStoreQuery} from "./AbstractStoreQuery";
import {IContext} from "../IContext";

export abstract class AbstractDelegatingQuery<Q extends IQuery> extends AbstractQueryPart implements IQuery {
    private readonly delegate: Q;
    constructor(delegate: Q) {
        super();
        this.delegate = delegate;
    }
    public execute() {
        return this.delegate.execute();
    }

    public getSQL(): string {
        return this.delegate.getSQL();
    }

    public queryTimeout(seconds: number): IQuery {
        return this.delegate.queryTimeout(seconds);
    }

    public isExecutable(): boolean {
        return this.delegate.isExecutable();
    }
    public getDelegate(): Q {
        return this.delegate;
    }
    public accept(ctx: IContext): void {

    }

}
