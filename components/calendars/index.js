// components/calendar2/index.js
var arr = []
const tYear='today.year';
const tMonth = 'today.month';
const tDate = 'today.date';
// const showprecolor ='formatData.showprecolor';
// const precolor = 'formatData.precolor'
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    propData:{
      type:Object
    },

  },

  /**
   * 组件的初始数据
   */
  data: {
    arr: [],
    sysW: null,
    lastDay: null,
    firstDay: null,
    weekArr: ['日', '一', '二', '三', '四', '五', '六'],
    year: null,
    scount:0,
    clickItem:0,
    clickItem2:0
  },
  attached:function(){
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth();
    var date = today.getDate();
    this.dataTime(year,month,date);
    let width = this.properties.propData.width;
    let showprecolor = this.properties.propData.showprecolor ? this.properties.propData.showprecolor:false;
    let precolor = this.properties.propData.precolor ? this.properties.propData.precolor:"#ccc";
    // let condition=today
    // console.log('就请假', showprecolor,precolor)
    this.setData({
      sysW:width / 8,//设置宽度
      marLet: this.data.firstDay,
      [tYear]:year,
      [tMonth]:month+1,
      [tDate]:date,
      showprecolor: showprecolor,
      precolor:precolor
    });
    console.log('看卡',this.data.today)
  },
  /**
   * 组件的方法列表
   */
  methods: {
    dataTime: function (year,month,date) {
      var date = new Date(year, month, date);
      console.log('date-->',date)
      var nyear = date.getFullYear();
      var nmonth = date.getMonth();
      var nmonths = date.getMonth() + 1;
      var lastDay= new Date(nyear, nmonths, 0).getDate();
      arr=[];
      for (var i = 1; i < lastDay + 1; i++) {
        arr.push(i);
      }
      this.setData({
        year: nyear,//获取现今年份
        month: nmonths,//获取现今月份
        getDate: date.getDate(),//获取今日日期
        lastDay: lastDay,//最后一天是几号
        firstDay: new Date(year, month, 1).getDay(), //第一天星期几
        arr:arr,
      })
    },
    _change(e){
      let map=e.currentTarget.dataset.map;
      let month = this.data.month-1;
      if(map=='add'){
        month+=1;
      }else if(map=='del'){
        month-=1;
      }
      console.log('mo-->',month)
      this.dataTime(this.data.year,month,1);
      this.setData({
        marLet: this.data.firstDay,
      })
    },
    _select(e){
      let count = this.data.scount+1;
      if(count>2) {
        count=1;
      }
      let sDate=e.currentTarget.dataset.date;
      let year = e.currentTarget.dataset.year;
      let month = e.currentTarget.dataset.month;
      let today = this.data.today;
      console.log('kkk-->',year,month,sDate,today);
      var condition = year < today.year || year == today.year && month < today.month || year == today.year && month == today.month && sDate<today.date;
      if (!condition){
        if (count === 1) {
          this.setData({
            clickMonth1:month,
            clickItem1: sDate,
            scount: count,
          })
        } else if (count === 2) {
          this.setData({
            clickItem: sDate,
            clickMonth: month,
            scount: count
          })
        }
      }
      // if()
      console.log('看看', this.data.clickItem1, this.data.clickMonth1, this.data.clickItem, this.data.clickMonth)
      this.triggerEvent('selectDay')
    }
  }
})
