import React, { Component } from 'react';
import { DatePicker } from 'antd';
import 'antd/lib/date-picker/style/css'
import Datapicker from './date-picker';

function disabledDate(current) {
  // Can not select days before today and today
  let minTime = Date.now() - (24*60*60*60);
  let maxTime = new Date(2017,7,32);//注意月份默认加1，且为了选到最后时间需要加一天
  return current && (current.valueOf() < minTime || current.valueOf() > maxTime);
}

class Datepicker extends Component {
  constructor(props) {
    super(props)
    this.state={
      text : null
    }
  }
  onTimeChange = (value,dateString) => {
    this.setState({
      text : dateString
    })
  }
  render() {
    return (
        <div>
          <h2>父组件</h2>
          <DatePicker format="YYYY-MM-DD" disabledDate={disabledDate} onChange={this.onTimeChange}/>
          <Son text={this.state.text}></Son>
        </div>
    );
  }
}
class Son extends React.Component{
    render(){
      return <div>
        <h2>子组件</h2>
        <p>当前日期为：{this.props.text}</p>
      </div>
    }
  }
export default Datepicker;
