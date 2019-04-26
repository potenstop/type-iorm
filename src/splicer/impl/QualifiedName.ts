/**
 *
 * 功能描述:
 *
 * @className QualifiedName
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/4/24 11:58
 */
import {AbstractName} from "./AbstractName";
import {IContext} from "../IContext";
import {IName} from "../IName";
import {UnqualifiedName} from "./UnqualifiedName";

export class QualifiedName extends AbstractName {
    private qualifiedName: UnqualifiedName[];
    constructor(qualifiedName: IName[]) {
        super();

    }
    public accept(ctx: IContext): void {
    }

    public first(): string {
        return "";
    }

    public getName(): string[] {
        return [];
    }

    public last(): string {
        return "";
    }

    public parts(): IName[] {
        return [];
    }

    public qualified(): boolean {
        return false;
    }

    public qualifier(): IName {
        return undefined;
    }

    public quotedName(): IName {
        return undefined;
    }

    public unqualifiedName(): IName {
        return undefined;
    }

    public unquotedName(): IName {
        return undefined;
    }

}
