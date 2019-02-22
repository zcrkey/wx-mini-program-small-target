//获取应用实例
import { IMyApp } from '../../app';
import { TARGET_LIST_DATA } from "../home/target-init";
import { TARGET_DETAILS_LIST_DATA } from "../home/target-init";

const app = getApp<IMyApp>();

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },

  onLoad() {
    // 判断用户是否登录
    if (app.globalData.userInfo) {
      this.setData!({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = (res) => {
        if (res) {
          this.setData!({
            userInfo: res,
            hasUserInfo: true
          })
        }
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          if (res.userInfo) {
            app.globalData.userInfo = res.userInfo
            this.setData!({
              userInfo: res.userInfo,
              hasUserInfo: true
            })
          }
        }
      })
    }
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    if (this.data.hasUserInfo) {
      let that = this;
      wx.stopPullDownRefresh({
        success() {
          // 必须是在用户已经授权的情况下调用
          wx.getUserInfo({
            success(res) {
              that.setData!({
                userInfo: res.userInfo,
              })
            }
          })
        }
      });
    }
  },

  /**
   * 获取用户信息
   */
  getUserInfo(e: any) {
    if (e.detail.userInfo) {
      app.globalData.userInfo = e.detail.userInfo
      this.setData!({
        userInfo: e.detail.userInfo,
        hasUserInfo: true
      })
    }
  },

  /**
   * 清理提示
   */
  onClickClearModal() {
    let that = this;
    wx.showModal({
      title: '清理提示',
      content: '是否确定清理所有打卡记录！',
      success(res) {
        if (res.confirm) {
          that.onClickClear();
        } else if (res.cancel) {
        }
      }
    })
  },

  /**
   * 清理
   */
  onClickClear() {
    try {
      //异步更新列表缓存
      wx.setStorageSync('TARGET_LIST_DATA', TARGET_LIST_DATA);
      wx.setStorageSync('TARGET_DETAILS_LIST_DATA', TARGET_DETAILS_LIST_DATA);
      wx.showToast({
        title: '清理成功',
        icon: 'success',
        duration: 1000
      });
    } catch (e) { }
  }

})
