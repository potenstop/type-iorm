import {IField} from "../splicer/IField";
import {SelectImpl} from "../splicer/impl/SelectImpl";

/**
 *
 * 功能描述:
 *
 * @className DSLContext
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/13 20:16
 */
export class DSLContext {
    public select(...field: IField[]) {
        return new SelectImpl();
    }
}
