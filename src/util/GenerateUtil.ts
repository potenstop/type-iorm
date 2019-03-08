/**
 *
 * 功能描述: 生成工具类
 *
 * @className GenerateUtil
 * @projectName papio
 * @author yanshaowen
 * @date 2019/1/11 12:45
 */
import * as crypto from "crypto";
export class GenerateUtil {
    // 生成随机id
    public static getRandomId(): string {
        return new Date().getTime() + "-" + GenerateUtil.uuid(16, 20);
    }
    // 生成 MD5
    public static getMd5(str: string): string {
        const md5 = crypto.createHash("md5");
        md5.update(str);
        return md5.digest("hex");
    }

    public static uuid(len, radix): string {
        const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
        const uuid = [];
        let i;
        radix = radix || chars.length;

        if (len) {
            // Compact form
            for (i = 0; i < len; i++) { uuid[i] = chars[0 | Math.random() * radix]; }
        } else {
            // rfc4122, version 4 form
            let r;

            // rfc4122 requires these characters
            uuid[8] = uuid[13] = uuid[18] = uuid[23] = "-";
            uuid[14] = "4";

            // Fill in random data. At i==19 set the high bits of clock sequence as
            // per rfc4122, sec. 4.1.5
            for (i = 0; i < 36; i++) {
                if (!uuid[i]) {
                    r = 0 | Math.random() * 16;
                    uuid[i] = chars[(i === 19) ? (r & 0x3) | 0x8 : r];
                }
            }
        }

        return uuid.join("");
    }
}
