/**
 *
 * 功能描述:
 *
 * @className AbstractQueryPart
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/22 11:10
 */
import {IQueryPartInternal} from "../IQueryPartInternal";
import {IContext} from "../IContext";

export abstract class AbstractQueryPart implements IQueryPartInternal {
    public declaresFields(): boolean {
        return false;
    }

    public declaresTables(): boolean {
        return false;
    }

    public equals(value: any): boolean {
        if (this === value) {
            return true;
        } else {
            return false;
        }
    }

    public hashCode(): number {
        return 0;
    }
    public toString(): string {
        return "";
    }
    public abstract accept(ctx: IContext): void;
}
