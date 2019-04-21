/**
 *
 * 功能描述:
 *
 * @className ITableOptionalOnStep
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/4/21 10:59
 */
import {IRecord} from "./IRecord";
import {ITable} from "./ITable";
import {ITableOnStep} from "./ITableOnStep";

export interface ITableOptionalOnStep<R extends IRecord> extends ITableOnStep<R>, ITable<R>  {

}
