// pages/components/question/index.js
const util = require('../../../utils/util.js');
const testData = require('../../../utils/data.js');
const app = getApp()
const checked = 'hasSelect.checked';
var percent = 'progressData.percent';
var data = [];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    question: testData.postList,
    count: 0,
    maxCount: 10,
    hasSelect:{},
    useTime: '00:00',//
    pageTime:0,
    allTime:120,//单位s
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    let checked2='question[0].checked'
    var a = 0;
    this.setData({
      [checked2]: false,
      remainTime: util.countFormate(this.data.allTime)
    })
    console.log('question[0]', this.data.question[0])
    this.setTime(a, this.data.allTime)
    if (this.data.maxCount > this.data.question.length) {
      this.setData({
        maxCount: this.data.question.length
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.qRadio = this.selectComponent('qRadio')
    this.qcheckbox = this.selectComponent('qcheckbox')
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
  selectData(e) {
    let id = e.detail.id;
    let value = e.detail.value;
    if (data.length == 0) {
      data.push({ id: id, value: value });
    } else {
      for (let i = 0; i < data.length; i++) {
        if (data[i].id === id) {
          data.splice(i, 1, { id: id, value: value });
        } else {
          data.push({ id: id, value: value });
        }
      }
    }
  },
  lastQuestion() {
    data = this.unique(data)
    console.log('lastnew', data)
    if (this.data.count > 0) {
      this.setData({
        count: this.data.count - 1,
        [checked]: false
      })
      for (let i = 0; i < data.length; i++) {
        if (data[i].id == this.data.question[this.data.count].id) {
          this.setData({
            hasSelect: data[i]
          })
        }
      }
    }
    this.setData({
      [percent]: (this.data.count + 1) * 100 / this.data.maxCount
    })
    console.log('last--->', this.data.hasSelect)
  },
  nextQuestion() {
    data = this.unique(data)
    console.log('nextnew', data, this.data.count)
    let percentNum;
    //必须答完前一题才能继续下一题
    if (data.length >= this.data.count + 1 && this.data.count < this.data.question.length) {
      this.setData({
        count: this.data.count + 1,
        [checked]: false, //每次切换题目时重置checked为false
      })
      //当返回修改之前的答案时，记录答过的题的答案及ID
      for (let i = 0; i < data.length; i++) {
        if (this.data.count < this.data.question.length) {
          if (data[i].id == this.data.question[this.data.count].id) {
            this.setData({
              hasSelect: data[i]
            })
          }
        }
      }
      console.log('next-->', this.data.hasSelect, this.data.question.length, this.data.count)
    }

    if (this.data.count + 1 > this.data.maxCount) {
      percentNum = this.data.maxCount * 100 / this.data.maxCount;
    } else {
      percentNum = (this.data.count + 1) * 100 / this.data.maxCount
    }
    this.setData({
      [percent]: percentNum
    })

  },
  unique(oldArr) {
    var allArr = [];//新数组
    for (var i = 0; i < oldArr.length; i++) {
      var flag = true;
      for (var j = 0; j < allArr.length; j++) {
        if (oldArr[i].id == allArr[j].id) {
          flag = false;
        };
      };
      if (flag) {
        allArr.push(oldArr[i]);
      };
    };
    return allArr
  },
  postAnswer() {
    let time = this.data.pageTime
    let that = this
    data.push({ time: time })
    clearInterval(this.showTime)
    clearInterval(this.remainTime)
    console.log('time', time, data)
    wx.showModal({
      title: '答案提交成功',
      content: '返回内容',
      success: (res) => {
        // that.setData({
        //   luckyDraw: true
        // }, function () {
        //   const luckyDraw = that.selectComponent("#luckyDraw");
        // });
      }
    })
  },
  setTime(a, total) {
    this.showTime = setInterval(() => {
      a = a + 1;
      let times = util.countFormate(a);
      this.setData({
        useTime: times,
        pageTime: a
      })
    }, 1000);
    this.remainTime = setInterval(() =>{
      total = total-1;
      a = a++;
      if(total<=0){
        clearInterval(this.remainTime);
        console.log('Game Over')
      }
      let times = util.countFormate(total);
      this.setData({
        remainTime: times,
        pageTime: a
      })
    },1000)
  },
})