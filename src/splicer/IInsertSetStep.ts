/**
 *
 * 功能描述:
 *
 * @className IInsertSetStep
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/21 13:31
 */
import {IField} from "./IField";
import {IInsertValuesStep} from "./IInsertValuesStep";

export interface IInsertSetStep<T> {
    columns(...field: Array<IField<any>>): IInsertValuesStep<T>;
}
