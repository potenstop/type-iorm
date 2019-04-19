/**
 *
 * 功能描述:
 *
 * @className FieldCondition
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/4/19 17:09
 */
import {AbstractCondition} from "./AbstractCondition";
import {IContext} from "../IContext";
import {IField} from "../IField";

export class FieldCondition extends AbstractCondition {
    private field: IField<boolean>;
    constructor(field: IField<boolean>) {
        super();
        this.field = field;
    }

    public accept(ctx: IContext): void {
        ctx.visitSql(this.field);
    }

}
