/**
 *
 * 功能描述:
 *
 * @className QueryPartList
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/4/20 17:45
 */
import {AbstractQueryPart} from "./AbstractQueryPart";
import {IQueryPart} from "../IQueryPart";
import {IContext} from "../IContext";

export class QueryPartList<T extends IQueryPart> extends AbstractQueryPart implements Array<T> {
    [n: number]: T;

    public length: number;
    private wrappedList: T[];

    constructor(wrappedList: T[] ) {
        super();
        this.wrappedList = new Array<T>();
        this.resetLength();
        if (wrappedList != null && wrappedList.length !== 0) {
            this.concat(wrappedList);
        }
    }

    public [Symbol.iterator](): IterableIterator<T> {
        return this.wrappedList[Symbol.iterator]();
    }

    public accept(ctx: IContext): void {
        if (this.length === 0) {
            this.toSQLEmptyList(ctx);
        } else {
            let separator = "";
            const indent = this.length > 1;

            if (indent) {
                ctx.formatIndentStart();
            }
            this.forEach((value, i) => {
                ctx.sql(separator);

                if (i > 0 || indent) {
                    ctx.formatNewLine();
                }

                ctx.visitSql(value);
                separator = ", ";
            });
            if (indent) {
                ctx.formatIndentEnd().formatNewLine();
            }
        }
    }
    protected toSQLEmptyList(ctx: IContext) {
    }
    public concat(...items: Array<ConcatArray<T>>): T[];
    public concat(...items: Array<ConcatArray<T> | T>): T[];
    public concat(...items: Array<ConcatArray<T> | T>): T[] {
        const ts = this.wrappedList.concat(...items);
        this.resetLength();
        return ts;
    }

    public copyWithin(target: number, start: number, end?: number): this {
        this.wrappedList.copyWithin(target, start, end);
        this.resetLength();
        return this;
    }

    public entries(): IterableIterator<[number, T]> {
        return this.wrappedList.entries();
    }

    public every(callbackfn: (value: T, index: number, array: T[]) => boolean, thisArg?: any): boolean {
        const b = this.wrappedList.every(callbackfn, thisArg);
        this.resetLength();
        return b;
    }

    public fill(value: T, start?: number, end?: number): this {
        this.wrappedList.fill(value, start, end);
        this.resetLength();
        return this;
    }

    public filter<S extends T>(callbackfn: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[];
    public filter(callbackfn: (value: T, index: number, array: T[]) => any, thisArg?: any): T[];
    public filter(callbackfn, thisArg?: any): any {
        return this.wrappedList.filter(callbackfn, thisArg);
    }

    public find<S extends T>(predicate: (this: void, value: T, index: number, obj: T[]) => value is S, thisArg?: any): S | undefined;
    public find(predicate: (value: T, index: number, obj: T[]) => boolean, thisArg?: any): T | undefined;
    public find(predicate, thisArg?: any): any {
        return this.wrappedList.find(predicate, thisArg);
    }

    public findIndex(predicate: (value: T, index: number, obj: T[]) => boolean, thisArg?: any): number {
        return this.wrappedList.findIndex(predicate, thisArg);
    }

    public forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void {
        this.wrappedList.forEach(callbackfn, thisArg);
    }

    public includes(searchElement: T, fromIndex?: number): boolean {
        return this.wrappedList.includes(searchElement, fromIndex);
    }

    public indexOf(searchElement: T, fromIndex?: number): number {
        return this.wrappedList.indexOf(searchElement, fromIndex);
    }

    public join(separator?: string): string {
        return this.wrappedList.join(separator);
    }

    public keys(): IterableIterator<number> {
        return this.wrappedList.keys();
    }

    public lastIndexOf(searchElement: T, fromIndex?: number): number {
        return this.wrappedList.lastIndexOf(searchElement, fromIndex);
    }

    public map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[] {
        return this.wrappedList.map(callbackfn, thisArg);
    }

    public pop(): T | undefined {
        const t = this.wrappedList.pop();
        this.resetLength();
        return t;
    }

    public push(...items: T[]): number {
        const num = this.wrappedList.push(...items);
        this.resetLength();
        return num;
    }

    public reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T;
    public reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T;
    public reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U;
    public reduce(callbackfn, initialValue?): any {
        return this.wrappedList.reduce(callbackfn, initialValue);
    }

    public reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T;
    public reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T;
    public reduceRight<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U;
    public reduceRight(callbackfn, initialValue?): any {
        return this.wrappedList.reduceRight(callbackfn, initialValue);
    }

    public reverse(): T[] {
        return this.wrappedList.reverse();
    }

    public shift(): T | undefined {
        const t = this.wrappedList.shift();
        this.resetLength();
        return t;
    }

    public slice(start?: number, end?: number): T[] {
        const ts = this.wrappedList.slice(start, end);
        this.resetLength();
        return ts;
    }

    public some(callbackfn: (value: T, index: number, array: T[]) => boolean, thisArg?: any): boolean {
        return this.wrappedList.some(callbackfn, thisArg);
    }

    public sort(compareFn?: (a: T, b: T) => number): this {
        this.wrappedList.sort(compareFn);
        return this;
    }

    public splice(start: number, deleteCount?: number): T[];
    public splice(start: number, deleteCount: number, ...items: T[]): T[];
    public splice(start: number, deleteCount?: number, ...items: T[]): T[] {
        const ts = this.wrappedList.splice(start, deleteCount, ...items);
        this.resetLength();
        return ts;
    }

    public unshift(...items: T[]): number {
        const num = this.wrappedList.unshift(...items);
        this.resetLength();
        return num;
    }

    public values(): IterableIterator<T> {
        return this.wrappedList.values();
    }

    public [Symbol.unscopables](): { copyWithin: boolean; entries: boolean; fill: boolean; find: boolean; findIndex: boolean; keys: boolean; values: boolean } {
        return {
            copyWithin: true,
            entries: true,
            fill: true,
            find: true,
            findIndex: true,
            keys: true,
            values: true,
        };
    }
    private resetLength() {
        this.length = this.wrappedList.length;
    }

}
