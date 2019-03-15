/**
 *
 * 功能描述:
 *
 * @className AbstractTable
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/13 11:54
 */
import {FieldImpl} from "./FieldImpl";
import {IField} from "../IField";

export class AbstractTable {
    public static createField(name: string): IField {
        return new FieldImpl();
    }
}
