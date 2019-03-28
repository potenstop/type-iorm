/**
 *
 * 功能描述:
 *
 * @className DefaultContexrt
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/24 11:24
 */
import {IContext} from "../IContext";
import {IField} from "../IField";

export class DefaultContext implements IContext {
    private sourceResult: any;
    private sqlStr: string;
    constructor() {
        this.sqlStr = "";
    }
    public sql(sql: string): this {
        this.sqlStr += sql;
        return this;
    }
    public render(): string {
        return this.sqlStr;
    }

    public getSourceResult() {
        return this.sourceResult;
    }
    public setSourceResult(obj: any): void {
        this.sourceResult = obj;
    }
}
