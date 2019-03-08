/**
 *
 * 功能描述: 类型转换工具类
 *
 * @className TypeConvertUtil
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/6 13:32
 */
export class TypeConvertUtil {
    public static getBooleanByString(value: string): boolean {
        if (value === null || value === "null") {
            return null;
        }
        if (value === undefined || value === "undefined") {
            return undefined;
        }
        if (value === "true") {
            return true;
        }
        return value !== "false";
    }
}
