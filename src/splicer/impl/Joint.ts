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
import {NoCondition} from "./NoCondition";
import {IObjectLiteral} from "../../type/IObjectLiteral";
import {JSHelperUtil} from "../../util/JSHelperUtil";
import {TrueCondition} from "./TrueCondition";
import {FalseCondition} from "./FalseCondition";
import {IKeyword} from "../IKeyword";
import {KeywordImpl} from "./KeywordImpl";
import {IField} from "../IField";
import {FieldCondition} from "./FieldCondition";
import {IName} from "../IName";
import {UnqualifiedName} from "./UnqualifiedName";
import {QualifiedName} from "./QualifiedName";

export class Joint {
    public static condition(operator: Operator, left: ICondition, right: ICondition): ICondition;
    public static condition(operator: Operator, conditions: ICondition[]): ICondition;
    public static condition(sql: string, args: IObjectLiteral): ICondition;
    public static condition(sql: string): ICondition;
    public static condition(field: IField<boolean> ): ICondition;
    public static condition(sql: string | Operator | IField<boolean>, args?: IObjectLiteral| ICondition[] | ICondition, right?: ICondition): ICondition {
        if (typeof sql === "string") {
            return new SQLCondition(new SQLImpl(sql, JSHelperUtil.isNullOrUndefined(args) ? {} : args));
        } else if ("as" in sql) {
            return new FieldCondition(sql);
        } else if (typeof sql !== "string" && !Array.isArray(args)) {
            return new CombinedCondition(sql, args as ICondition, right);
        } else if (typeof sql !== "string" && Array.isArray(args)) {    // operator: Operator, conditions: ICondition[]
            let combinedCondition: CombinedCondition;
            args.forEach((condition) => {
                if (!(condition instanceof NoCondition)) {
                    if (combinedCondition === null) {
                        combinedCondition = new CombinedCondition(sql);
                    } else {
                        combinedCondition.add(sql, condition);
                    }
                }
            });
            if (JSHelperUtil.isNullOrUndefined(combinedCondition)) {
                if (sql === Operator.AND) {
                    return Joint.trueCondition();
                } else {
                    return Joint.falseCondition();
                }
            }
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
    public static noCondition() {
        return NoCondition.INSTANCE;
    }
    public static trueCondition() {
        return TrueCondition.INSTANCE;
    }
    public static falseCondition() {
        return FalseCondition.INSTANCE;
    }
    public static keyword(keyword: string): IKeyword {
        return new KeywordImpl(keyword);
    }
    public static getNames(names: string[]): IName[] {
        return names.map((name) => {
            return Joint.getName(name);
        });
    }
    public static getName(name: string): IName {
        return new UnqualifiedName(name);
    }
    public static getNoName(): IName {
        return Joint.getName("");
    }
    public static getQualifiedName(names: IName[]): IName {
        return new QualifiedName(name);
    }
}
