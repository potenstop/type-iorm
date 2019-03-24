/**
 *
 * 功能描述:
 *
 * @className DateUtil
 * @projectName type-iorm
 * @author yanshaowen
 * @date 2019/2/22 17:25
 */
import {StringUtil} from "./StringUtil";
import {DatePatternsEnum} from "../enum/DatePatternsEnum";
import {DateWeekEnum} from "../enum/DateWeekEnum";

export class DateUtil {
    /**
     * 方法功能描述: 对比time1 比time2时间的大小  大于1 等于0 小于 -1
     * @author yanshaowen
     * @date 2019/2/23 10:48
     * @param time1
     * @param time2
     * @return
     */
    public static compareTime(time1: string, time2: string) {
        if (Date.parse(time1.replace(/-/g, "/")) > Date.parse(time2.replace(/-/g, "/"))) {
            return 1;
        } else if (Date.parse(time1.replace(/-/g, "/")) < Date.parse(time2.replace(/-/g, "/"))) {
            return -1;
        } else if (Date.parse(time1.replace(/-/g, "/")) === Date.parse(time2.replace(/-/g, "/"))) {
            return 0;
        }
    }
    /**
     * 方法功能描述: 是否闰年
     * @author yanshaowen
     * @date 2019/2/23 10:47
     * @param year
     * @return
     */
    public static isLeapYear(year: number) {
        return((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0);
    }
    /**
     * 方法功能描述: 获取某个月的天数，从0开始
     * @author yanshaowen
     * @date 2019/2/23 10:45
     * @param year  年
     * @param month 月
     * @return
     */
    public static getDaysOfMonth(year: number, month: number) {
        return [31, (this.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
    }
    /**
     * 方法功能描述: 距离现在几天的日期：负数表示今天之前的日期，0表示今天，整数表示未来的日期
     * 如-1表示昨天的日期，0表示今天，2表示后天
     * @author yanshaowen
     * @date 2019/2/23 10:41
     * @param days  天数
     * @return      Date对象
     */
    public static fromToday(days: number): Date {
        const today = new Date();
        today.setDate(today.getDate() + days);
        return today;
    }
    /**
     * 方法功能描述:
     * @author yanshaowen
     * @date 2019/2/23 10:40
     * @param date  需要格式化的日期对象
     * @param pattern 格式化的模式，如yyyy-MM-dd hh(HH):mm:ss.S a k K E D F w W z Z
     * @return 格式化后的时间
     */
    public static format(date: Date, pattern: string): string {
        if (StringUtil.isBank(pattern)) {
            return date.toLocaleString();
        }

        return pattern.replace(/([a-z])\1*/ig, (matchStr: string, group1: string) => {
            let replacement = "";
            let month = 0;
            let days = 0;
            let hour = 0;
            let minute = 0;
            let second = 0;
            let milliSecond = 0;
            switch (group1) {
                case DatePatternsEnum.PATTERN_ERA: // G
                    break;
                case DatePatternsEnum.PATTERN_WEEK_YEAR: // Y
                case DatePatternsEnum.PATTERN_YEAR: // y
                    replacement = date.getFullYear() + "";
                    break;
                case DatePatternsEnum.PATTERN_MONTH: // M
                    month = date.getMonth() + 1;
                    replacement = (month < 10 && matchStr.length >= 2) ? "0" + month : month + "";
                    break;
                case DatePatternsEnum.PATTERN_DAY_OF_MONTH: // d
                    days = date.getDate();
                    replacement = (days < 10 && matchStr.length >= 2) ? "0" + days : days + "";
                    break;
                case DatePatternsEnum.PATTERN_HOUR_OF_DAY1: // k(1~24)
                    hour = date.getHours();
                    replacement = hour + "";
                    break;
                case DatePatternsEnum.PATTERN_HOUR_OF_DAY0: // H(0~23)
                    hour = date.getHours();
                    replacement = (hour < 10 && matchStr.length >= 2) ? "0" + hour : hour + "";
                    break;
                case DatePatternsEnum.PATTERN_MINUTE: // m
                    minute = date.getMinutes();
                    replacement = (minute < 10 && matchStr.length >= 2) ? "0" + minute : minute + "";
                    break;
                case DatePatternsEnum.PATTERN_SECOND: // s
                    second = date.getSeconds();
                    replacement = (second < 10 && matchStr.length >= 2) ? "0" + second : second + "";
                    break;
                case DatePatternsEnum.PATTERN_MILLISECOND: // S
                    milliSecond = date.getMilliseconds();
                    replacement = milliSecond + "";
                    break;
                case DatePatternsEnum.PATTERN_DAY_OF_WEEK: // E
                    days = date.getDay();
                    replacement = DateWeekEnum[days];
                    break;
                case DatePatternsEnum.PATTERN_DAY_OF_YEAR: // D
                    replacement = DateUtil.dayOfTheYear(date) + "";
                    break;
                case DatePatternsEnum.PATTERN_DAY_OF_WEEK_IN_MONTH: // F
                    days = date.getDate();
                    replacement = Math.floor(days / 7) + "";
                    break;
                case DatePatternsEnum.PATTERN_WEEK_OF_YEAR: // w
                    days = DateUtil.dayOfTheYear(date);
                    replacement = Math.ceil(days / 7) + "";
                    break;
                case DatePatternsEnum.PATTERN_WEEK_OF_MONTH: // W
                    days = date.getDate();
                    replacement = Math.ceil(days / 7) + "";
                    break;
                case DatePatternsEnum.PATTERN_AM_PM: // a
                    hour = date.getHours();
                    replacement = hour < 12 ? "am" : "pm";
                    break;
                case DatePatternsEnum.PATTERN_HOUR1: // h(1~12)
                    hour = date.getHours() % 12 || 12; // 0转为12
                    replacement = (hour < 10 && matchStr.length >= 2) ? "0" + hour : hour + "";
                    break;
                case DatePatternsEnum.PATTERN_HOUR0: // K(0~11)
                    hour = date.getHours() % 12;
                    replacement = hour + "";
                    break;
                case DatePatternsEnum.PATTERN_ZONE_NAME: // z
                    replacement = DateUtil.getZoneNameValue(date).name;
                    break;
                case DatePatternsEnum.PATTERN_ZONE_VALUE: // Z
                    replacement = DateUtil.getZoneNameValue(date).value;
                    break;
                case DatePatternsEnum.PATTERN_ISO_DAY_OF_WEEK: // u
                    break;
                case DatePatternsEnum.PATTERN_ISO_ZONE: // X
                    break;
                default:
                    break;
            }
            return replacement;
        });
    }
    /**
     * 方法功能描述: 计算一个日期是当年的第几天
     * @author yanshaowen
     * @date 2019/2/23 10:03
     * @param date
     * @return
     */
    public static dayOfTheYear(date) {
        const obj = new Date(date);
        const year = obj.getFullYear();
        const month = obj.getMonth(); // 从0开始
        let days = obj.getDate();
        const daysArr = [31, (this.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        for (let i = 0; i < month; i++) {
            days += daysArr[i];
        }
        return days;
    }
    /**
     * 方法功能描述: 获得时区名和值
     * @author yanshaowen
     * @date 2019/2/23 10:50
     * @param date
     * @return
     */
    public static getZoneNameValue(date: Date) {
        date = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
        const arr = date.toString().match(/([A-Z]+)([-+]\d+:?\d+)/);
        return {
            name: arr[1],
            value: arr[2],
        };
    }
}
