"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var target_init_1 = require("../home/target-init");
var target_init_2 = require("../home/target-init");
var app = getApp();
Page({
    data: {
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
    },
    onLoad: function () {
        var _this = this;
        if (app.globalData.userInfo) {
            this.setData({
                userInfo: app.globalData.userInfo,
                hasUserInfo: true,
            });
        }
        else if (this.data.canIUse) {
            app.userInfoReadyCallback = function (res) {
                if (res) {
                    _this.setData({
                        userInfo: res,
                        hasUserInfo: true
                    });
                }
            };
        }
        else {
            wx.getUserInfo({
                success: function (res) {
                    if (res.userInfo) {
                        app.globalData.userInfo = res.userInfo;
                        _this.setData({
                            userInfo: res.userInfo,
                            hasUserInfo: true
                        });
                    }
                }
            });
        }
    },
    getUserInfo: function (e) {
        if (e.detail.userInfo) {
            app.globalData.userInfo = e.detail.userInfo;
            this.setData({
                userInfo: e.detail.userInfo,
                hasUserInfo: true
            });
        }
    },
    onClickClearModal: function () {
        var that = this;
        wx.showModal({
            title: '清理提示',
            content: '是否确定清理所有打卡记录！',
            success: function (res) {
                if (res.confirm) {
                    that.onClickClear();
                }
                else if (res.cancel) {
                }
            }
        });
    },
    onClickClear: function () {
        try {
            wx.setStorageSync('TARGET_LIST_DATA', target_init_1.TARGET_LIST_DATA);
            wx.setStorageSync('TARGET_DETAILS_LIST_DATA', target_init_2.TARGET_DETAILS_LIST_DATA);
            wx.showToast({
                title: '清理成功',
                icon: 'success',
                duration: 1000
            });
        }
        catch (e) { }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxtREFBdUQ7QUFDdkQsbURBQStEO0FBRS9ELElBQU0sR0FBRyxHQUFHLE1BQU0sRUFBVSxDQUFDO0FBRTdCLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLFFBQVEsRUFBRSxFQUFFO1FBQ1osV0FBVyxFQUFFLEtBQUs7UUFDbEIsT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsOEJBQThCLENBQUM7S0FDcEQ7SUFFRCxNQUFNO1FBQU4saUJBZ0NDO1FBOUJDLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUU7WUFDM0IsSUFBSSxDQUFDLE9BQVEsQ0FBQztnQkFDWixRQUFRLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRO2dCQUNqQyxXQUFXLEVBQUUsSUFBSTthQUNsQixDQUFDLENBQUE7U0FDSDthQUFNLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFHNUIsR0FBRyxDQUFDLHFCQUFxQixHQUFHLFVBQUMsR0FBRztnQkFDOUIsSUFBSSxHQUFHLEVBQUU7b0JBQ1AsS0FBSSxDQUFDLE9BQVEsQ0FBQzt3QkFDWixRQUFRLEVBQUUsR0FBRzt3QkFDYixXQUFXLEVBQUUsSUFBSTtxQkFDbEIsQ0FBQyxDQUFBO2lCQUNIO1lBQ0gsQ0FBQyxDQUFBO1NBQ0Y7YUFBTTtZQUVMLEVBQUUsQ0FBQyxXQUFXLENBQUM7Z0JBQ2IsT0FBTyxFQUFFLFVBQUEsR0FBRztvQkFDVixJQUFJLEdBQUcsQ0FBQyxRQUFRLEVBQUU7d0JBQ2hCLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUE7d0JBQ3RDLEtBQUksQ0FBQyxPQUFRLENBQUM7NEJBQ1osUUFBUSxFQUFFLEdBQUcsQ0FBQyxRQUFROzRCQUN0QixXQUFXLEVBQUUsSUFBSTt5QkFDbEIsQ0FBQyxDQUFBO3FCQUNIO2dCQUNILENBQUM7YUFDRixDQUFDLENBQUE7U0FDSDtJQUNILENBQUM7SUFLRCxXQUFXLFlBQUMsQ0FBTTtRQUNoQixJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFO1lBQ3JCLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFBO1lBQzNDLElBQUksQ0FBQyxPQUFRLENBQUM7Z0JBQ1osUUFBUSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUTtnQkFDM0IsV0FBVyxFQUFFLElBQUk7YUFDbEIsQ0FBQyxDQUFBO1NBQ0g7SUFDSCxDQUFDO0lBS0QsaUJBQWlCO1FBQ2YsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLEVBQUUsQ0FBQyxTQUFTLENBQUM7WUFDWCxLQUFLLEVBQUUsTUFBTTtZQUNiLE9BQU8sRUFBRSxlQUFlO1lBQ3hCLE9BQU8sWUFBQyxHQUFHO2dCQUNULElBQUksR0FBRyxDQUFDLE9BQU8sRUFBRTtvQkFDZixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7aUJBQ3JCO3FCQUFNLElBQUksR0FBRyxDQUFDLE1BQU0sRUFBRTtpQkFDdEI7WUFDSCxDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUtELFlBQVk7UUFDVixJQUFJO1lBRUYsRUFBRSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsRUFBRSw4QkFBZ0IsQ0FBQyxDQUFDO1lBQ3hELEVBQUUsQ0FBQyxjQUFjLENBQUMsMEJBQTBCLEVBQUUsc0NBQXdCLENBQUMsQ0FBQztZQUN4RSxFQUFFLENBQUMsU0FBUyxDQUFDO2dCQUNYLEtBQUssRUFBRSxNQUFNO2dCQUNiLElBQUksRUFBRSxTQUFTO2dCQUNmLFFBQVEsRUFBRSxJQUFJO2FBQ2YsQ0FBQyxDQUFDO1NBQ0o7UUFBQyxPQUFPLENBQUMsRUFBRSxHQUFHO0lBQ2pCLENBQUM7Q0FFRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvL+iOt+WPluW6lOeUqOWunuS+i1xyXG5pbXBvcnQgeyBJTXlBcHAgfSBmcm9tICcuLi8uLi9hcHAnO1xyXG5pbXBvcnQgeyBUQVJHRVRfTElTVF9EQVRBIH0gZnJvbSBcIi4uL2hvbWUvdGFyZ2V0LWluaXRcIjtcclxuaW1wb3J0IHsgVEFSR0VUX0RFVEFJTFNfTElTVF9EQVRBIH0gZnJvbSBcIi4uL2hvbWUvdGFyZ2V0LWluaXRcIjtcclxuXHJcbmNvbnN0IGFwcCA9IGdldEFwcDxJTXlBcHA+KCk7XHJcblxyXG5QYWdlKHtcclxuICBkYXRhOiB7XHJcbiAgICB1c2VySW5mbzoge30sXHJcbiAgICBoYXNVc2VySW5mbzogZmFsc2UsXHJcbiAgICBjYW5JVXNlOiB3eC5jYW5JVXNlKCdidXR0b24ub3Blbi10eXBlLmdldFVzZXJJbmZvJyksXHJcbiAgfSxcclxuXHJcbiAgb25Mb2FkKCkge1xyXG4gICAgLy8g5Yik5pat55So5oi35piv5ZCm55m75b2VXHJcbiAgICBpZiAoYXBwLmdsb2JhbERhdGEudXNlckluZm8pIHtcclxuICAgICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgdXNlckluZm86IGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvLFxyXG4gICAgICAgIGhhc1VzZXJJbmZvOiB0cnVlLFxyXG4gICAgICB9KVxyXG4gICAgfSBlbHNlIGlmICh0aGlzLmRhdGEuY2FuSVVzZSkge1xyXG4gICAgICAvLyDnlLHkuo4gZ2V0VXNlckluZm8g5piv572R57uc6K+35rGC77yM5Y+v6IO95Lya5ZyoIFBhZ2Uub25Mb2FkIOS5i+WQjuaJjei/lOWbnlxyXG4gICAgICAvLyDmiYDku6XmraTlpITliqDlhaUgY2FsbGJhY2sg5Lul6Ziy5q2i6L+Z56eN5oOF5Ya1XHJcbiAgICAgIGFwcC51c2VySW5mb1JlYWR5Q2FsbGJhY2sgPSAocmVzKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgICAgIHVzZXJJbmZvOiByZXMsXHJcbiAgICAgICAgICAgIGhhc1VzZXJJbmZvOiB0cnVlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8g5Zyo5rKh5pyJIG9wZW4tdHlwZT1nZXRVc2VySW5mbyDniYjmnKznmoTlhbzlrrnlpITnkIZcclxuICAgICAgd3guZ2V0VXNlckluZm8oe1xyXG4gICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XHJcbiAgICAgICAgICBpZiAocmVzLnVzZXJJbmZvKSB7XHJcbiAgICAgICAgICAgIGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvXHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICAgICAgICAgIHVzZXJJbmZvOiByZXMudXNlckluZm8sXHJcbiAgICAgICAgICAgICAgaGFzVXNlckluZm86IHRydWVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog6I635Y+W55So5oi35L+h5oGvXHJcbiAgICovXHJcbiAgZ2V0VXNlckluZm8oZTogYW55KSB7XHJcbiAgICBpZiAoZS5kZXRhaWwudXNlckluZm8pIHtcclxuICAgICAgYXBwLmdsb2JhbERhdGEudXNlckluZm8gPSBlLmRldGFpbC51c2VySW5mb1xyXG4gICAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgICB1c2VySW5mbzogZS5kZXRhaWwudXNlckluZm8sXHJcbiAgICAgICAgaGFzVXNlckluZm86IHRydWVcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDmuIXnkIbmj5DnpLpcclxuICAgKi9cclxuICBvbkNsaWNrQ2xlYXJNb2RhbCgpIHtcclxuICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgIHd4LnNob3dNb2RhbCh7XHJcbiAgICAgIHRpdGxlOiAn5riF55CG5o+Q56S6JyxcclxuICAgICAgY29udGVudDogJ+aYr+WQpuehruWumua4heeQhuaJgOacieaJk+WNoeiusOW9le+8gScsXHJcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XHJcbiAgICAgICAgICB0aGF0Lm9uQ2xpY2tDbGVhcigpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocmVzLmNhbmNlbCkge1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDmuIXnkIZcclxuICAgKi9cclxuICBvbkNsaWNrQ2xlYXIoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAvL+W8guatpeabtOaWsOWIl+ihqOe8k+WtmFxyXG4gICAgICB3eC5zZXRTdG9yYWdlU3luYygnVEFSR0VUX0xJU1RfREFUQScsIFRBUkdFVF9MSVNUX0RBVEEpO1xyXG4gICAgICB3eC5zZXRTdG9yYWdlU3luYygnVEFSR0VUX0RFVEFJTFNfTElTVF9EQVRBJywgVEFSR0VUX0RFVEFJTFNfTElTVF9EQVRBKTtcclxuICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICB0aXRsZTogJ+a4heeQhuaIkOWKnycsXHJcbiAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgIGR1cmF0aW9uOiAxMDAwXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZSkgeyB9XHJcbiAgfVxyXG5cclxufSlcclxuIl19