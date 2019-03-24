/**
 *
 * 功能描述:
 *
 * @className ConverterImpl
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/23 21:15
 */
import {IConverter} from "../IConverter";

export class Converters<T, U> implements IConverter<T, U> {
    private chain: Array<IConverter<any, any>>;

    constructor(...chain: Array<IConverter<any, any>>) {
        this.chain = chain;
    }

    public from(databaseObject: T): U {
        let result = databaseObject as Object;
        this.chain.forEach((converter) => {
            result = converter.from(result);
        });
        return result as U;
    }

    public fromType(): Class<T> {
        return this.chain[0].fromType();
    }

    public inverse(): IConverter<U, T> {
        return undefined;
    }

    public to(userObject: U): T {
        let result = userObject as Object;

        for (let i = this.chain.length - 1; i >= 0; i--) {
            result = this.chain[i].from(result);
        }
        return result as T;
    }

    public toType(): Class<U> {
        return this.chain[this.chain.length - 1].toType();
    }

    public toString(): string {
        let str = "";
        const separator = " -> ";

        str += "Converters [ ";
        str += this.chain[0].fromType().constructor.name;
        this.chain.forEach((converter) => {
            str += separator;
            str += converter.toType().constructor.name;
        });

        str += " ]";
        return str;
    }

}
