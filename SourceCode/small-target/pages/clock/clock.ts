import { Utils } from "../../utils/utils"

Page({

  data: {
    hasTips: false,
    hasDaysClock: false,
    id: "",
    item: {},
    clockDate: "",
    clockTime: ""
  },

  init() {
    this.setData!({
      hasTips: false,
      hasDaysClock: false,
      clockDate: "",
      clockTime: ""
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(_options: any) {
    this.init();
    this.setData!({
      id: _options.id
    });
    let item = JSON.parse(_options.itemJson);
    if (!!item) {
      this.setData!({
        item: item,
        hasDaysClock: item.hasDaysClock,
        clockDate: item.clockDate,
        clockTime: item.clockTime
      });
      let date = new Date();
      // 早起
      if (item.id == 1) {
        if (!(date.getHours() >= 6 && date.getHours() < 9)) {
          this.setData!({
            hasTips: true
          });
        }
      }
      // 早睡
      if (item.id == 2) {
        if (!(date.getHours() >= 20 && date.getHours() < 23)) {
          this.setData!({
            hasTips: true
          });
        }
      }
    }
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 打卡提示
   */
  onClickClockModal() {
    let that = this;
    wx.showModal({
      title: '打卡提示',
      content: '是否确定打卡！',
      success(res) {
        if (res.confirm) {
          that.onClickClock();
        } else if (res.cancel) {
        }
      }
    })
  },

  /**
   * 打卡
   */
  onClickClock() {
    // 获取本地缓存打卡详情列表数据
    try {
      let targetDetailsListData = wx.getStorageSync('TARGET_DETAILS_LIST_DATA');
      if (targetDetailsListData) {
        let date = new Date();
        this.data.clockDate = Utils.getSystemDate("date", date);
        this.data.clockTime = Utils.getSystemDate("time", date);
        this.setData!({
          clockDate: this.data.clockDate,
          clockTime: this.data.clockTime,
          hasDaysClock: true
        });
        let id = this.data.id;
        if (!!id) {
          if (targetDetailsListData[id] != null && targetDetailsListData[id].length > 0) {
            targetDetailsListData[id].push({
              date: this.data.clockDate,
              time: this.data.clockTime
            })
          } else {
            targetDetailsListData[id] = [{
              date: this.data.clockDate,
              time: this.data.clockTime
            }]
          }
          wx.setStorageSync('TARGET_DETAILS_LIST_DATA', targetDetailsListData);
        }
      }
    } catch (e) {
      wx.showToast({
        title: '打卡失败，请稍后再试！',
        icon: 'none',
        duration: 1500
      })
    }
  },

  /**
   * 点击更多
   */
  onClickMore(event: any) {
    let id = event.currentTarget.dataset.id;
    // 跳转到打卡页面
    wx.navigateTo({
      url: '/pages/clock-details/clock-details?id=' + id
    })
  }

})
