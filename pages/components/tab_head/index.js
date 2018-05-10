// pages/components/tab_head/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabData:{
      data: [
        { name: "天机", id: 0 },
        { name: "黄兵", id: 0 },
        { name: "道君", id: 0 },
        { name: "叶凡", id: 0 },
        { name: "飞天", id: 0 },
        { name: "圣墟", id: 0 },
        { name: "遮天", id: 0 },
      ],
      activeColor:"red"
    }
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
    this.tab=this.selectComponent('tab')
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
  selectItem(e){
    console.log('item-->',e.detail.index)
  }
})