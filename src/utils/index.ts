// 获取时间
export function getTime(startTime:any) {
    // const myDate = new Date();
    const year = startTime.getFullYear();
    let month; //获取完整的年份(4位,1970-????)
    //获取当前月份(0-11,0代表1月)
    if (startTime.getMonth() < 10) {
      month = `0${startTime.getMonth() + 1}`;
    } else {
      month = startTime.getMonth() + 1;
    } // 所以获取当前月份是myDate.getMonth()+1;
    let date; //获取当前日(1-31)
    if (startTime.getDate() < 10) {
      date = `0${startTime.getDate()}`;
    } else {
      date = startTime.getDate();
    }
  
    let hour;
    if (startTime.getHours() < 10) {
      hour = `0${startTime.getHours()}`;
    } else {
      hour = startTime.getHours();
    }
    let minute; //获取当前分钟数(0-59)
    if (startTime.getMinutes() < 10) {
      minute = `0${startTime.getMinutes()}`;
    } else {
      minute = startTime.getMinutes();
    }
    let second; //获取当前秒数(0-59)
    if (startTime.getSeconds() < 10) {
      second = `0${startTime.getSeconds()}`;
    } else {
      second = startTime.getSeconds();
    }
    return `${year}-${month}-${date} ${hour}:${minute}:${second}`;
  }