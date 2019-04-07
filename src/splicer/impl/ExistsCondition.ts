/**
 *
 * 功能描述:
 *
 * @className ExistsCondition
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/4/7 21:38
 */
import {AbstractCondition} from "./AbstractCondition";
import {ISelect} from "../ISelect";

export class ExistsCondition extends AbstractCondition {
    private query: ISelect<any>;
    private exists: boolean;
    constructor(query: ISelect<any> , exists: boolean) {
        super();
        this.query = query;
        this.exists = exists;
    }

}
