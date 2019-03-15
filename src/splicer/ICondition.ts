/**
 *
 * 功能描述: 查询连接预计
 *
 * @className ICondition
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/11 17:22
 */
import {IQueryPart} from "./IQueryPart";
import {ISelectConditionStep} from "./ISelectConditionStep";
import {ISelect} from "./ISelect";
export interface ICondition extends IQueryPart {
    and(condition: ICondition): ICondition;
    and(sql: string): ICondition;
    and(sql: string, ...args: any[]): ICondition;

    andNot(condition: ICondition): ICondition;
    andNot(sql: string): ICondition;
    andNot(sql: string, ...args: any[]): ICondition;

    andExists(select: ISelect): ICondition;
    andNotExists(select: ISelect): ICondition;

    or(condition: ICondition): ICondition;
    or(sql: string): ICondition;
    or(sql: string, ...args: any[]): ICondition;

    orNot(condition: ICondition): ICondition;
    orNot(sql: string): ICondition;
    orNot(sql: string, ...args: any[]): ICondition;

    orExists(select: ISelect): ICondition;
    orNotExists(select: ISelect): ICondition;
}
