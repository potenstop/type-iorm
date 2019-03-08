/**
 *
 * 功能描述: 保存的列的元数据
 *
 * @className ColumnMeta
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/6 15:20
 */
import {ColumnType} from "../enum/ColumnType";

export class ColumnMeta {
    public columnName: string;
    public columnType: ColumnType;
    public beanName: string;
}
