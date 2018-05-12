// components/newProgress/index.js
// <!--传参propData对象，相应属性，圆角radius，进度条高度height, 百分比percent(默认50), 是否显示百分比showPercent，进度条已选颜色activeColor ，未选进度条颜色bgColor-- >
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
    initData:{
      percent: 10,//所占百分比
      height: 40,//进度条高度
      activeColor: '#81cb8f',//激活背景色
      radius: 40,//圆角
      bgColor: '#ebebeb',//背景色
      showPercent: true,//是否显示百分比
      border:'1px solid #ebebeb',//
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
