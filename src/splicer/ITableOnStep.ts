/**
 *
 * 功能描述:
 *
 * @className ITableOnStep
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/4/21 11:00
 */
import {IRecord} from "./IRecord";
import {ITableOnConditionStep} from "./ITableOnConditionStep";
import {ICondition} from "./ICondition";
import {IField} from "./IField";
import {ISQL} from "./ISQL";
import {IObjectLiteral} from "../type/IObjectLiteral";
import {ITable} from "./ITable";

export interface ITableOnStep<R extends IRecord> {
    on(condition: ICondition ): ITableOnConditionStep<R>;
    on(condition: ICondition[] ): ITableOnConditionStep<R>;
    on(condition: IField<boolean> ): ITableOnConditionStep<R>;
    on(sql: ISQL): ITableOnConditionStep<R>;
    on(sql: string, args: IObjectLiteral): ITableOnConditionStep<R>;

    using(fields: Array<IField<any>>): ITable<IRecord>;
}
