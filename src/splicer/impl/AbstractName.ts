/**
 *
 * 功能描述:
 *
 * @className AbstractName
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/4/23 16:33
 */
import {AbstractQueryPart} from "./AbstractQueryPart";
import {IName} from "../IName";
import {Joint} from "./Joint";
import {IWindowDefinition} from "../IWindowDefinition";
import {IWindowSpecification} from "../IWindowSpecification";
import {IRecord} from "../IRecord";
import {ISelect} from "../ISelect";
import {JSHelperUtil} from "../../util/JSHelperUtil";
import {WindowDefinitionImpl} from "./WindowDefinitionImpl";
import {IDerivedColumnList} from "../IDerivedColumnList";
import {DerivedColumnListImpl} from "./DerivedColumnListImpl";

export abstract class AbstractName extends AbstractQueryPart implements IName {
    public append(name: string): IName;
    public append(name: IName): IName;
    public append(name: string | IName): IName {
        if (typeof name === "string") {
            return this.append(Joint.getName(name));
        }
        const array: IName[] = [];
       /* const p1 = this.parts();
        const p2 = name.parts();
        const array: IName[] = [];
        Object.assign(array, p1);
        System.arraycopy(p1, 0, array, 0, p1.length);
        System.arraycopy(p2, 0, array, p1.length, p2.length);*/
        return Joint.getQualifiedName(array);
    }

    public as(): IWindowDefinition;
    public as(win: IWindowSpecification): IWindowDefinition;
    public as<R extends IRecord>(select: ISelect<R>): IWindowDefinition;
    public as<R extends IRecord>(win?: IWindowSpecification| ISelect<R>): IWindowDefinition {
        if ("union" in win) {
            return this.fields().as(win);
        }
        return new WindowDefinitionImpl(this, win);
    }

    public equalsIgnoreCase(name: IName): boolean {
        return false;
    }

    public fields(...fields: string[]): IDerivedColumnList;
    public fields(...names: IName[]): IDerivedColumnList;
    public fields(...fields: Array<string | IName>): IDerivedColumnList {
        if (typeof fields[0] === "string") {
            const fields1 = fields as string[];
            return this.fields(...Joint.getNames(fields1));
        } else {
            if (this.getName().length !== 1) {
                throw new Error("this.getName().length !==1");
            } else {
                const fields1 = fields as IName[];
                throw  new DerivedColumnListImpl(this.unqualifiedName(), fields1);
            }
        }
    }

    public abstract first(): string;

    public abstract getName(): string[];

    public abstract last(): string;

    public abstract parts(): IName[];

    public abstract qualified(): boolean;

    public abstract qualifier(): IName;

    public abstract quotedName(): IName;

    public abstract unqualifiedName(): IName;

    public abstract unquotedName(): IName;

}
