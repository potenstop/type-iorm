/**
 *
 * 功能描述:
 *
 * @className IBinding
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/23 22:40
 */
import {IConverter} from "./IConverter";

export interface IBinding<T, U> {
    converter(): IConverter<T, U>;

}
