// pages/components/progress/index.js
const util=require('../../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    progressData:{
      percent: 10,
      height: 40,
      activeColor: 'red',
      radius: 40,
      bgColor: '#ebebeb',
      showPercent: false
    },
    someData:{
      title:"测试的小程序"
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    util.loading({title:'正在加载'})
    console.log('ss',util.hideLoading)
    setTimeout(function () {
      util.hideLoading()
    }, 2000)
    wx.getSystemInfo({
      success: res => {
        console.log('res-->', res)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.newpro=this.selectComponent('newpro')
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
  go(e){

  }
})