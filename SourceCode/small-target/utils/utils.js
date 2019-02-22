"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utils = (function () {
    function Utils() {
    }
    Utils.isPresent = function (obj) {
        return obj !== undefined && obj !== null;
    };
    Utils.toBoolean = function (value) {
        switch (value) {
            case "":
                return true;
            case "false":
            case "0":
                return false;
            default:
                return !!value;
        }
    };
    Utils.isDate = function (value) {
        return Object.prototype.toString.call(value) === "[object Date]";
    };
    Utils.isObject = function (value) {
        return Object.prototype.toString.call(value) === "[object Object]";
    };
    Utils.isArray = function (value) {
        return Object.prototype.toString.call(value) === "[object Array]";
    };
    Utils.isString = function (value) {
        return Object.prototype.toString.call(value) === "[object String]";
    };
    Utils.isNumber = function (value) {
        return Object.prototype.toString.call(value) === "[object Number]";
    };
    Utils.isEmpty = function (value, allowEmptyString) {
        if (allowEmptyString === void 0) { allowEmptyString = false; }
        return (value === null) || (value === undefined) ||
            (!allowEmptyString ? value === "" : false) || (Utils.isArray(value) && value.length === 0);
    };
    Utils.getSystemDate = function (type, date) {
        if (type === void 0) { type = "date"; }
        date = date ? date : new Date();
        return Utils.formatTime(date, type);
    };
    Utils.isDateSize = function (date1, date2) {
        if (!Utils.isNumber(date1)) {
            if (Utils.isDate(date1)) {
                date1 = Date.parse(date1);
            }
            else if (Utils.isString(date1)) {
                var newDate = new Date(date1);
                date1 = Date.parse(newDate);
            }
        }
        if (!Utils.isNumber(date2)) {
            if (Utils.isDate(date2)) {
                date2 = Date.parse(date2);
            }
            else if (Utils.isString(date2)) {
                var newDate = new Date(date2);
                date2 = Date.parse(newDate);
            }
        }
        return (date1 > date2) ? 1 : (date1 < date2) ? -1 : 0;
    };
    Utils.formatTime = function (date, type, dateSignTemp, timeSignTemp) {
        if (type === void 0) { type = "date"; }
        var dateSign = dateSignTemp ? dateSignTemp : "/";
        var timeSign = timeSignTemp ? timeSignTemp : ":";
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var hour = date.getHours();
        var minute = date.getMinutes();
        var second = date.getSeconds();
        var dateFormat = "";
        if (type == "date") {
            dateFormat = [year, month, day].map(Utils.formatNumber).join(dateSign);
        }
        else if (type == "time") {
            dateFormat = [hour, minute, second].map(Utils.formatNumber).join(timeSign);
        }
        else if (type == 'timeHM') {
            dateFormat = [hour, minute].map(Utils.formatNumber).join(timeSign);
        }
        else if (type == "datetime") {
            dateFormat = [year, month, day].map(Utils.formatNumber).join(dateSign) + " " + [hour, minute, second].map(Utils.formatNumber).join(timeSign);
        }
        return dateFormat;
    };
    Utils.formatNumber = function (n) {
        var str = n.toString();
        return str[1] ? str : '0' + str;
    };
    return Utils;
}());
exports.Utils = Utils;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0lBQUE7SUFzSkEsQ0FBQztJQS9JZSxlQUFTLEdBQXZCLFVBQXdCLEdBQVE7UUFDOUIsT0FBTyxHQUFHLEtBQUssU0FBUyxJQUFJLEdBQUcsS0FBSyxJQUFJLENBQUM7SUFDM0MsQ0FBQztJQU9hLGVBQVMsR0FBdkIsVUFBd0IsS0FBVTtRQUNoQyxRQUFRLEtBQUssRUFBRTtZQUNiLEtBQUssRUFBRTtnQkFDTCxPQUFPLElBQUksQ0FBQztZQUNkLEtBQUssT0FBTyxDQUFDO1lBQ2IsS0FBSyxHQUFHO2dCQUNOLE9BQU8sS0FBSyxDQUFDO1lBQ2Y7Z0JBQ0UsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDO1NBQ2xCO0lBQ0gsQ0FBQztJQU9hLFlBQU0sR0FBcEIsVUFBcUIsS0FBVTtRQUM3QixPQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxlQUFlLENBQUM7SUFDbkUsQ0FBQztJQU9hLGNBQVEsR0FBdEIsVUFBdUIsS0FBVTtRQUMvQixPQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxpQkFBaUIsQ0FBQztJQUNyRSxDQUFDO0lBT2EsYUFBTyxHQUFyQixVQUFzQixLQUFVO1FBQzlCLE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLGdCQUFnQixDQUFDO0lBQ3BFLENBQUM7SUFPYSxjQUFRLEdBQXRCLFVBQXVCLEtBQVU7UUFDL0IsT0FBTyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssaUJBQWlCLENBQUM7SUFDckUsQ0FBQztJQU9hLGNBQVEsR0FBdEIsVUFBdUIsS0FBVTtRQUMvQixPQUFPLE1B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LFVBQUMsQ0FBUztRQUNyQyxJQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUE7UUFDeEIsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQTtJQUNqQyxDQUFDLENBQUE7SUFFSCxZQUFDO0NBQUEsQUF0SkQsSUFzSkM7QUF0Slksc0JBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgVXRpbHMge1xyXG5cclxuICAvKipcclxuICAgKiDliKTmlq3lgLzmmK/lkKbkuLrnqbpcclxuICAgKiBAcGFyYW0gb2JqXHJcbiAgICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBpc1ByZXNlbnQob2JqOiBhbnkpIHtcclxuICAgIHJldHVybiBvYmogIT09IHVuZGVmaW5lZCAmJiBvYmogIT09IG51bGw7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDlsIblgLzovazlj5jmiJDluIPlsJTnsbvlnotcclxuICAgKiBAcGFyYW0gdmFsdWVcclxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIHRvQm9vbGVhbih2YWx1ZTogYW55KTogYm9vbGVhbiB7XHJcbiAgICBzd2l0Y2ggKHZhbHVlKSB7XHJcbiAgICAgIGNhc2UgXCJcIjpcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgY2FzZSBcImZhbHNlXCI6XHJcbiAgICAgIGNhc2UgXCIwXCI6XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiAhIXZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5Yik5pat5a+56LGh5piv5ZCm5Li65pel5pyf5a+56LGhXHJcbiAgICogQHBhcmFtIHZhbHVlXHJcbiAgICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBpc0RhdGUodmFsdWU6IGFueSkge1xyXG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09IFwiW29iamVjdCBEYXRlXVwiO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5Yik5pat5piv5ZCm5Li65a+56LGhXHJcbiAgICogQHBhcmFtIHZhbHVlXHJcbiAgICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBpc09iamVjdCh2YWx1ZTogYW55KSB7XHJcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gXCJbb2JqZWN0IE9iamVjdF1cIjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOWIpOaWreaYr+WQpuS4uuaVsOe7hFxyXG4gICAqIEBwYXJhbSB2YWx1ZVxyXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgaXNBcnJheSh2YWx1ZTogYW55KSB7XHJcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gXCJbb2JqZWN0IEFycmF5XVwiO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5Yik5pat5piv5ZCm5Li65a2X56ym5LiyXHJcbiAgICogQHBhcmFtIHZhbHVlXHJcbiAgICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBpc1N0cmluZyh2YWx1ZTogYW55KSB7XHJcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gXCJbb2JqZWN0IFN0cmluZ11cIjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOWIpOaWreaYr+WQpuS4uuaVsOWtl1xyXG4gICAqIEBwYXJhbSB2YWx1ZVxyXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgaXNOdW1iZXIodmFsdWU6IGFueSkge1xyXG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09IFwiW29iamVjdCBOdW1iZXJdXCI7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDliKTmlq3mmK/lkKbkuLrnqbrlgLxcclxuICAgKiBAcGFyYW0gdmFsdWUg5YC8XHJcbiAgICogQHBhcmFtIGFsbG93RW1wdHlTdHJpbmcg5piv5ZCm5YWB6K6456m65a2X56ym5Liy77yM6buY6K6kIGZhbHNlXHJcbiAgICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAgICovXHJcbiAgc3RhdGljIGlzRW1wdHkodmFsdWU6IGFueSwgYWxsb3dFbXB0eVN0cmluZyA9IGZhbHNlKSB7XHJcbiAgICByZXR1cm4gKHZhbHVlID09PSBudWxsKSB8fCAodmFsdWUgPT09IHVuZGVmaW5lZCkgfHxcclxuICAgICAgKCFhbGxvd0VtcHR5U3RyaW5nID8gdmFsdWUgPT09IFwiXCIgOiBmYWxzZSkgfHwgKFV0aWxzLmlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA9PT0gMCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDojrflj5blvZPliY3ns7vnu5/ml7bpl7RcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIGdldFN5c3RlbURhdGUodHlwZTogXCJkYXRlXCIgfCBcInRpbWVcIiB8IFwidGltZUhNXCIgfCBcImRhdGV0aW1lXCIgPSBcImRhdGVcIiwgZGF0ZT86IGFueSkge1xyXG4gICAgZGF0ZSA9IGRhdGUgPyBkYXRlIDogbmV3IERhdGUoKTtcclxuICAgIHJldHVybiBVdGlscy5mb3JtYXRUaW1lKGRhdGUsIHR5cGUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5Yik5pat5Lik5Liq5pel5pyf5aSn5bCPXHJcbiAgICogQHBhcmFtIGRhdGUxIFxyXG4gICAqIEBwYXJhbSBkYXRlMiBcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIGlzRGF0ZVNpemUoZGF0ZTE6IGFueSwgZGF0ZTI6IGFueSkge1xyXG4gICAgaWYgKCFVdGlscy5pc051bWJlcihkYXRlMSkpIHtcclxuICAgICAgaWYgKFV0aWxzLmlzRGF0ZShkYXRlMSkpIHtcclxuICAgICAgICBkYXRlMSA9IERhdGUucGFyc2UoZGF0ZTEpO1xyXG4gICAgICB9IGVsc2UgaWYgKFV0aWxzLmlzU3RyaW5nKGRhdGUxKSkge1xyXG4gICAgICAgIGxldCBuZXdEYXRlOiBhbnkgPSBuZXcgRGF0ZShkYXRlMSk7XHJcbiAgICAgICAgZGF0ZTEgPSBEYXRlLnBhcnNlKG5ld0RhdGUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoIVV0aWxzLmlzTnVtYmVyKGRhdGUyKSkge1xyXG4gICAgICBpZiAoVXRpbHMuaXNEYXRlKGRhdGUyKSkge1xyXG4gICAgICAgIGRhdGUyID0gRGF0ZS5wYXJzZShkYXRlMik7XHJcbiAgICAgIH0gZWxzZSBpZiAoVXRpbHMuaXNTdHJpbmcoZGF0ZTIpKSB7XHJcbiAgICAgICAgbGV0IG5ld0RhdGU6IGFueSA9IG5ldyBEYXRlKGRhdGUyKTtcclxuICAgICAgICBkYXRlMiA9IERhdGUucGFyc2UobmV3RGF0ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAoZGF0ZTEgPiBkYXRlMikgPyAxIDogKGRhdGUxIDwgZGF0ZTIpID8gLTEgOiAwO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5qC85byP5YyW5pel5pyfXHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBmb3JtYXRUaW1lKGRhdGU6IERhdGUsIHR5cGU6IFwiZGF0ZVwiIHwgXCJ0aW1lXCIgfCBcInRpbWVITVwiIHwgXCJkYXRldGltZVwiID0gXCJkYXRlXCIsIGRhdGVTaWduVGVtcD86IHN0cmluZywgdGltZVNpZ25UZW1wPzogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBkYXRlU2lnbiA9IGRhdGVTaWduVGVtcCA/IGRhdGVTaWduVGVtcCA6IFwiL1wiXHJcbiAgICBjb25zdCB0aW1lU2lnbiA9IHRpbWVTaWduVGVtcCA/IHRpbWVTaWduVGVtcCA6IFwiOlwiXHJcbiAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpXHJcbiAgICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDFcclxuICAgIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpXHJcbiAgICBjb25zdCBob3VyID0gZGF0ZS5nZXRIb3VycygpXHJcbiAgICBjb25zdCBtaW51dGUgPSBkYXRlLmdldE1pbnV0ZXMoKVxyXG4gICAgY29uc3Qgc2Vjb25kID0gZGF0ZS5nZXRTZWNvbmRzKClcclxuICAgIGxldCBkYXRlRm9ybWF0ID0gXCJcIjtcclxuICAgIGlmICh0eXBlID09IFwiZGF0ZVwiKSB7XHJcbiAgICAgIGRhdGVGb3JtYXQgPSBbeWVhciwgbW9udGgsIGRheV0ubWFwKFV0aWxzLmZvcm1hdE51bWJlcikuam9pbihkYXRlU2lnbik7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT0gXCJ0aW1lXCIpIHtcclxuICAgICAgZGF0ZUZvcm1hdCA9IFtob3VyLCBtaW51dGUsIHNlY29uZF0ubWFwKFV0aWxzLmZvcm1hdE51bWJlcikuam9pbih0aW1lU2lnbik7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT0gJ3RpbWVITScpIHtcclxuICAgICAgZGF0ZUZvcm1hdCA9IFtob3VyLCBtaW51dGVdLm1hcChVdGlscy5mb3JtYXROdW1iZXIpLmpvaW4odGltZVNpZ24pO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09IFwiZGF0ZXRpbWVcIikge1xyXG4gICAgICBkYXRlRm9ybWF0ID0gW3llYXIsIG1vbnRoLCBkYXldLm1hcChVdGlscy5mb3JtYXROdW1iZXIpLmpvaW4oZGF0ZVNpZ24pICsgXCIgXCIgKyBbaG91ciwgbWludXRlLCBzZWNvbmRdLm1hcChVdGlscy5mb3JtYXROdW1iZXIpLmpvaW4odGltZVNpZ24pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRhdGVGb3JtYXQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDmoLzlvI/ljJbmiJDkuKTkvY3mlbDnmoTmlbDlrZdcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIGZvcm1hdE51bWJlciA9IChuOiBudW1iZXIpID0+IHtcclxuICAgIGNvbnN0IHN0ciA9IG4udG9TdHJpbmcoKVxyXG4gICAgcmV0dXJuIHN0clsxXSA/IHN0ciA6ICcwJyArIHN0clxyXG4gIH1cclxuXHJcbn1cclxuIl19