import React, { Component } from 'react';
class Test extends Component {
  constructor(props){
  super(props);
  this.state = {
    res:'正在发送请求。。。'
  }
  }

  componentWillMount() {
    console.log(222);
    fetch(`http://171.0.2.186:9999/inspection2/871632`)
    // fetch(`http://neeq.memect.cn:6006/inspection/430032`)
    .then(res => res.json())
    .then(res => {
      this.setState({
        res:'请求成功'
      })
     },err=>{
      this.setState({
        res:'请求失败'
      })
     });
  }
  render() {
    return (
      <div >
      {this.state.res}
      </div>
    );
  }
}
export default Test;
