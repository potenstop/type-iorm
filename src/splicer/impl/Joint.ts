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

export class Joint {
    public static condition(operator: Operator, left: ICondition, right: ICondition): ICondition;
    public static condition(sql: string, args: any[]): ICondition;
    public static condition(sql: string | Operator, args: any[] | ICondition, right?: ICondition): ICondition {
        return null;
    }

    public static and(left: ICondition, right: ICondition): ICondition {
        return Joint.condition(Operator.AND, left, right);
    }
    public static or(left: ICondition, right: ICondition): ICondition {
        return Joint.condition(Operator.OR, left, right);
    }
}
