"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../../utils/utils");
Page({
    data: {
        hasTips: false,
        hasDaysClock: false,
        id: "",
        item: {},
        clockDate: "",
        clockTime: ""
    },
    init: function () {
        this.setData({
            hasTips: false,
            hasDaysClock: false,
            clockDate: "",
            clockTime: ""
        });
    },
    onLoad: function (_options) {
        this.init();
        this.setData({
            id: _options.id
        });
        var item = JSON.parse(_options.itemJson);
        if (!!item) {
            this.setData({
                item: item,
                hasDaysClock: item.hasDaysClock,
                clockDate: item.clockDate,
                clockTime: item.clockTime
            });
            var date = new Date();
            if (item.id == 1) {
                if (!(date.getHours() >= 6 && date.getHours() < 9)) {
                    this.setData({
                        hasTips: true
                    });
                }
            }
            if (item.id == 2) {
                if (!(date.getHours() >= 20 && date.getHours() < 23)) {
                    this.setData({
                        hasTips: true
                    });
                }
            }
        }
    },
    onShow: function () {
    },
    onClickClockModal: function () {
        var that = this;
        wx.showModal({
            title: '打卡提示',
            content: '是否确定打卡！',
            success: function (res) {
                if (res.confirm) {
                    that.onClickClock();
                }
                else if (res.cancel) {
                }
            }
        });
    },
    onClickClock: function () {
        try {
            var targetDetailsListData = wx.getStorageSync('TARGET_DETAILS_LIST_DATA');
            if (targetDetailsListData) {
                var date = new Date();
                this.data.clockDate = utils_1.Utils.getSystemDate("date", date);
                this.data.clockTime = utils_1.Utils.getSystemDate("time", date);
                this.setData({
                    clockDate: this.data.clockDate,
                    clockTime: this.data.clockTime,
                    hasDaysClock: true
                });
                var id = this.data.id;
                if (!!id) {
                    if (targetDetailsListData[id] != null && targetDetailsListData[id].length > 0) {
                        targetDetailsListData[id].push({
                            date: this.data.clockDate,
                            time: this.data.clockTime
                        });
                    }
                    else {
                        targetDetailsListData[id] = [{
                                date: this.data.clockDate,
                                time: this.data.clockTime
                            }];
                    }
                    wx.setStorageSync('TARGET_DETAILS_LIST_DATA', targetDetailsListData);
                }
            }
        }
        catch (e) {
            wx.showToast({
                title: '打卡失败，请稍后再试！',
                icon: 'none',
                duration: 1500
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjbG9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUF5QztBQUV6QyxJQUFJLENBQUM7SUFFSCxJQUFJLEVBQUU7UUFDSixPQUFPLEVBQUUsS0FBSztRQUNkLFlBQVksRUFBRSxLQUFLO1FBQ25CLEVBQUUsRUFBRSxFQUFFO1FBQ04sSUFBSSxFQUFFLEVBQUU7UUFDUixTQUFTLEVBQUUsRUFBRTtRQUNiLFNBQVMsRUFBRSxFQUFFO0tBQ2Q7SUFFRCxJQUFJO1FBQ0YsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLE9BQU8sRUFBRSxLQUFLO1lBQ2QsWUFBWSxFQUFFLEtBQUs7WUFDbkIsU0FBUyxFQUFFLEVBQUU7WUFDYixTQUFTLEVBQUUsRUFBRTtTQUNkLENBQUMsQ0FBQztJQUNMLENBQUM7SUFLRCxNQUFNLFlBQUMsUUFBYTtRQUNsQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDWixJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osRUFBRSxFQUFFLFFBQVEsQ0FBQyxFQUFFO1NBQ2hCLENBQUMsQ0FBQztRQUNILElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRTtZQUNWLElBQUksQ0FBQyxPQUFRLENBQUM7Z0JBQ1osSUFBSSxFQUFFLElBQUk7Z0JBQ1YsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZO2dCQUMvQixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7Z0JBQ3pCLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUzthQUMxQixDQUFDLENBQUM7WUFDSCxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1lBRXRCLElBQUksSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVB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QUVGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFV0aWxzIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3V0aWxzXCJcclxuXHJcblBhZ2Uoe1xyXG5cclxuICBkYXRhOiB7XHJcbiAgICBoYXNUaXBzOiBmYWxzZSxcclxuICAgIGhhc0RheXNDbG9jazogZmFsc2UsXHJcbiAgICBpZDogXCJcIixcclxuICAgIGl0ZW06IHt9LFxyXG4gICAgY2xvY2tEYXRlOiBcIlwiLFxyXG4gICAgY2xvY2tUaW1lOiBcIlwiXHJcbiAgfSxcclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICBoYXNUaXBzOiBmYWxzZSxcclxuICAgICAgaGFzRGF5c0Nsb2NrOiBmYWxzZSxcclxuICAgICAgY2xvY2tEYXRlOiBcIlwiLFxyXG4gICAgICBjbG9ja1RpbWU6IFwiXCJcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yqg6L29XHJcbiAgICovXHJcbiAgb25Mb2FkKF9vcHRpb25zOiBhbnkpIHtcclxuICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgIGlkOiBfb3B0aW9ucy5pZFxyXG4gICAgfSk7XHJcbiAgICBsZXQgaXRlbSA9IEpTT04ucGFyc2UoX29wdGlvbnMuaXRlbUpzb24pO1xyXG4gICAgaWYgKCEhaXRlbSkge1xyXG4gICAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgICBpdGVtOiBpdGVtLFxyXG4gICAgICAgIGhhc0RheXNDbG9jazogaXRlbS5oYXNEYXlzQ2xvY2ssXHJcbiAgICAgICAgY2xvY2tEYXRlOiBpdGVtLmNsb2NrRGF0ZSxcclxuICAgICAgICBjbG9ja1RpbWU6IGl0ZW0uY2xvY2tUaW1lXHJcbiAgICAgIH0pO1xyXG4gICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgIC8vIOaXqei1t1xyXG4gICAgICBpZiAoaXRlbS5pZCA9PSAxKSB7XHJcbiAgICAgICAgaWYgKCEoZGF0ZS5nZXRIb3VycygpID49IDYgJiYgZGF0ZS5nZXRIb3VycygpIDwgOSkpIHtcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICAgICAgICBoYXNUaXBzOiB0cnVlXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLy8g5pep552hXHJcbiAgICAgIGlmIChpdGVtLmlkID09IDIpIHtcclxuICAgICAgICBpZiAoIShkYXRlLmdldEhvdXJzKCkgPj0gMjAgJiYgZGF0ZS5nZXRIb3VycygpIDwgMjMpKSB7XHJcbiAgICAgICAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgICAgICAgaGFzVGlwczogdHJ1ZVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLmmL7npLpcclxuICAgKi9cclxuICBvblNob3coKSB7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOaJk+WNoeaPkOekulxyXG4gICAqL1xyXG4gIG9uQ2xpY2tDbG9ja01vZGFsKCkge1xyXG4gICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgd3guc2hvd01vZGFsKHtcclxuICAgICAgdGl0bGU6ICfmiZPljaHmj5DnpLonLFxyXG4gICAgICBjb250ZW50OiAn5piv5ZCm56Gu5a6a5omT5Y2h77yBJyxcclxuICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcclxuICAgICAgICAgIHRoYXQub25DbGlja0Nsb2NrKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChyZXMuY2FuY2VsKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIG9uQ2xpY2tDbG9jaygpIHtcclxuICAgIC8vIOiOt+WPluacrOWcsOe8k+WtmOWkh+W/mOW9leWIl+ihqOaVsOaNrlxyXG4gICAgdHJ5IHtcclxuICAgICAgbGV0IHRhcmdldERldGFpbHNMaXN0RGF0YSA9IHd4LmdldFN0b3JhZ2VTeW5jKCdUQVJHRVRfREVUQUlMU19MSVNUX0RBVEEnKTtcclxuICAgICAgaWYgKHRhcmdldERldGFpbHNMaXN0RGF0YSkge1xyXG4gICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgICB0aGlzLmRhdGEuY2xvY2tEYXRlID0gVXRpbHMuZ2V0U3lzdGVtRGF0ZShcImRhdGVcIiwgZGF0ZSk7XHJcbiAgICAgICAgdGhpcy5kYXRhLmNsb2NrVGltZSA9IFV0aWxzLmdldFN5c3RlbURhdGUoXCJ0aW1lXCIsIGRhdGUpO1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICAgICAgY2xvY2tEYXRlOiB0aGlzLmRhdGEuY2xvY2tEYXRlLFxyXG4gICAgICAgICAgY2xvY2tUaW1lOiB0aGlzLmRhdGEuY2xvY2tUaW1lLFxyXG4gICAgICAgICAgaGFzRGF5c0Nsb2NrOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGV0IGlkID0gdGhpcy5kYXRhLmlkO1xyXG4gICAgICAgIGlmICghIWlkKSB7XHJcbiAgICAgICAgICBpZiAodGFyZ2V0RGV0YWlsc0xpc3REYXRhW2lkXSAhPSBudWxsICYmIHRhcmdldERldGFpbHNMaXN0RGF0YVtpZF0ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0YXJnZXREZXRhaWxzTGlzdERhdGFbaWRdLnB1c2goe1xyXG4gICAgICAgICAgICAgIGRhdGU6IHRoaXMuZGF0YS5jbG9ja0RhdGUsXHJcbiAgICAgICAgICAgICAgdGltZTogdGhpcy5kYXRhLmNsb2NrVGltZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGFyZ2V0RGV0YWlsc0xpc3REYXRhW2lkXSA9IFt7XHJcbiAgICAgICAgICAgICAgZGF0ZTogdGhpcy5kYXRhLmNsb2NrRGF0ZSxcclxuICAgICAgICAgICAgICB0aW1lOiB0aGlzLmRhdGEuY2xvY2tUaW1lXHJcbiAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygnVEFSR0VUX0RFVEFJTFNfTElTVF9EQVRBJywgdGFyZ2V0RGV0YWlsc0xpc3REYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICB0aXRsZTogJ+aJk+WNoeWksei0pe+8jOivt+eojeWQjuWGjeivle+8gScsXHJcbiAgICAgICAgaWNvbjogJ25vbmUnLFxyXG4gICAgICAgIGR1cmF0aW9uOiAxNTAwXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgfVxyXG5cclxufSlcclxuIl19