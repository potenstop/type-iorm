/**
 *
 * 功能描述:
 *
 * @className AbstractBinding
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/23 22:45
 */
import {IBinding} from "../IBinding";
import {IConverter} from "../IConverter";

export abstract class AbstractBinding<T, U> implements IBinding<T, U> {
    public readonly type: Class<T>;
    public readonly converter0: IConverter<T, U>;

    constructor(converter: IConverter<T, U>) {
        this.type = converter.fromType();
        this.converter0 = converter;
    }

    public converter(): IConverter<T, U> {
        return this.converter0;
    }
}
