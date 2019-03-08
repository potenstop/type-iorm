/**
 *
 * 功能描述: module 实体定义
 *
 * @className Entity
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/6 14:41
 */
import "reflect-metadata";
import {MetaConstant} from "../../constants/MetaConstant";
export function Entity(name: string): CallableFunction {
    return (target: (new () => object)) => {
        Reflect.defineMetadata(MetaConstant.ENTITY, name, target);
    };
}
