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
    onPullDownRefresh: function () {
        if (this.data.hasUserInfo) {
            var that_1 = this;
            wx.stopPullDownRefresh({
                success: function () {
                    wx.getUserInfo({
                        success: function (res) {
                            that_1.setData({
                                userInfo: res.userInfo,
                            });
                        }
                    });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxtREFBdUQ7QUFDdkQsbURBQStEO0FBRS9ELElBQU0sR0FBRyxHQUFHLE1BQU0sRUFBVSxDQUFDO0FBRTdCLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLFFBQVEsRUFBRSxFQUFFO1FBQ1osV0FBVyxFQUFFLEtBQUs7UUFDbEIsT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsOEJBQThCLENBQUM7S0FDcEQ7SUFFRCxNQUFNO1FBQU4saUJBZ0NDO1FBOUJDLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUU7WUFDM0IsSUFBSSxDQUFDLE9BQVEsQ0FBQztnQkFDWixRQUFRLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRO2dCQUNqQyxXQUFXLEVBQUUsSUFBSTthQUNsQixDQUFDLENBQUE7U0FDSDthQUFNLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFHNUIsR0FBRyxDQUFDLHFCQUFxQixHQUFHLFVBQUMsR0FBRztnQkFDOUIsSUFBSSxHQUFHLEVBQUU7b0JBQ1AsS0FBSSxDQUFDLE9BQVEsQ0FBQzt3QkFDWixRQUFRLEVBQUUsR0FBRzt3QkFDYixXQUFXLEVBQUUsSUFBSTtxQkFDbEIsQ0FBQyxDQUFBO2lCQUNIO1lBQ0gsQ0FBQyxDQUFBO1NBQ0Y7YUFBTTtZQUVMLEVBQUUsQ0FBQyxXQUFXLENBQUM7Z0JBQ2IsT0FBTyxFQUFFLFVBQUEsR0FBRztvQkFDVixJQUFJLEdBQUcsQ0FBQyxRQUFRLEVBQUU7d0JBQ2hCLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUE7d0JBQ3RDLEtBQUksQ0FBQyxPQUFRLENBQUM7NEJBQ1osUUFBUSxFQUFFLEdBQUcsQ0FBQyxRQUFROzRCQUN0QixXQUFXLEVBQUUsSUFBSTt5QkFDbEIsQ0FBQyxDQUFBO3FCQUNIO2dCQUNILENBQUM7YUFDRixDQUFDLENBQUE7U0FDSDtJQUNILENBQUM7SUFLRCxpQkFBaUI7UUFDZixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3pCLElBQUksTUFBSSxHQUFHLElBQUksQ0FBQztZQUNoQixFQUFFLENBQUMsbUJBQW1CLENBQUM7Z0JBQ3JCLE9BQU87b0JBRUwsRUFBRSxDQUFDLFdBQVcsQ0FBQzt3QkFDYixPQUFPLFlBQUMsR0FBRzs0QkFDVCxNQUFJLENBQUMsT0FBUSxDQUFDO2dDQUNaLFFBQVEsRUFBRSxHQUFHLENBQUMsUUFBUTs2QkFDdkIsQ0FBQyxDQUFBO3dCQUNKLENBQUM7cUJBQ0YsQ0FBQyxDQUFBO2dCQUNKLENBQUM7YUFDRixDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFLRCxXQUFXLFlBQUMsQ0FBTTtRQUNoQixJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFO1lBQ3JCLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFBO1lBQzNDLElBQUksQ0FBQyxPQUFRLENBQUM7Z0JBQ1osUUFBUSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUTtnQkFDM0IsV0FBVyxFQUFFLElBQUk7YUFDbEIsQ0FBQyxDQUFBO1NBQ0g7SUFDSCxDQUFDO0lBS0QsaUJBQWlCO1FBQ2YsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLEVBQUUsQ0FBQyxTQUFTLENBQUM7WUFDWCxLQUFLLEVBQUUsTUFBTTtZQUNiLE9BQU8sRUFBRSxlQUFlO1lBQ3hCLE9BQU8sWUFBQyxHQUFHO2dCQUNULElBQUksR0FBRyxDQUFDLE9BQU8sRUFBRTtvQkFDZixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7aUJBQ3JCO3FCQUFNLElBQUksR0FBRyxDQUFDLE1BQU0sRUFBRTtpQkFDdEI7WUFDSCxDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUtELFlBQVk7UUFDVixJQUFJO1lBRUYsRUFBRSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsRUFBRSw4QkFBZ0IsQ0FBQyxDQUFDO1lBQ3hELEVBQUUsQ0FBQyxjQUFjLENBQUMsMEJBQTBCLEVBQUUsc0NBQXdCLENBQUMsQ0FBQztZQUN4RSxFQUFFLENBQUMsU0FBUyxDQUFDO2dCQUNYLEtBQUssRUFBRSxNQUFNO2dCQUNiLElBQUksRUFBRSxTQUFTO2dCQUNmLFFBQVEsRUFBRSxJQUFJO2FBQ2YsQ0FBQyxDQUFDO1NBQ0o7UUFBQyxPQUFPLENBQUMsRUFBRSxHQUFHO0lBQ2pCLENBQUM7Q0FFRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvL+iOt+WPluW6lOeUqOWunuS+i1xyXG5pbXBvcnQgeyBJTXlBcHAgfSBmcm9tICcuLi8uLi9hcHAnO1xyXG5pbXBvcnQgeyBUQVJHRVRfTElTVF9EQVRBIH0gZnJvbSBcIi4uL2hvbWUvdGFyZ2V0LWluaXRcIjtcclxuaW1wb3J0IHsgVEFSR0VUX0RFVEFJTFNfTElTVF9EQVRBIH0gZnJvbSBcIi4uL2hvbWUvdGFyZ2V0LWluaXRcIjtcclxuXHJcbmNvbnN0IGFwcCA9IGdldEFwcDxJTXlBcHA+KCk7XHJcblxyXG5QYWdlKHtcclxuICBkYXRhOiB7XHJcbiAgICB1c2VySW5mbzoge30sXHJcbiAgICBoYXNVc2VySW5mbzogZmFsc2UsXHJcbiAgICBjYW5JVXNlOiB3eC5jYW5JVXNlKCdidXR0b24ub3Blbi10eXBlLmdldFVzZXJJbmZvJyksXHJcbiAgfSxcclxuXHJcbiAgb25Mb2FkKCkge1xyXG4gICAgLy8g5Yik5pat55So5oi35piv5ZCm55m75b2VXHJcbiAgICBpZiAoYXBwLmdsb2JhbERhdGEudXNlckluZm8pIHtcclxuICAgICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgdXNlckluZm86IGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvLFxyXG4gICAgICAgIGhhc1VzZXJJbmZvOiB0cnVlLFxyXG4gICAgICB9KVxyXG4gICAgfSBlbHNlIGlmICh0aGlzLmRhdGEuY2FuSVVzZSkge1xyXG4gICAgICAvLyDnlLHkuo4gZ2V0VXNlckluZm8g5piv572R57uc6K+35rGC77yM5Y+v6IO95Lya5ZyoIFBhZ2Uub25Mb2FkIOS5i+WQjuaJjei/lOWbnlxyXG4gICAgICAvLyDmiYDku6XmraTlpITliqDlhaUgY2FsbGJhY2sg5Lul6Ziy5q2i6L+Z56eN5oOF5Ya1XHJcbiAgICAgIGFwcC51c2VySW5mb1JlYWR5Q2FsbGJhY2sgPSAocmVzKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgICAgIHVzZXJJbmZvOiByZXMsXHJcbiAgICAgICAgICAgIGhhc1VzZXJJbmZvOiB0cnVlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8g5Zyo5rKh5pyJIG9wZW4tdHlwZT1nZXRVc2VySW5mbyDniYjmnKznmoTlhbzlrrnlpITnkIZcclxuICAgICAgd3guZ2V0VXNlckluZm8oe1xyXG4gICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XHJcbiAgICAgICAgICBpZiAocmVzLnVzZXJJbmZvKSB7XHJcbiAgICAgICAgICAgIGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvXHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICAgICAgICAgIHVzZXJJbmZvOiByZXMudXNlckluZm8sXHJcbiAgICAgICAgICAgICAgaGFzVXNlckluZm86IHRydWVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog6aG16Z2i55u45YWz5LqL5Lu25aSE55CG5Ye95pWwLS3nm5HlkKznlKjmiLfkuIvmi4nliqjkvZxcclxuICAgKi9cclxuICBvblB1bGxEb3duUmVmcmVzaCgpIHtcclxuICAgIGlmICh0aGlzLmRhdGEuaGFzVXNlckluZm8pIHtcclxuICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICB3eC5zdG9wUHVsbERvd25SZWZyZXNoKHtcclxuICAgICAgICBzdWNjZXNzKCkge1xyXG4gICAgICAgICAgLy8g5b+F6aG75piv5Zyo55So5oi35bey57uP5o6I5p2D55qE5oOF5Ya15LiL6LCD55SoXHJcbiAgICAgICAgICB3eC5nZXRVc2VySW5mbyh7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICAgICAgdGhhdC5zZXREYXRhISh7XHJcbiAgICAgICAgICAgICAgICB1c2VySW5mbzogcmVzLnVzZXJJbmZvLFxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDojrflj5bnlKjmiLfkv6Hmga9cclxuICAgKi9cclxuICBnZXRVc2VySW5mbyhlOiBhbnkpIHtcclxuICAgIGlmIChlLmRldGFpbC51c2VySW5mbykge1xyXG4gICAgICBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyA9IGUuZGV0YWlsLnVzZXJJbmZvXHJcbiAgICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICAgIHVzZXJJbmZvOiBlLmRldGFpbC51c2VySW5mbyxcclxuICAgICAgICBoYXNVc2VySW5mbzogdHJ1ZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOa4heeQhuaPkOekulxyXG4gICAqL1xyXG4gIG9uQ2xpY2tDbGVhck1vZGFsKCkge1xyXG4gICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgd3guc2hvd01vZGFsKHtcclxuICAgICAgdGl0bGU6ICfmuIXnkIbmj5DnpLonLFxyXG4gICAgICBjb250ZW50OiAn5piv5ZCm56Gu5a6a5riF55CG5omA5pyJ5omT5Y2h6K6w5b2V77yBJyxcclxuICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcclxuICAgICAgICAgIHRoYXQub25DbGlja0NsZWFyKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChyZXMuY2FuY2VsKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOa4heeQhlxyXG4gICAqL1xyXG4gIG9uQ2xpY2tDbGVhcigpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIC8v5byC5q2l5pu05paw5YiX6KGo57yT5a2YXHJcbiAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdUQVJHRVRfTElTVF9EQVRBJywgVEFSR0VUX0xJU1RfREFUQSk7XHJcbiAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdUQVJHRVRfREVUQUlMU19MSVNUX0RBVEEnLCBUQVJHRVRfREVUQUlMU19MSVNUX0RBVEEpO1xyXG4gICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgIHRpdGxlOiAn5riF55CG5oiQ5YqfJyxcclxuICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgZHVyYXRpb246IDEwMDBcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlKSB7IH1cclxuICB9XHJcblxyXG59KVxyXG4iXX0=