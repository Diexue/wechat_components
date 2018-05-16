// pages/api/location/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    location:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
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
  selectLocation(e){
    let that = this
    wx.getSetting({
      success: res => {
        console.log('b->', res)
        if (!res.authSetting['scope.userLocation']) {
          console.log('da')
          wx.authorize({
            scope: 'scope.userLocation',
            success() {
              // 用户已经同意小程序使用打开地图选择位置功能，后续调用 wx.startRecord 接口不会弹窗询问
              wx.chooseLocation({
                success: res => {
                  console.log('位置', res)
                  const encryptedData = res.encryptedData
                }
              })
            }
          })
        } else {
          console.log('d-->')
          wx.chooseLocation({
            success: res => {
              console.log('位置', res)
              that.setData({
                location: res
              })
              const encryptedData = res.encryptedData
            }
          })
        }
      }
    })
  }
})