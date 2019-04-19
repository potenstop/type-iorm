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

export interface IUpdateConditionStep<T> extends IUpdateFinalStep<T> {
    and(condition: ICondition): IUpdateConditionStep<T>;
    and(sql: string): IUpdateConditionStep<T>;
    and(sql: string, args: IObjectLiteral): IUpdateConditionStep<T>;
    and(filed: IField<boolean>): IUpdateConditionStep<T>;

    andNot(condition: ICondition): IUpdateConditionStep<T>;
    andNot(filed: IField<boolean>): IUpdateConditionStep<T>;

    andExists(select: ISelect<any>): IUpdateConditionStep<T>;
    andNotExists(select: ISelect<any>): IUpdateConditionStep<T>;

    or(condition: ICondition): IUpdateConditionStep<T>;
    or(sql: string): IUpdateConditionStep<T>;
    or(sql: string, args: IObjectLiteral): IUpdateConditionStep<T>;
    or(filed: IField<boolean>): IUpdateConditionStep<T>;

    orNot(condition: ICondition): IUpdateConditionStep<T>;
    orNot(filed: IField<boolean>): IUpdateConditionStep<T>;

    orExists(select: ISelect<any>): IUpdateConditionStep<T>;
    orNotExists(select: ISelect<any>): IUpdateConditionStep<T>;
}
