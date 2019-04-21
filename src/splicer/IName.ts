/**
 *
 * 功能描述:
 *
 * @className IName
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/4/20 18:28
 */
import {IQueryPart} from "./IQueryPart";

export interface IName extends IQueryPart {
    /**
     * Get the first segment of the qualified name (usually a {@link Catalog} or {@link Schema} name).
     */
    first(): string;

    /**
     * Get the last segment of the qualified name (usually a {@link Table}, {@link Field}, or {@link Parameter} name).
     */
    last(): string;

    /**
     * Whether this is a qualified name.
     * <p>
     * This is <code>true</code> as soon as {@link #getName()} has a length of more than <code>1</code>.
     */
    qualified(): boolean;

    /**
     * This name's qualifier (if it is {@link #qualified()}), or <code>null</code>.
     */
    qualifier(): IName;

    /**
     * This name, unqualified.
     */
    unqualifiedName(): IName;

    /**
     * This name, quoted.
     */
    quotedName(): IName;

    /**
     * This name, unquoted.
     */
    unquotedName(): IName;

    /**
     * Get the individual, unqualified name parts of this name.
     */
    parts(): IName[];

    /**
     * Appends <code>name</code> to this name.
     */
    append(name: string): IName;

    /**
     * Appends <code>name</code> (all of its {@link #parts()}) to this name.
     */
    append(name: IName): IName;

    /**
     * The qualified name of this SQL identifier.
     */
    getName(): string[];
}
