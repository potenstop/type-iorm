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
import {IRecord} from "./IRecord";

export interface IInsertSetStep<R extends IRecord> {
    columns(...field: Array<IField<any>>): IInsertValuesStep<R>;
}
