/**
 *
 * 功能描述:
 *
 * @className IUpdateConditionStep
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/21 15:02
 */
import {IUpdateFinalStep} from "./IUpdateFinalStep";
import {ISelect} from "./ISelect";
import {ICondition} from "./ICondition";
import {IObjectLiteral} from "../type/IObjectLiteral";
import {IField} from "./IField";
import {IRecord} from "./IRecord";

export interface IUpdateConditionStep<R extends IRecord> extends IUpdateFinalStep<R> {
    and(condition: ICondition): IUpdateConditionStep<R>;
    and(sql: string): IUpdateConditionStep<R>;
    and(sql: string, args: IObjectLiteral): IUpdateConditionStep<R>;
    and(filed: IField<boolean>): IUpdateConditionStep<R>;

    andNot(condition: ICondition): IUpdateConditionStep<R>;
    andNot(filed: IField<boolean>): IUpdateConditionStep<R>;

    andExists(select: ISelect<any>): IUpdateConditionStep<R>;
    andNotExists(select: ISelect<any>): IUpdateConditionStep<R>;

    or(condition: ICondition): IUpdateConditionStep<R>;
    or(sql: string): IUpdateConditionStep<R>;
    or(sql: string, args: IObjectLiteral): IUpdateConditionStep<R>;
    or(filed: IField<boolean>): IUpdateConditionStep<R>;

    orNot(condition: ICondition): IUpdateConditionStep<R>;
    orNot(filed: IField<boolean>): IUpdateConditionStep<R>;

    orExists(select: ISelect<any>): IUpdateConditionStep<R>;
    orNotExists(select: ISelect<any>): IUpdateConditionStep<R>;
}
