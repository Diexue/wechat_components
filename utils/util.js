var bool = true
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
const countFormate = timeValue => {
  let minute = parseInt(timeValue / 60);
  let seconds = parseInt(timeValue % 60);
  return formate(minute) + ":" + formate(seconds);
}
function formate(value) {
  if (value < 10) {
    value = `0${value}`
  }
  return value;
}
const warning = (obj,trigger)=>{
  // trigger为触发函数，点击确认时返回true，反之为false
  return wx.showModal({
    title: obj.title?obj.title:"",
    content: obj.content ? obj.content:"",
    showCancel: !obj.showCancel ? obj.showCancel : true,//是否显示取消按钮
    cancelText: obj.cancelText ? obj.cancelText : '取消',//取消按钮的文字
    cancelColor: obj.cancelColor ? obj.cancelColor: '#000000',//取消按钮的颜色
    confirmText: obj.confirmText ? obj.confirmText: '确认',//确认按钮的文字
    confirmColor: obj.confirmColor ? obj.confirmColor: '#3CC51F',//确认按钮的颜色
    success:res=>{
      if(res.confirm){
        trigger(bool)
      }else if(res.cancel){
        trigger(!bool)
      }
    },
    fail:res=>{
      console.log('fail', res)
    },
    complete:res=>{
      
    }
  })
}
//消息提示
const toast = (obj,trigger)=>{
  return wx.showToast({
    title: obj.title ? obj.title : '',//提示内容
    icon:obj.icon?obj.icon:'none',//提示图标
    image:obj.image?obj.image:'',//自定义本地图片，优先级高于icon
    duration:obj.duration?obj.duration:1500,//提示延迟时间，默认1500
    mask:obj.mask?obj.mask:false,//是否显示透明蒙层，防止触摸穿透，默认false
    success:res=>{
      trigger()
    },
    fail:res=>{
      console.log('fail-->')
    }
  })
}

const loading=(obj,trigger)=>{
  return wx.showLoading({
    title: obj.title?obj.title:'',
    mask:obj.mask?obj.mask:false,
    success:res=>{
      if(trigger) trigger()
    }
  })
}
function unique(oldArr) {
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
}
const hideLoading=()=>{ wx.hideLoading() }
module.exports = {
  formatTime: formatTime,
  countFormate,
  warning,
  toast,
  loading,
  hideLoading,
  unique
}
