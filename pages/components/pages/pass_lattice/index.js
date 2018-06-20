// pages/components/pass_lattice/index.js
const util = require('../../../../utils/util.js');

var olddistance = 0;  //这个是上一次两个手指的距离  
var newdistance;      //本次两手指之间的距离，两个一减咱们就知道了滑动了多少，以及放大还是缩小（正负嘛）  
var oldscale = 1;     //这个是上一次动作留下的比例  
var diffdistance;     //这个是新的比例，新的比例一定是建立在旧的比例上面的，给人一种连续的假象  
var baseHeight;       //上一次触摸完之后的高  
var baseWidth;        //上一次触摸完之后的宽  
var windowWidth = 0;  //咱们屏幕的宽  
var windowHeight = 0; //咱们屏幕的高 
var sData=[];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    passData:{
      amount:[1,1,1,1,1,1],
      interval:true,
      // showNumber:true,
      height:'88',
 
    },
    show:['block','none'],
    svgData:[],
    icons: ['icon-zhongguoditu', 'icon-wechat', 'icon-logistics', 'icon-info-r','icon-diamond'],
    count:-1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSystemInfo({
      success:res=>{
        console.log('eres-->',res);
        let height=res.screenHeight;
        let width=res.screenWidth;
        let fontSize=width;
        this.setData({
          fontSize:fontSize,
          cwidth:width,
          cheight:width
        })
      }
    })
    if(sData.length!=0){
      this.setData({
        svgData:sData
      })
    }
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
  },
  start(e){
    // let 
  },
  move(e){
    console.log('e->',e)
    let width=375
    if(e.touches.length==2){
      var xMove, yMove, distance,fontSize;
      xMove = e.touches[1].clientX - e.touches[0].clientX;
      yMove = e.touches[1].clientY - e.touches[0].clientY;
      distance = Math.sqrt(xMove * xMove + yMove * yMove);
      if(olddistance===0){
        olddistance=distance;
        console.log('distance-->', olddistance)
      }else{
        newdistance =distance;
        diffdistance =newdistance-olddistance;
        olddistance=newdistance;
        var newScale = oldscale + 0.005 * diffdistance;
        if (newScale<0.5){
          newScale=0.5
        } else if (newScale>1.5){
          newScale=1.5
        }
        this.setData({
          newScale: newScale,
          fontSize:width*newScale,
          cwidth: width * newScale,
          cheight: width * newScale
        })
        oldscale = newScale;
        console.log('look>',this.data.fontSize)
      }
    }

  },
  end(e){
    // if (e.touches.length == 2) {
    //   olddistance = 0;
    // } 
  },
click(e){
  console.log('点击-->',e)
  let xy=e.detail;
  let arr = [{ x: 100, y: 251 }, { x: 200, y: 251 },{ x: 120, y: 350 },{ x: 220, y: 350 },{ x: 300, y: 251 }]
  for(let i=0;i< arr.length;i++){
    if (arr[i].x-50<xy.x&&(xy.x<arr[i].x+50)&&(xy.y>arr[i].y-50)&&(xy.y<arr[i].y+50)) {
      console.log('看看你-->', xy.x, xy.y, arr[i].x - 50,arr[i].y-50)
      sData.push({ x: arr[i].x - 80, y: arr[i].y - 80,icon:this.data.icons[i],id:i})
      sData = util.unique(sData)
      this.setData({
        svgData:sData
      })
    }
  }
  console.log('dd', this.data.count, this.data.kk)
}
})