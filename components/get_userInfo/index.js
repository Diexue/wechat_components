// components/getUserInfo/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    _getInfo(e){
      console.log('ue',e)
      let userInfo=e.detail.userInfo;
      if(userInfo){
        this.triggerEvent("getUSerInfo", { userInfo: userInfo });//触发事件，及参数
      }
    }
  }
})
