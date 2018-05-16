// pages/components/pass_lattice/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    passData:{
      amount:[1,1,1,1,1,1],
      interval:true,
      // showNumber:true,
      height:'88'
    },

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var a = ['A', 'B', 'C']
    wx.showActionSheet({
      itemList: a,
      success: function (res) {
        console.log('select',a[res.tapIndex])
      },
      fail: function (res) {
        console.log(res.errMsg)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.pass=this.selectComponent('pass')
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
  getNumber(e){
    console.log('code-->',e.detail.code)
  }
})