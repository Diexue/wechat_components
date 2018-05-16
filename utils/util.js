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
const warning = (obj,callback)=>{
  return wx.showModal({
    title: obj.title,
    content: obj.content,
    showCancel: !obj.showCancel ? obj.showCancel : true,//是否显示取消按钮
    cancelText: obj.cancelText ? obj.cancelText : '取消',//取消按钮的文字
    cancelColor: obj.cancelColor ? obj.cancelColor: '#000000',//取消按钮的颜色
    confirmText: obj.confirmText ? obj.confirmText: '确认',//确认按钮的文字
    confirmColor: obj.confirmColor ? obj.confirmColor: '#3CC51F',//确认按钮的颜色
    success:res=>{
      if(res.confirm){
        callback(bool)
      }else if(res.cancel){
        callback(!bool)
      }
    },
    fail:res=>{
      console.log('fail', res)
    },
    complete:res=>{
      
    }
  })
}
module.exports = {
  formatTime: formatTime,
  countFormate,
  warning
}
