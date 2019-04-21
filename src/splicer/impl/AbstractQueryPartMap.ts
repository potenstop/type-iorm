/**
 *
 * 功能描述:
 *
 * @className AbstractQueryPartMap
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/4/20 11:25
 */
import {IQueryPart} from "../IQueryPart";
import {AbstractQueryPart} from "./AbstractQueryPart";
import {IContext} from "../IContext";

export abstract class AbstractQueryPartMap<K extends IQueryPart, V extends IQueryPart> extends AbstractQueryPart implements Map<K, V> {
    private map: Map<K, V>;
    public readonly [Symbol.toStringTag]: string;
    public size: number;
    constructor() {
        super();
        this.map = new Map<K, V>();
        this.size = this.map.size;
        this[Symbol.toStringTag] = "1111111111";
    }
    public [Symbol.iterator](): IterableIterator<[K, V]> {
        return this.map[Symbol.iterator]();
    }

    public clear(): void {
        this.map.clear();
        this.size = 0;
    }

    public delete(key: K): boolean {
        const b = this.map.delete(key);
        this.resetSize();
        return b;
    }

    public entries(): IterableIterator<[K, V]> {
        return this.map.entries();
    }

    public forEach(callbackfn: (value: V, key: K, map: Map<K, V>) => void, thisArg?: any): void {
        this.map.forEach(callbackfn, thisArg);
    }

    public get(key: K): V | undefined {
        return this.map.get(key);
    }

    public has(key: K): boolean {
        return this.map.has(key);
    }

    public keys(): IterableIterator<K> {
        return this.map.keys();
    }

    public set(key: K, value: V): this {
        this.map.set(key, value);
        this.resetSize();
        return this;
    }

    public values(): IterableIterator<V> {
        return this.map.values();
    }
    public resetSize() {
        this.size = this.map.size;
    }
}
