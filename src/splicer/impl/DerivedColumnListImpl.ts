/**
 *
 * 功能描述:
 *
 * @className DerivedColumnListImpl
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/4/25 9:17
 */
import {IDerivedColumnList} from "../IDerivedColumnList";
import {ICommonTableExpression} from "../ICommonTableExpression";
import {IRecord} from "../IRecord";
import {ISelect} from "../ISelect";
import {AbstractQueryPart} from "./AbstractQueryPart";
import {IContext} from "../IContext";
import {IName} from "../IName";

export class DerivedColumnListImpl extends AbstractQueryPart implements IDerivedColumnList {
    private name: IName;
    private fieldNames: IName[];

    constructor(name: IName, fieldNames: IName[]) {
        super();
        this.name = name;
        this.fieldNames = fieldNames;
    }
    public as<R extends IRecord>(select: ISelect<R>): ICommonTableExpression<R> {
        return null;
    }

    public accept(ctx: IContext): void {

    }
}
