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
import {ISelect} from "./ISelect";
import {IObjectLiteral} from "../type/IObjectLiteral";
export interface ICondition extends IQueryPart {
    and(condition: ICondition): ICondition;
    and(sql: string): ICondition;
    and(sql: string, args: IObjectLiteral): ICondition;

    andNot(condition: ICondition): ICondition;
    andNot(sql: string): ICondition;
    andNot(sql: string, args: IObjectLiteral): ICondition;

    andExists(select: ISelect<any>): ICondition;
    andNotExists(select: ISelect<any>): ICondition;

    or(condition: ICondition): ICondition;
    or(sql: string): ICondition;
    or(sql: string, args: IObjectLiteral): ICondition;

    orNot(condition: ICondition): ICondition;
    orNot(sql: string): ICondition;
    orNot(sql: string, args: IObjectLiteral): ICondition;

    orExists(select: ISelect<any>): ICondition;
    orNotExists(select: ISelect<any>): ICondition;
}
