// components/headList/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    propData:{
      type:Object,
      value:{
    
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    selectIndex: 0,
    initData:{
      data: [
        { name: "天机", id: 0 },
        { name: "黄兵", id: 1 },
        { name: "道君", id: 2 },
        { name: "叶凡", id: 3 },
        { name: "飞天", id: 4 },
        { name: "圣墟", id: 5 },
        { name: "遮天", id: 6 },
      ],
      showCount:5,//显示tab数量
      color: "#333",//默认未激活颜色
      activeColor: "#fff",//默认激活颜色
      bgColor:'#efefef',//未激活背景色
      activeBgColor:'#ef5350',//激活背景色
      fontSize: "32",//默认字体大小
      height: "80",//默认行高（height和line-height）
      bg: "#fff",//默认背景色
      showAdd: false,//是否显示更多+
      add_bg: "rgba(10,10,10,0.8)",//默认更多+的背景色
      add_color: "#ef5350",//默认更多+的字体色
      add_fontSize: "50",
    }
  },
  attached(e){
    let add_width ='initData.add_width'
    //当showAdd为true时，显示更多所占width默认80，反正为0
    this.setData({
      [add_width]: this.properties.propData.showAdd?80:0
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    //item选择事件
    _selectTopic(e) {
      let index = e.currentTarget.dataset.index;
      let id=e.currentTarget.dataset.id
      this.triggerEvent('selectTopic', { id: id, index: index });//触发事件，及参数
      // console.log('look',index,id)
      this.setData({
        selectIndex: index
      })
    },
    // 右侧add 的点击事件
    _addMore(e){
      this.triggerEvent('addMore');//触发事件，及参数
    }
  }
})
