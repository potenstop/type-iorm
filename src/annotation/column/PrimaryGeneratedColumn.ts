/**
 *
 * 功能描述: 自增主键列
 *
 * @className PrimaryGeneratedColumn
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/6 14:57
 */
import "reflect-metadata";
import {ColumnMeta} from "../../model/ColumnMeta";
import {ColumnType} from "../../enum/ColumnType";
import {MetaConstant} from "../../constants/MetaConstant";

export function PrimaryGeneratedColumn(name: string): CallableFunction;
export function PrimaryGeneratedColumn(target: (new () => object), propertyKey: string): void;
export function PrimaryGeneratedColumn(name: string | (new () => object), propertyKey?: string): CallableFunction | void {
    if (typeof name === "string") {
        return (target: (new () => object), propertyKey1: string) => {
            exec(target, propertyKey1, name);
        };
    } else {
        exec(name, propertyKey, propertyKey);
    }
}
function exec(target: (new () => object), propertyKey: string, col: string) {
    const columnMetas = Reflect.getOwnMetadata(MetaConstant.COLUMN, target.constructor) || [];
    const columnMeta = new ColumnMeta();
    columnMeta.columnName = col;
    columnMeta.columnType = ColumnType.PRIMARY_GENERATED;
    columnMeta.beanName = propertyKey;
    columnMetas.push(columnMeta);
    Reflect.defineMetadata(MetaConstant.COLUMN, columnMetas, target.constructor);
}
