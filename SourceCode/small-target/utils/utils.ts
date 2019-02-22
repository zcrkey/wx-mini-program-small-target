export class Utils {

  /**
   * 获取当前系统时间
   */
  public static getSystemDate(type: "date" | "time" | "timeHM" | "datetime" = "date", date?: any) {
    date = date ? date : new Date();
    return Utils.formatTime(date, type);
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
