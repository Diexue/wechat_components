// components/lattice_box/index.js
const focus_class = 'propData.focus_class'
const focus = 'initData.focus'
const val_length = 'propData.val_length'
const showNumber = 'propData.showNumber'
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    propData:{
      type:Object,
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    val_length: 0,
    initData:{
      amount: [1, 1, 1, 4],//输入框格子数
      interval: false,// 是否显示间隔输入框
      focus_class: false,  //输入框聚焦样式
      showNumber: false,//是否显示密码
      height: 80,//输入框初始高度rpx，
      focus: false,//输入框聚焦状态
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _set_focus(){
      this.setData({
        [focus]:true
      })
    },
    _get_focus(){
      this.setData({
        [focus_class]: true
      })
    },
    _blur(){
      this.setData({
        [focus_class]: false
      })
    },
    _getNumber(e){
      let that = this;
      let val_arr = [];
      let current_arr = e.detail.value.replace(/\s+/g, "");//去掉空格
      let val_length = current_arr.length;
      let len = that.data.propData.amount.length;
      if (val_length <= len){
        for (let i = 0; i < len; i++) {
          val_arr.push(current_arr.substr(i, 1))
        }
        this.setData({
          val_length: val_length,
          val_arr: val_arr,
        })
        console.log('look-->', this.data.val_length, val_arr, current_arr)
        if (val_length === len){
          this.triggerEvent('getCode', { code: current_arr });//触发事件，及参数
        }
      }else {
        return;
      }
    }
  }
})
