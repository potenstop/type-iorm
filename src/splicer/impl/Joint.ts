/**
 *
 * 功能描述: sql拼接类
 *
 * @className Joint
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/4/4 9:53
 */
import {ICondition} from "../ICondition";
import {Operator} from "./Operator";
import {SQLImpl} from "./SQLImpl";
import {SQLCondition} from "./SQLCondition";
import {CombinedCondition} from "./CombinedCondition";
import {ISelect} from "../ISelect";
import {ExistsCondition} from "./ExistsCondition";

export class Joint {
    public static condition(operator: Operator, left: ICondition, right: ICondition): ICondition;
    public static condition(sql: string, args: any[]): ICondition;
    public static condition(sql: string | Operator, args: any[] | ICondition, right?: ICondition): ICondition {
        if (typeof sql === "string" && Array.isArray(args)) {
            return new SQLCondition(new SQLImpl(sql, args));
        } else if (typeof sql !== "string" && !Array.isArray(args)) {
            return new CombinedCondition(sql, args, right);
        }
    }

    public static and(left: ICondition, right: ICondition): ICondition {
        return Joint.condition(Operator.AND, left, right);
    }
    public static or(left: ICondition, right: ICondition): ICondition {
        return Joint.condition(Operator.OR, left, right);
    }
    public static exists(query: ISelect<any>) {
        return new ExistsCondition(query, true);
    }
    public static notExists(query: ISelect<any>) {
        return new ExistsCondition(query, false);
    }
}
