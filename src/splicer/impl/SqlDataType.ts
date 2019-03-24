/**
 *
 * 功能描述:
 *
 * @className SqlDataType
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/3/19 11:36
 */
import {DefaultDataType} from "./DefaultDataType";

export class SqlDataType {
    public static readonly VARCHAR = new DefaultDataType<string>(String, "varchar");
    public static readonly CHAR = new DefaultDataType<string>(String, "char");
    public static readonly LONGVARCHAR = new DefaultDataType<string>(String, "longvarchar");
    public static readonly CLOB = new DefaultDataType<Buffer>(Buffer, "clob");
    public static readonly NVARCHAR = new DefaultDataType<string>(String, "nvarchar");
    public static readonly NCHAR = new DefaultDataType<string>(String, "nchar");
    public static readonly LONGNVARCHAR = new DefaultDataType<string>(String, "longnvarchar");
    public static readonly NCLOB = new DefaultDataType<Buffer>(Buffer, "nclob");
    public static readonly BOOLEAN = new DefaultDataType<boolean>(Boolean, "boolean");
    public static readonly BIT = new DefaultDataType<boolean>(Boolean, "bit");
    public static readonly TINYINT = new DefaultDataType<number>(Number, "tinyint");
    public static readonly SMALLINT = new DefaultDataType<number>(Number, "smallint");
    public static readonly INTEGER = new DefaultDataType<number>(Number, "int");
    public static readonly BIGINT = new DefaultDataType<number>(Number, "bigint");
    public static readonly DECIMAL_INTEGER = new DefaultDataType<number>(Number, "decimal_integer");
    public static readonly TINYINTUNSIGNED = new DefaultDataType<number>(Number, "tinyint unsigned");
    public static readonly SMALLINTUNSIGNED = new DefaultDataType<number>(Number, "smallint unsigned");
    public static readonly INTEGERUNSIGNED = new DefaultDataType<number>(Number, "integer unsigned");
    public static readonly BIGINTUNSIGNED = new DefaultDataType<number>(Number, "bigint unsigned");
    public static readonly DOUBLE = new DefaultDataType<number>(Number, "double");
    public static readonly FLOAT = new DefaultDataType<number>(Number, "float");
    public static readonly REAL = new DefaultDataType<number>(Number, "real");
    public static readonly NUMERIC = new DefaultDataType<number>(Number, "numeric");
    public static readonly DECIMAL = new DefaultDataType<number>(Number, "decimal");
    public static readonly DATE = new DefaultDataType<Date>(Date, "date");
    public static readonly DATETIME = new DefaultDataType<Date>(Date, "datetime");
    public static readonly TIMESTAMP = new DefaultDataType<Date>(Date, "timestamp");
    public static readonly TIME = new DefaultDataType<Date>(Date, "time");
    public static readonly BINARY = new DefaultDataType<Buffer>(Buffer, "binary");
    public static readonly VARBINARY = new DefaultDataType<Buffer>(Buffer, "varbinary");
    public static readonly LONGVARBINARY = new DefaultDataType<Buffer>(Buffer, "longvarbinary");
    public static readonly BLOB = new DefaultDataType<Buffer>(Buffer, "blob");
    public static readonly OTHER = new DefaultDataType<any>(Object, "other");
    public static readonly RESULT = new DefaultDataType<any>(Object, "result");
}
