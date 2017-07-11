import React, { Component } from 'react';
import { DatePicker } from 'antd';
import 'antd/lib/date-picker/style/css'
import moment from 'moment';
const { MonthPicker, RangePicker } = DatePicker;

function range(start, end) {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
}

function disabledDate(current) {
  // Can not select days before today and today
  let minTime = Date.now() - (24*60*60*60);
  let maxTime = new Date(2017,7,32);//注意月份默认加1，且为了选到最后时间需要加一天
  return current && (current.valueOf() < minTime || current.valueOf() > maxTime);
}

function disabledRangeTime(_, type) {
  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  console.log(hour);
  console.log(min);
  console.log(sec);
  if (type === 'start') {
    return {
      disabledHours: () => range(0, 24).splice(0, hour),
      disabledMinutes: () => range(0, 60).splice(0, min),
      disabledSeconds: () => range(0, 60).splice(0, sec),
    };
  }
  return {
    disabledHours: () => [],
    disabledMinutes: () => [],
    disabledSeconds: () => []
  };
}

class Datepicker extends Component {
  render() {
    return (
        <div>
            <RangePicker
            disabledDate={disabledDate}
            disabledTime={disabledRangeTime}
            showTime={{
                hideDisabledOptions: true,
                defaultValue: [moment('00:00:00', 'HH:mm:ss'), moment('11:59:59', 'HH:mm:ss')],
            }}
            format="YYYY-MM-DD HH:mm:ss"
            />
        </div>
    );
  }
}

export default Datepicker;
