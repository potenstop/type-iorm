/**
 *
 * 功能描述:
 *
 * @className UnqualifiedName
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/4/23 16:41
 */
import {AbstractName} from "./AbstractName";
import {IContext} from "../IContext";
import {IName} from "../IName";

export class UnqualifiedName extends AbstractName {
    private name: string;
    constructor(name: string) {
        super();
        this.name = name;
    }
    public accept(ctx: IContext): void {}

    public first(): string {
        return this.name;
    }

    public last(): string {
        return this.name;
    }

    public qualified(): boolean {
        return false;
    }

    public qualifier(): IName {
        return null;
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

    public parts(): IName[] {
        return [];
    }

    public getName(): string[] {
        return [];
    }

}
