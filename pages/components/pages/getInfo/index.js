// pages/components/getInfo/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showGetBtn:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.userInfo){
      this.setData({
        userInfo: app.globalData.userInfo
      });
      wx.getSetting({
        success: res => {
          if (!res.authSetting['scope.werun']) {
            wx.authorize({
              scope: 'scope.werun',
              success() {
                // 用户已经同意小程序使用微信步数功能，后续调用 wx.startRecord 接口不会弹窗询问
                wx.getWeRunData({
                  success:res=>{
                    console.log('步数',res)
                    const encryptedData = res.encryptedData
                  }
                })
              }
            })
          }
        }
      })
    }else{
      this.setData({
        showGetBtn:true
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.addMore = this.selectComponent('addMore')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  get_UserInfo(e){
    console.log('用户信息',e,e.detail.userInfo);
    let userInfo = e.detail.userInfo
    app.globalData.userInfo = userInfo
    this.setData({
      userInfo:userInfo,
      showGetBtn:false
    })
  }
})