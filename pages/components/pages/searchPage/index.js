// pages/components/searchPage/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: '',
    defaultValue: "",
    popularList: ["海澜之家", "腾讯", "新零售", "阿里巴巴", "A站"]
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
  searchValue(e) {
    this.setData({
      value: e.detail.value
    })
  },
  search(e) {
    console.log('dd', this.data.value)
    let value = this.data.value;
    // wx.request({
    //   url: '',
    //   data:"",
    //   success(res){

    //   }
    // })
  },
  clearData() {
    this.setData({
      defaultValue: "",
      value: ""
    })
  },
  selectList(e) {
    console.log('eee', e);
    let value = e.currentTarget.dataset.value;
    this.setData({
      value: value,
      defaultValue: value
    })
    this.search();
  }
})