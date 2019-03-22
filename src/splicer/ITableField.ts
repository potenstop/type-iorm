/**
 *
 * 功能描述:
 *
 * @className ITableField
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/13 11:49
 */
import {IField} from "./IField";

export interface ITableField<T> extends IField<T> {
    getTable(): string;
}
