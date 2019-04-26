/**
 *
 * 功能描述:
 *
 * @className WindowDefinitionImpl
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/4/24 15:19
 */
import {AbstractQueryPart} from "./AbstractQueryPart";
import {IWindowDefinition} from "../IWindowDefinition";
import {IContext} from "../IContext";
import {IName} from "../IName";
import {IWindowSpecification} from "../IWindowSpecification";

export class WindowDefinitionImpl extends AbstractQueryPart implements IWindowDefinition {
    private name: IName;
    private window: IWindowSpecification;

    constructor(name: IName, window: IWindowSpecification) {
        super();
        this.name = name;
        this.window = window;
    }
    public getName(): IName {
        return this.name;
    }
    public accept(ctx: IContext): void {
    }

}
