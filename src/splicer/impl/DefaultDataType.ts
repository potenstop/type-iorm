/**
 *
 * 功能描述:
 *
 * @className DefaultDataType
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/19 11:35
 */
import {IDataType} from "../IDataType";

export class DefaultDataType<T> implements IDataType<T> {
    private type: Object;
    private typeName: string;
    constructor(type: Object, typeName: string) {
        this.type = type;
        this.typeName = typeName;
    }

}
