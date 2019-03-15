import {ISqlConnection} from "../driver/ISqlConnection";
import {IField} from "../splicer/IField";
import {DSLContext} from "./DSLContext";

/**
 *
 * 功能描述:
 *
 * @className DSL
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/13 19:49
 */
export class DSL {
    public static using(connection: ISqlConnection) {
        return new DSLContext();
    }
    private static dsl() {
        return DSL.using(null);
    }
    public static select(...field: IField[]) {
        DSL.dsl().select();
    }
    public static insert() {

    }
}
