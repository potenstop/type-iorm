/**
 *
 * 功能描述:
 *
 * @className IUpdateSetMoreStep
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/4/7 19:51
 */
import {IUpdateSetStep} from "./IUpdateSetStep";
import {IUpdateWhereStep} from "./IUpdateWhereStep";
import {IRecord} from "./IRecord";

export interface IUpdateSetMoreStep<R extends IRecord> extends IUpdateSetStep<R>, IUpdateWhereStep<R> {

}
