import { Utils } from "../../utils/utils";

Page({

  data: {
    id: "",
    listData: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(_options: any) {
    this.setData!({
      id: _options.id
    });
    this.getListData();
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    let that = this;
    wx.stopPullDownRefresh({
      success() {
        that.getListData();
      }
    });
  },

  getListData() {
    // 获取本地缓存打卡详情列表数据
    try {
      let targetDetailsListData = wx.getStorageSync('TARGET_DETAILS_LIST_DATA');
      if (targetDetailsListData) {
        let id = this.data.id;
        if (!!id) {
          if (targetDetailsListData[id] != null && targetDetailsListData[id].length > 0) {
            this.data.listData = targetDetailsListData[id].sort((aItem: any, bItem: any) => {
              return Utils.isDateSize((bItem.date + " " + bItem.time), (aItem.date + " " + aItem.time));
            });
            this.setData!({
              listData: this.data.listData
            });
          }
        }
      }
    } catch (e) {
    }
  }

})
