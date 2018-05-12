// components/checkboxAZ/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    propData:{
      type:Object
    },
    propChecked: {
      type: Object
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    code: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "K"],
    selectIndex:-1
  },

  /**
   * 组件的方法列表
   */
  methods: {
    checkboxChange(e){
      console.log('box',e);
      let items = this.properties.propData.content;
      let value=e.detail.value;
      let selected = 'propChecked.value'
      for(let i=0;i<items.length;i++){
        if(value.indexOf(i+"")!=-1){
          items[i].checked=true;
        }else{
          items[i].checked = false;
        }
      }
      this.setData({
        propData: this.properties.propData,
        [selected]: ["-1"],
      })
      console.log('data', this.data.propData.id,value, this.data.propData)
      this.triggerEvent('selectData', { id: this.data.propData.id, value: value })
    }
  }
})
