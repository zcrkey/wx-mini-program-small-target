"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../../utils/utils");
Page({
    data: {
        TARGET_LIST_DATA: [
            {
                id: 1,
                icon: "sun-o",
                bgUrl: "/assets/imgs/sun.jpg",
                name: "早起",
                finishDays: 0,
                clockDate: "",
                clockTime: "",
                hasDaysClock: false
            },
            {
                id: 2,
                icon: "moon-o",
                bgUrl: "/assets/imgs/moon.jpg",
                name: "早睡",
                finishDays: 0,
                clockDate: "",
                clockTime: "",
                hasDaysClock: false
            },
            {
                id: 3,
                icon: "tint",
                bgUrl: "/assets/imgs/tint.jpg",
                name: "喝水",
                finishDays: 0,
                clockDate: "",
                clockTime: "",
                hasDaysClock: false
            },
            {
                id: 4,
                icon: "bicycle",
                bgUrl: "/assets/imgs/bicycle.jpg",
                name: "运动",
                finishDays: 0,
                clockDate: "",
                clockTime: "",
                hasDaysClock: false
            },
        ],
        TARGET_DETAILS_LIST_DATA: {
            1: [],
            2: [],
            3: [],
            4: []
        }
    },
    onLoad: function () {
        this.getTargetListData();
        this.getTargetDetailsListData();
    },
    onPullDownRefresh: function () {
        var that = this;
        wx.stopPullDownRefresh({
            success: function () {
                that.getTargetListData();
                that.getTargetDetailsListData();
            }
        });
    },
    onShow: function () {
        this.getTargetListData();
        this.getTargetDetailsListData();
    },
    onClickClock: function (event) {
        var itemJson = JSON.stringify(event.currentTarget.dataset.item);
        var id = JSON.stringify(event.currentTarget.dataset.id);
        wx.navigateTo({
            url: '/pages/clock/clock?itemJson=' + itemJson + '&id=' + id
        });
    },
    getTargetListData: function () {
        try {
            var targetListData = wx.getStorageSync('TARGET_LIST_DATA');
            if (targetListData) {
                this.data.TARGET_LIST_DATA = targetListData;
                this.data.TARGET_LIST_DATA.forEach(function (item) {
                    item.hasDaysClock = false;
                    item.clockDate = "";
                    item.clockTime = "";
                });
                this.setData({
                    TARGET_LIST_DATA: this.data.TARGET_LIST_DATA
                });
            }
            try {
                wx.setStorageSync('TARGET_LIST_DATA', this.data.TARGET_LIST_DATA);
            }
            catch (e) { }
        }
        catch (e) {
            wx.showToast({
                title: '获取打卡目标数据失败，请稍后再试！',
                icon: 'none',
                duration: 1500
            });
        }
    },
    getTargetDetailsListData: function () {
        try {
            var targetDetailsListData_1 = wx.getStorageSync('TARGET_DETAILS_LIST_DATA');
            if (targetDetailsListData_1) {
                this.data.TARGET_DETAILS_LIST_DATA = targetDetailsListData_1;
                this.data.TARGET_LIST_DATA.forEach(function (item) {
                    if (targetDetailsListData_1[item.id] != null && targetDetailsListData_1[item.id].length > 0) {
                        var systemDate_1 = utils_1.Utils.getSystemDate();
                        var itemFind = targetDetailsListData_1[item.id].find(function (item) { return item.date == systemDate_1; });
                        if (!!itemFind) {
                            item.hasDaysClock = true;
                            item.clockDate = itemFind.date;
                            item.clockTime = itemFind.time;
                        }
                        item.finishDays = targetDetailsListData_1[item.id].length;
                    }
                    else {
                        item.finishDays = 0;
                    }
                });
                this.setData({
                    TARGET_LIST_DATA: this.data.TARGET_LIST_DATA,
                    TARGET_DETAILS_LIST_DATA: this.data.TARGET_DETAILS_LIST_DATA
                });
            }
            try {
                wx.setStorageSync('TARGET_LIST_DATA', this.data.TARGET_LIST_DATA);
                wx.setStorageSync('TARGET_DETAILS_LIST_DATA', this.data.TARGET_DETAILS_LIST_DATA);
            }
            catch (e) { }
        }
        catch (e) {
            wx.showToast({
                title: '获取打卡目标详情数据失败，请稍后再试！',
                icon: 'none',
                duration: 1500
            });
        }
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBMEM7QUFFMUMsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osZ0JBQWdCLEVBQUU7WUFDaEI7Z0JBQ0UsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsS0FBSyxFQUFFLHNCQUFzQjtnQkFDN0IsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsVUFBVSxFQUFFLENBQUM7Z0JBQ2IsU0FBUyxFQUFFLEVBQUU7Z0JBQ2IsU0FBUyxFQUFFLEVBQUU7Z0JBQ2IsWUFBWSxFQUFFLEtBQUs7YUFDcEI7WUFDRDtnQkFDRSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxJQUFJLEVBQUUsUUFBUTtnQkFDZCxLQUFLLEVBQUUsdUJBQXVCO2dCQUM5QixJQUFJLEVBQUUsSUFBSTtnQkFDVixVQUFVLEVBQUUsQ0FBQztnQkFDYixTQUFTLEVBQUUsRUFBRTtnQkFDYixTQUFTLEVBQUUsRUFBRTtnQkFDYixZQUFZLEVBQUUsS0FBSzthQUNwQjtZQUNEO2dCQUNFLEVBQUUsRUFBRSxDQUFDO2dCQUNMLElBQUksRUFBRSxNQUFNO2dCQUNaLEtBQUssRUFBRSx1QkFBdUI7Z0JBQzlCLElBQUksRUFBRSxJQUFJO2dCQUNWLFVBQVUsRUFBRSxDQUFDO2dCQUNiLFNBQVMsRUFBRSxFQUFFO2dCQUNiLFNBQVMsRUFBRSxFQUFFO2dCQUNiLFlBQVksRUFBRSxLQUFLO2FBQ3BCO1lBQ0Q7Z0JBQ0UsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsS0FBSyxFQUFFLDBCQUEwQjtnQkFDakMsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsVUFBVSxFQUFFLENBQUM7Z0JBQ2IsU0FBUyxFQUFFLEVBQUU7Z0JBQ2IsU0FBUyxFQUFFLEVBQUU7Z0JBQ2IsWUFBWSxFQUFFLEtBQUs7YUFDcEI7U0FDRjtRQUVELHdCQUF3QixFQUFFO1lBQ3hCLENBQUMsRUFBRSxFQUFFO1lBQ0wsQ0FBQyxFQUFFLEVBQUU7WUFDTCxDQUFDLEVBQUUsRUFBRTtZQUNMLENBQUMsRUFBRSxFQUFFO1NBQ047S0FDRjtJQUVELE1BQU07UUFDSixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBS0QsaUJBQWlCO1FBQ2YsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztZQUNyQixPQUFPO2dCQUNMLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO2dCQUN6QixJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztZQUNsQyxDQUFDO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUtELE1BQU07UUFDSixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQsWUFBWSxZQUFDLEtBQVU7UUFDckIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoRSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRXhELEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUUsOEJBQThCLEdBQUcsUUFBUSxHQUFHLE1BQU0sR0FBRyxFQUFFO1NBQzdELENBQUMsQ0FBQTtJQUNKLENBQUM7SUFLRCxpQkFBaUI7UUFFZixJQUFJO1lBQ0YsSUFBSSxjQUFjLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBQzNELElBQUksY0FBYyxFQUFFO2dCQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGNBQWMsQ0FBQztnQkFDNUMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFTO29CQUUzQyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztvQkFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7b0JBQ3BCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO2dCQUN0QixDQUFDLENBQUMsQ0FBQztnQkFDSCxJQUFJLENBQUMsT0FBUSxDQUFDO29CQUNaLGdCQUFnQixFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCO2lCQUM3QyxDQUFDLENBQUM7YUFDSjtZQUVELElBQUk7Z0JBQ0YsRUFBRSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7YUFDbkU7WUFBQyxPQUFPLENBQUMsRUFBRSxHQUFHO1NBQ2hCO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixFQUFFLENBQUMsU0FBUyxDQUFDO2dCQUNYLEtBQUssRUFBRSxtQkFBbUI7Z0JBQzFCLElBQUksRUFBRSxNQUFNO2dCQUNaLFFBQVEsRUFBRSxJQUFJO2FBQ2YsQ0FBQyxDQUFBO1NBQ0g7SUFDSCxDQUFDO0lBS0Qsd0JBQXdCO1FBRXRCLElBQUk7WUFDRixJQUFJLHVCQUFxQixHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsMEJBQTBCLENBQUMsQ0FBQztZQUMxRSxJQUFJLHVCQUFxQixFQUFFO2dCQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLHdCQUF3QixHQUFHLHVCQUFxQixDQUFDO2dCQUMzRCxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQVM7b0JBQzNDLElBQUksdUJBQXFCLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksSUFBSSx1QkFBcUIsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTt3QkFFdkYsSUFBSSxZQUFVLEdBQUcsYUFBSyxDQUFDLGFBQWEsRUFBRSxDQUFDO3dCQUN2QyxJQUFJLFFBQVEsR0FBRyx1QkFBcUIsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBUyxJQUFLLE9BQUEsSUFBSSxDQUFDLElBQUksSUFBSSxZQUFVLEVBQXZCLENBQXVCLENBQUMsQ0FBQzt3QkFDM0YsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFOzRCQUNkLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDOzRCQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7NEJBQy9CLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQzt5QkFDaEM7d0JBRUQsSUFBSSxDQUFDLFVBQVUsR0FBRyx1QkFBcUIsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDO3FCQUN6RDt5QkFBTTt3QkFFTCxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztxQkFDckI7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsSUFBSSxDQUFDLE9BQVEsQ0FBQztvQkFDWixnQkFBZ0IsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQjtvQkFDNUMsd0JBQXdCLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyx3QkFBd0I7aUJBQzdELENBQUMsQ0FBQzthQUNKO1lBRUQsSUFBSTtnQkFDRixFQUFFLENBQUMsY0FBYyxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztnQkFDbEUsRUFBRSxDQUFDLGNBQWMsQ0FBQywwQkFBMEIsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLENBQUM7YUFDbkY7WUFBQyxPQUFPLENBQUMsRUFBRSxHQUFHO1NBQ2hCO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixFQUFFLENBQUMsU0FBUyxDQUFDO2dCQUNYLEtBQUssRUFBRSxxQkFBcUI7Z0JBQzVCLElBQUksRUFBRSxNQUFNO2dCQUNaLFFBQVEsRUFBRSxJQUFJO2FBQ2YsQ0FBQyxDQUFBO1NBQ0g7SUFDSCxDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVXRpbHMgfSBmcm9tIFwiLi4vLi4vdXRpbHMvdXRpbHNcIjtcclxuXHJcblBhZ2Uoe1xyXG4gIGRhdGE6IHtcclxuICAgIFRBUkdFVF9MSVNUX0RBVEE6IFtcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIGljb246IFwic3VuLW9cIixcclxuICAgICAgICBiZ1VybDogXCIvYXNzZXRzL2ltZ3Mvc3VuLmpwZ1wiLFxyXG4gICAgICAgIG5hbWU6IFwi5pep6LW3XCIsXHJcbiAgICAgICAgZmluaXNoRGF5czogMCxcclxuICAgICAgICBjbG9ja0RhdGU6IFwiXCIsXHJcbiAgICAgICAgY2xvY2tUaW1lOiBcIlwiLFxyXG4gICAgICAgIGhhc0RheXNDbG9jazogZmFsc2VcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAyLFxyXG4gICAgICAgIGljb246IFwibW9vbi1vXCIsXHJcbiAgICAgICAgYmdVcmw6IFwiL2Fzc2V0cy9pbWdzL21vb24uanBnXCIsXHJcbiAgICAgICAgbmFtZTogXCLml6nnnaFcIixcclxuICAgICAgICBmaW5pc2hEYXlzOiAwLFxyXG4gICAgICAgIGNsb2NrRGF0ZTogXCJcIixcclxuICAgICAgICBjbG9ja1RpbWU6IFwiXCIsXHJcbiAgICAgICAgaGFzRGF5c0Nsb2NrOiBmYWxzZVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDMsXHJcbiAgICAgICAgaWNvbjogXCJ0aW50XCIsXHJcbiAgICAgICAgYmdVcmw6IFwiL2Fzc2V0cy9pbWdzL3RpbnQuanBnXCIsXHJcbiAgICAgICAgbmFtZTogXCLllp3msLRcIixcclxuICAgICAgICBmaW5pc2hEYXlzOiAwLFxyXG4gICAgICAgIGNsb2NrRGF0ZTogXCJcIixcclxuICAgICAgICBjbG9ja1RpbWU6IFwiXCIsXHJcbiAgICAgICAgaGFzRGF5c0Nsb2NrOiBmYWxzZVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDQsXHJcbiAgICAgICAgaWNvbjogXCJiaWN5Y2xlXCIsXHJcbiAgICAgICAgYmdVcmw6IFwiL2Fzc2V0cy9pbWdzL2JpY3ljbGUuanBnXCIsXHJcbiAgICAgICAgbmFtZTogXCLov5DliqhcIixcclxuICAgICAgICBmaW5pc2hEYXlzOiAwLFxyXG4gICAgICAgIGNsb2NrRGF0ZTogXCJcIixcclxuICAgICAgICBjbG9ja1RpbWU6IFwiXCIsXHJcbiAgICAgICAgaGFzRGF5c0Nsb2NrOiBmYWxzZVxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuXHJcbiAgICBUQVJHRVRfREVUQUlMU19MSVNUX0RBVEE6IHtcclxuICAgICAgMTogW10sXHJcbiAgICAgIDI6IFtdLFxyXG4gICAgICAzOiBbXSxcclxuICAgICAgNDogW11cclxuICAgIH1cclxuICB9LFxyXG5cclxuICBvbkxvYWQoKSB7XHJcbiAgICB0aGlzLmdldFRhcmdldExpc3REYXRhKCk7XHJcbiAgICB0aGlzLmdldFRhcmdldERldGFpbHNMaXN0RGF0YSgpO1xyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35LiL5ouJ5Yqo5L2cXHJcbiAgICovXHJcbiAgb25QdWxsRG93blJlZnJlc2goKSB7XHJcbiAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICB3eC5zdG9wUHVsbERvd25SZWZyZXNoKHtcclxuICAgICAgc3VjY2VzcygpIHtcclxuICAgICAgICB0aGF0LmdldFRhcmdldExpc3REYXRhKCk7XHJcbiAgICAgICAgdGhhdC5nZXRUYXJnZXREZXRhaWxzTGlzdERhdGEoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLmmL7npLpcclxuICAgKi9cclxuICBvblNob3coKSB7XHJcbiAgICB0aGlzLmdldFRhcmdldExpc3REYXRhKCk7XHJcbiAgICB0aGlzLmdldFRhcmdldERldGFpbHNMaXN0RGF0YSgpO1xyXG4gIH0sXHJcblxyXG4gIG9uQ2xpY2tDbG9jayhldmVudDogYW55KSB7XHJcbiAgICBsZXQgaXRlbUpzb24gPSBKU09OLnN0cmluZ2lmeShldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaXRlbSk7XHJcbiAgICBsZXQgaWQgPSBKU09OLnN0cmluZ2lmeShldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWQpO1xyXG4gICAgLy8g6Lez6L2s5Yiw5omT5Y2h6aG16Z2iXHJcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgdXJsOiAnL3BhZ2VzL2Nsb2NrL2Nsb2NrP2l0ZW1Kc29uPScgKyBpdGVtSnNvbiArICcmaWQ9JyArIGlkXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOiOt+WPluebruagh+aVsOaNrua6kFxyXG4gICAqL1xyXG4gIGdldFRhcmdldExpc3REYXRhKCkge1xyXG4gICAgLy8g6I635Y+W5pys5Zyw57yT5a2Y55uu5qCH5YiX6KGo5pWw5o2uXHJcbiAgICB0cnkge1xyXG4gICAgICBsZXQgdGFyZ2V0TGlzdERhdGEgPSB3eC5nZXRTdG9yYWdlU3luYygnVEFSR0VUX0xJU1RfREFUQScpO1xyXG4gICAgICBpZiAodGFyZ2V0TGlzdERhdGEpIHtcclxuICAgICAgICB0aGlzLmRhdGEuVEFSR0VUX0xJU1RfREFUQSA9IHRhcmdldExpc3REYXRhO1xyXG4gICAgICAgIHRoaXMuZGF0YS5UQVJHRVRfTElTVF9EQVRBLmZvckVhY2goKGl0ZW06IGFueSkgPT4ge1xyXG4gICAgICAgICAgLy/pu5jorqTmnKrmiZPljaFcclxuICAgICAgICAgIGl0ZW0uaGFzRGF5c0Nsb2NrID0gZmFsc2U7XHJcbiAgICAgICAgICBpdGVtLmNsb2NrRGF0ZSA9IFwiXCI7XHJcbiAgICAgICAgICBpdGVtLmNsb2NrVGltZSA9IFwiXCI7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgICBUQVJHRVRfTElTVF9EQVRBOiB0aGlzLmRhdGEuVEFSR0VUX0xJU1RfREFUQVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIOiuvue9ruacrOWcsOe8k+WtmOebruagh+WIl+ihqOaVsOaNrlxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdUQVJHRVRfTElTVF9EQVRBJywgdGhpcy5kYXRhLlRBUkdFVF9MSVNUX0RBVEEpO1xyXG4gICAgICB9IGNhdGNoIChlKSB7IH1cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICB0aXRsZTogJ+iOt+WPluaJk+WNoeebruagh+aVsOaNruWksei0pe+8jOivt+eojeWQjuWGjeivle+8gScsXHJcbiAgICAgICAgaWNvbjogJ25vbmUnLFxyXG4gICAgICAgIGR1cmF0aW9uOiAxNTAwXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog6I635Y+W55uu5qCH6K+m5oOF5pWw5o2u5rqQXHJcbiAgICovXHJcbiAgZ2V0VGFyZ2V0RGV0YWlsc0xpc3REYXRhKCkge1xyXG4gICAgLy8g6I635Y+W5pys5Zyw57yT5a2Y55uu5qCH6K+m5oOF5YiX6KGo5pWw5o2uXHJcbiAgICB0cnkge1xyXG4gICAgICBsZXQgdGFyZ2V0RGV0YWlsc0xpc3REYXRhID0gd3guZ2V0U3RvcmFnZVN5bmMoJ1RBUkdFVF9ERVRBSUxTX0xJU1RfREFUQScpO1xyXG4gICAgICBpZiAodGFyZ2V0RGV0YWlsc0xpc3REYXRhKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhLlRBUkdFVF9ERVRBSUxTX0xJU1RfREFUQSA9IHRhcmdldERldGFpbHNMaXN0RGF0YTtcclxuICAgICAgICB0aGlzLmRhdGEuVEFSR0VUX0xJU1RfREFUQS5mb3JFYWNoKChpdGVtOiBhbnkpID0+IHtcclxuICAgICAgICAgIGlmICh0YXJnZXREZXRhaWxzTGlzdERhdGFbaXRlbS5pZF0gIT0gbnVsbCAmJiB0YXJnZXREZXRhaWxzTGlzdERhdGFbaXRlbS5pZF0ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAvLyDmiZPljaHnirbmgIFcclxuICAgICAgICAgICAgbGV0IHN5c3RlbURhdGUgPSBVdGlscy5nZXRTeXN0ZW1EYXRlKCk7XHJcbiAgICAgICAgICAgIGxldCBpdGVtRmluZCA9IHRhcmdldERldGFpbHNMaXN0RGF0YVtpdGVtLmlkXS5maW5kKChpdGVtOiBhbnkpID0+IGl0ZW0uZGF0ZSA9PSBzeXN0ZW1EYXRlKTtcclxuICAgICAgICAgICAgaWYgKCEhaXRlbUZpbmQpIHtcclxuICAgICAgICAgICAgICBpdGVtLmhhc0RheXNDbG9jayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgaXRlbS5jbG9ja0RhdGUgPSBpdGVtRmluZC5kYXRlO1xyXG4gICAgICAgICAgICAgIGl0ZW0uY2xvY2tUaW1lID0gaXRlbUZpbmQudGltZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyDmiZPljaHlpKnmlbBcclxuICAgICAgICAgICAgaXRlbS5maW5pc2hEYXlzID0gdGFyZ2V0RGV0YWlsc0xpc3REYXRhW2l0ZW0uaWRdLmxlbmd0aDtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIOaJk+WNoeWkqeaVsFxyXG4gICAgICAgICAgICBpdGVtLmZpbmlzaERheXMgPSAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICAgICAgVEFSR0VUX0xJU1RfREFUQTogdGhpcy5kYXRhLlRBUkdFVF9MSVNUX0RBVEEsXHJcbiAgICAgICAgICBUQVJHRVRfREVUQUlMU19MSVNUX0RBVEE6IHRoaXMuZGF0YS5UQVJHRVRfREVUQUlMU19MSVNUX0RBVEFcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICAvLyDorr7nva7mnKzlnLDnvJPlrZjnm67moIfor6bmg4XliJfooajmlbDmja5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygnVEFSR0VUX0xJU1RfREFUQScsIHRoaXMuZGF0YS5UQVJHRVRfTElTVF9EQVRBKTtcclxuICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygnVEFSR0VUX0RFVEFJTFNfTElTVF9EQVRBJywgdGhpcy5kYXRhLlRBUkdFVF9ERVRBSUxTX0xJU1RfREFUQSk7XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHsgfVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgIHRpdGxlOiAn6I635Y+W5omT5Y2h55uu5qCH6K+m5oOF5pWw5o2u5aSx6LSl77yM6K+356iN5ZCO5YaN6K+V77yBJyxcclxuICAgICAgICBpY29uOiAnbm9uZScsXHJcbiAgICAgICAgZHVyYXRpb246IDE1MDBcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG59KVxyXG4iXX0=