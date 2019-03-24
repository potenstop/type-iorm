/**
 *
 * 功能描述:
 *
 * @className IConverter
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/23 21:02
 */
export interface IConverter<T, U> {
    /**
     * Convert a database object to a user object
     *
     * @param databaseObject The database object
     * @return The user object
     */
    from(databaseObject: T): U;

    /**
     * Convert a user object to a database object
     *
     * @param userObject The user object
     * @return The database object
     */
    to(userObject: U): T;

    /**
     * The database type
     */
    fromType(): Class<T>;

    /**
     * The user type
     */
    toType(): Class<U>;

    /**
     * Inverse this converter.
     */
    inverse(): IConverter<U, T>;

}
