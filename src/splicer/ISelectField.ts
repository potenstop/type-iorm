/**
 *
 * 功能描述:
 *
 * @className ISelectField
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/22 9:21
 */
import {ISelectFieldOrAsterisk} from "./ISelectFieldOrAsterisk";
import {INamed} from "./INamed";
import {IDataType} from "./IDataType";
import {IConverter} from "./IConverter";

export interface ISelectField<T> extends ISelectFieldOrAsterisk, INamed {
    getType(): Object;
    getDataType(): IDataType<T>;
    getConverter(): IConverter<any, any>;
}
