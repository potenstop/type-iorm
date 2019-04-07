/**
 *
 * 功能描述:
 *
 * @className SQLCondition
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/4/7 11:46
 */
import {AbstractCondition} from "./AbstractCondition";
import {IQueryPart} from "../IQueryPart";

export class SQLCondition extends AbstractCondition {
    private delegate: IQueryPart;
    constructor(delegate: IQueryPart) {
        super();
        this.delegate = delegate;
    }
}
