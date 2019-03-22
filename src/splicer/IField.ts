/**
 *
 * 功能描述: 拼接的字段
 *
 * @className IField
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/11 17:29
 */
import {ICondition} from "./ICondition";
import {IFieldOrRow} from "./IFieldOrRow";
import {ISelectField} from "./ISelectField";

export interface IField<T> extends IFieldOrRow, ISelectField {
    // 数据库字段名称 设置了别名则获取别名的名称
    getName(): string;
    as(alias: string): IField<T>;
    eq(field: T): ICondition;
}
