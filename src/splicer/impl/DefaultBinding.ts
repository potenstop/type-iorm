/**
 *
 * 功能描述:
 *
 * @className DefaultBinding
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/23 22:42
 */
import {IBinding} from "../IBinding";
import {IConverter} from "../IConverter";

export class DefaultBinding<T, U> implements IBinding<T, U> {
    public converter(): IConverter<T, U> {
        return undefined;
    }

}
