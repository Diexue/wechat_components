// pages/components/tab_head/index.js
const util=require('../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabData:{
      data: [
        { name: "123", id: 0 },
        { name: "黄兵黄兵", id: 0 },
        { name: "道君", id: 0 },
        { name: "叶凡", id: 0 },
        { name: "飞天", id: 0 },
        { name: "圣墟", id: 0 },
        { name: "遮天", id: 0 },
      ],
      showAdd:true,
      // activeColor:"green",
      showCount:5,
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    util.warning({ title: 'kdsak', content: 'sdsjadj', showCancel:false, cancelColor: '#ef5350',cancelText:"12"},this.show)
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
  },
  addMore(e){
    console.log('点击了add')
  },
  show(bool){
    if(bool){
      console.log('点击了确定', bool)
    }else{
      console.log('点击了取消', bool)
    }
  }
})