"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../../utils/utils");
Page({
    data: {
        id: "",
        listData: []
    },
    onLoad: function (_options) {
        this.setData({
            id: _options.id
        });
        this.getListData();
    },
    onPullDownRefresh: function () {
        var that = this;
        wx.stopPullDownRefresh({
            success: function () {
                that.getListData();
            }
        });
    },
    getListData: function () {
        try {
            var targetDetailsListData = wx.getStorageSync('TARGET_DETAILS_LIST_DATA');
            if (targetDetailsListData) {
                var id = this.data.id;
                if (!!id) {
                    if (targetDetailsListData[id] != null && targetDetailsListData[id].length > 0) {
                        this.data.listData = targetDetailsListData[id].sort(function (aItem, bItem) {
                            return utils_1.Utils.isDateSize((bItem.date + " " + bItem.time), (aItem.date + " " + aItem.time));
                        });
                        this.setData({
                            listData: this.data.listData
                        });
                    }
                }
            }
        }
        catch (e) {
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvY2stZGV0YWlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNsb2NrLWRldGFpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBMEM7QUFFMUMsSUFBSSxDQUFDO0lBRUgsSUFBSSxFQUFFO1FBQ0osRUFBRSxFQUFFLEVBQUU7UUFDTixRQUFRLEVBQUUsRUFBRTtLQUNiO0lBS0QsTUFBTSxZQUFDLFFBQWE7UUFDbEIsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLEVBQUUsRUFBRSxRQUFRLENBQUMsRUFBRTtTQUNoQixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUtELGlCQUFpQjtRQUNmLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixFQUFFLENBQUMsbUJBQW1CLENBQUM7WUFDckIsT0FBTztnQkFDTCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDckIsQ0FBQztTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxXQUFXO1FBRVQsSUFBSTtZQUNGLElBQUkscUJBQXFCLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1lBQzFFLElBQUkscUJBQXFCLEVBQUU7Z0JBQ3pCLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO2dCQUN0QixJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUU7b0JBQ1IsSUFBSSxxQkFBcUIsQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLElBQUkscUJBQXFCLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTt3QkFDN0UsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcscUJBQXFCLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsS0FBVSxFQUFFLEtBQVU7NEJBQ3pFLE9BQU8sYUFBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO3dCQUM1RixDQUFDLENBQUMsQ0FBQzt3QkFDSCxJQUFJLENBQUMsT0FBUSxDQUFDOzRCQUNaLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVE7eUJBQzdCLENBQUMsQ0FBQztxQkFDSjtpQkFDRjthQUNGO1NBQ0Y7UUFBQyxPQUFPLENBQUMsRUFBRTtTQUNYO0lBQ0gsQ0FBQztDQUVGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFV0aWxzIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3V0aWxzXCI7XHJcblxyXG5QYWdlKHtcclxuXHJcbiAgZGF0YToge1xyXG4gICAgaWQ6IFwiXCIsXHJcbiAgICBsaXN0RGF0YTogW11cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWKoOi9vVxyXG4gICAqL1xyXG4gIG9uTG9hZChfb3B0aW9uczogYW55KSB7XHJcbiAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgaWQ6IF9vcHRpb25zLmlkXHJcbiAgICB9KTtcclxuICAgIHRoaXMuZ2V0TGlzdERhdGEoKTtcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+S4i+aLieWKqOS9nFxyXG4gICAqL1xyXG4gIG9uUHVsbERvd25SZWZyZXNoKCkge1xyXG4gICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgd3guc3RvcFB1bGxEb3duUmVmcmVzaCh7XHJcbiAgICAgIHN1Y2Nlc3MoKSB7XHJcbiAgICAgICAgdGhhdC5nZXRMaXN0RGF0YSgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICBnZXRMaXN0RGF0YSgpIHtcclxuICAgIC8vIOiOt+WPluacrOWcsOe8k+WtmOaJk+WNoeivpuaDheWIl+ihqOaVsOaNrlxyXG4gICAgdHJ5IHtcclxuICAgICAgbGV0IHRhcmdldERldGFpbHNMaXN0RGF0YSA9IHd4LmdldFN0b3JhZ2VTeW5jKCdUQVJHRVRfREVUQUlMU19MSVNUX0RBVEEnKTtcclxuICAgICAgaWYgKHRhcmdldERldGFpbHNMaXN0RGF0YSkge1xyXG4gICAgICAgIGxldCBpZCA9IHRoaXMuZGF0YS5pZDtcclxuICAgICAgICBpZiAoISFpZCkge1xyXG4gICAgICAgICAgaWYgKHRhcmdldERldGFpbHNMaXN0RGF0YVtpZF0gIT0gbnVsbCAmJiB0YXJnZXREZXRhaWxzTGlzdERhdGFbaWRdLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhLmxpc3REYXRhID0gdGFyZ2V0RGV0YWlsc0xpc3REYXRhW2lkXS5zb3J0KChhSXRlbTogYW55LCBiSXRlbTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIFV0aWxzLmlzRGF0ZVNpemUoKGJJdGVtLmRhdGUgKyBcIiBcIiArIGJJdGVtLnRpbWUpLCAoYUl0ZW0uZGF0ZSArIFwiIFwiICsgYUl0ZW0udGltZSkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgICAgICAgbGlzdERhdGE6IHRoaXMuZGF0YS5saXN0RGF0YVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgIH1cclxuICB9XHJcblxyXG59KVxyXG4iXX0=