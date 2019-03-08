/**
 *
 * 功能描述:
 *
 * @className SqlBuilderError
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/7 16:58
 */
export class SqlBuilderError extends Error {
    public bid: string;
    public mid: string;
    public sql: string;
    constructor(message) {
        super(message);
    }
}
