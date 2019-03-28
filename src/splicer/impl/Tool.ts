/**
 *
 * 功能描述:
 *
 * @className Tool
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/27 17:20
 */
import {ObjectType} from "../../type/ObjectType";
import "reflect-metadata";
import {MetaConstant} from "../../constants/MetaConstant";
import {SqlBuilderError} from "../../error/SqlBuilderError";
import {ColumnMeta} from "../../model/ColumnMeta";
import {IField} from "../IField";

export class Tool {
    /**
     * 方法功能描述: 判断要使用meta时候的参数是否有传 没有则抛出异常
     * @author yanshaowen
     * @date 2019/3/8 9:12
     * @return
     */
    private static checkParamsMeta(table: ObjectType<any>) {
        if (!table || !table.constructor) {
            throw new SqlBuilderError("entity is null");
        }
    }
    /**
     * 方法功能描述: 获取表名称 没有返回类的名称
     * @author yanshaowen
     * @date 2019/3/7 19:09
     * @return
     */
    public static getTableName(table: ObjectType<any>) {
        Tool.checkParamsMeta(table);
        return  Reflect.getOwnMetadata(MetaConstant.ENTITY, table) || table.constructor.name;
    }
    /**
     * 方法功能描述: 获取设置的数据库字段映射
     * @author yanshaowen
     * @date 2019/3/8 9:10
     * @return
     */
    public static getTableFieldMap(table: ObjectType<any>): Map<string, ColumnMeta> {
        const map = new Map<string, ColumnMeta>();
        const list = this.getTableFieldList(table);
        map.forEach( (columnMeta) => map.set(columnMeta.beanName, columnMeta));
        return map;
    }
    /**
     * 方法功能描述: 获取设置的数据库字段数组
     * @author yanshaowen
     * @date 2019/3/8 9:10
     * @return
     */
    public static getTableFieldList(table: ObjectType<any>): Map<string, ColumnMeta> {
        Tool.checkParamsMeta(table);
        return  Reflect.getOwnMetadata(MetaConstant.COLUMN, table) || [];
    }
    /**
     * 方法功能描述: 根据字段名称获取对应的Field对象
     * @author yanshaowen
     * @date 2019/3/27 17:32
     * @param table 表对象
     * @param field 字段名称
     * @return IField   字段对应的对象
     */
    public static tableField(table: ObjectType<any>, field: string): IField<any> {
        const s = field.toUpperCase();
        return table[s];
    }

}
