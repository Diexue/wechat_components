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
module.exports = {
  formatTime: formatTime,
  countFormate
}
