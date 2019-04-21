/**
 *
 * 功能描述:
 *
 * @className JoinTypes
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/4/20 22:15
 */
import {JoinType} from "./JoinType";

export class JoinTypes {
    public readonly JOIN = new JoinType("join", true);
    public readonly CROSS_JOIN = new JoinType("cross join", true);
    public readonly LEFT_OUTER_JOIN = new JoinType("left outer join", true);
    public readonly RIGHT_OUTER_JOIN = new JoinType("right outer join", true);
    public readonly FULL_OUTER_JOIN = new JoinType("full outer join", true);
    public readonly NATURAL_JOIN = new JoinType("natural join", false);
    public readonly NATURAL_LEFT_OUTER_JOIN = new JoinType("natural left outer join", false);
    public readonly NATURAL_RIGHT_OUTER_JOIN = new JoinType("natural right outer join", false);
    public readonly CROSS_APPLY = new JoinType("cross apply", false);
    public readonly OUTER_APPLY = new JoinType("outer apply", false);
    public readonly STRAIGHT_JOIN = new JoinType("straight_join", true);
    public readonly LEFT_SEMI_JOIN = new JoinType("left semi join", true);
    public readonly LEFT_ANTI_JOIN = new JoinType("left anti join", true);
}
