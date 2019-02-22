export class Utils {

  /**
   * 判断值是否为空
   * @param obj
   * @returns {boolean}
   */
  public static isPresent(obj: any) {
    return obj !== undefined && obj !== null;
  }

  /**
   * 将值转变成布尔类型
   * @param value
   * @returns {boolean}
   */
  public static toBoolean(value: any): boolean {
    switch (value) {
      case "":
        return true;
      case "false":
      case "0":
        return false;
      default:
        return !!value;
    }
  }

  /**
   * 判断对象是否为日期对象
   * @param value
   * @returns {boolean}
   */
  public static isDate(value: any) {
    return Object.prototype.toString.call(value) === "[object Date]";
  }

  /**
   * 判断是否为对象
   * @param value
   * @returns {boolean}
   */
  public static isObject(value: any) {
    return Object.prototype.toString.call(value) === "[object Object]";
  }

  /**
   * 判断是否为数组
   * @param value
   * @returns {boolean}
   */
  public static isArray(value: any) {
    return Object.prototype.toString.call(value) === "[object Array]";
  }

  /**
   * 判断是否为字符串
   * @param value
   * @returns {boolean}
   */
  public static isString(value: any) {
    return Object.prototype.toString.call(value) === "[object String]";
  }

  /**
   * 判断是否为数字
   * @param value
   * @returns {boolean}
   */
  public static isNumber(value: any) {
    return Object.prototype.toString.call(value) === "[object Number]";
  }

  /**
   * 判断是否为空值
   * @param value 值
   * @param allowEmptyString 是否允许空字符串，默认 false
   * @returns {boolean}
   */
  static isEmpty(value: any, allowEmptyString = false) {
    return (value === null) || (value === undefined) ||
      (!allowEmptyString ? value === "" : false) || (Utils.isArray(value) && value.length === 0);
  }

  /**
   * 获取当前系统时间
   */
  public static getSystemDate(type: "date" | "time" | "timeHM" | "datetime" = "date", date?: any) {
    date = date ? date : new Date();
    return Utils.formatTime(date, type);
  }

  /**
   * 判断两个日期大小
   * @param date1 
   * @param date2 
   */
  public static isDateSize(date1: any, date2: any) {
    if (!Utils.isNumber(date1)) {
      if (Utils.isDate(date1)) {
        date1 = Date.parse(date1);
      } else if (Utils.isString(date1)) {
        let newDate: any = new Date(date1);
        date1 = Date.parse(newDate);
      }
    }
    if (!Utils.isNumber(date2)) {
      if (Utils.isDate(date2)) {
        date2 = Date.parse(date2);
      } else if (Utils.isString(date2)) {
        let newDate: any = new Date(date2);
        date2 = Date.parse(newDate);
      }
    }
    return (date1 > date2) ? 1 : (date1 < date2) ? -1 : 0;
  }

  /**
   * 格式化日期
   */
  public static formatTime(date: Date, type: "date" | "time" | "timeHM" | "datetime" = "date", dateSignTemp?: string, timeSignTemp?: string) {
    const dateSign = dateSignTemp ? dateSignTemp : "/"
    const timeSign = timeSignTemp ? timeSignTemp : ":"
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()
    let dateFormat = "";
    if (type == "date") {
      dateFormat = [year, month, day].map(Utils.formatNumber).join(dateSign);
    } else if (type == "time") {
      dateFormat = [hour, minute, second].map(Utils.formatNumber).join(timeSign);
    } else if (type == 'timeHM') {
      dateFormat = [hour, minute].map(Utils.formatNumber).join(timeSign);
    } else if (type == "datetime") {
      dateFormat = [year, month, day].map(Utils.formatNumber).join(dateSign) + " " + [hour, minute, second].map(Utils.formatNumber).join(timeSign);
    }
    return dateFormat;
  }

  /**
   * 格式化成两位数的数字
   */
  public static formatNumber = (n: number) => {
    const str = n.toString()
    return str[1] ? str : '0' + str
  }

}
