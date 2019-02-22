import { Utils } from "../../utils/utils";
import { TARGET_LIST_DATA } from "./target-init";
import { TARGET_DETAILS_LIST_DATA } from "./target-init";

Page({
  data: {
    TARGET_LIST_DATA: [] as any,

    TARGET_DETAILS_LIST_DATA: {}
  },

  /**
   * 初始化数据
   */
  init() {
    this.data.TARGET_LIST_DATA = TARGET_LIST_DATA;
    this.data.TARGET_DETAILS_LIST_DATA = TARGET_DETAILS_LIST_DATA
  },

  onLoad() {
    this.init();
    this.getTargetListData();
    this.getTargetDetailsListData();
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    let that = this;
    wx.stopPullDownRefresh({
      success() {
        that.getTargetListData();
        that.getTargetDetailsListData();
      }
    });
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this.getTargetListData();
    this.getTargetDetailsListData();
  },

  onClickClock(event: any) {
    let itemJson = JSON.stringify(event.currentTarget.dataset.item);
    let id = event.currentTarget.dataset.id;
    // 跳转到打卡页面
    wx.navigateTo({
      url: '/pages/clock/clock?itemJson=' + itemJson + '&id=' + id
    })
  },

  /**
   * 获取目标数据源
   */
  getTargetListData() {
    // 获取本地缓存目标列表数据
    try {
      let targetListData = wx.getStorageSync('TARGET_LIST_DATA');
      if (targetListData) {
        this.data.TARGET_LIST_DATA = targetListData;
        this.data.TARGET_LIST_DATA.forEach((item: any) => {
          //默认未打卡
          item.hasDaysClock = false;
          item.clockDate = "";
          item.clockTime = "";
        });
        this.setData!({
          TARGET_LIST_DATA: this.data.TARGET_LIST_DATA
        });
      }
      // 设置本地缓存目标列表数据
      try {
        wx.setStorageSync('TARGET_LIST_DATA', this.data.TARGET_LIST_DATA);
      } catch (e) { }
    } catch (e) {
      wx.showToast({
        title: '获取打卡目标数据失败，请稍后再试！',
        icon: 'none',
        duration: 1500
      })
    }
  },

  /**
   * 获取目标详情数据源
   */
  getTargetDetailsListData() {
    // 获取本地缓存目标详情列表数据
    try {
      let targetDetailsListData = wx.getStorageSync('TARGET_DETAILS_LIST_DATA');
      if (targetDetailsListData) {
        this.data.TARGET_DETAILS_LIST_DATA = targetDetailsListData;
        this.data.TARGET_LIST_DATA.forEach((item: any) => {
          if (targetDetailsListData[item.id] != null && targetDetailsListData[item.id].length > 0) {
            // 打卡状态
            let systemDate = Utils.getSystemDate();
            let itemFind = targetDetailsListData[item.id].find((item: any) => item.date == systemDate);
            if (!!itemFind) {
              item.hasDaysClock = true;
              item.clockDate = itemFind.date;
              item.clockTime = itemFind.time;
            }
            // 打卡天数
            item.finishDays = targetDetailsListData[item.id].length;
          } else {
            // 打卡天数
            item.finishDays = 0;
          }
        });
        this.setData!({
          TARGET_LIST_DATA: this.data.TARGET_LIST_DATA,
          TARGET_DETAILS_LIST_DATA: this.data.TARGET_DETAILS_LIST_DATA
        });
      }
      // 设置本地缓存目标详情列表数据
      try {
        wx.setStorageSync('TARGET_LIST_DATA', this.data.TARGET_LIST_DATA);
        wx.setStorageSync('TARGET_DETAILS_LIST_DATA', this.data.TARGET_DETAILS_LIST_DATA);
      } catch (e) { }
    } catch (e) {
      wx.showToast({
        title: '获取打卡目标详情数据失败，请稍后再试！',
        icon: 'none',
        duration: 1500
      })
    }
  },
})
