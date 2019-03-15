/**
 *
 * 功能描述: 查询父级接口
 *
 * @className QueryPart
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/11 17:23
 */
export interface IQueryPart {
    toString(): string;
    equals(value: any): boolean;
    hashCode(): number;
}
