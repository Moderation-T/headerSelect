import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Table,Checkbox} from 'antd';
const CheckboxGroup = Checkbox.Group;

const dataSource = [{
  key: '1',
  name: '胡彦斌',
  age: 32,
  address: '西湖区湖底公园1号'
}, {
  key: '2',
  name: '胡彦祖',
  age: 42,
  address: '西湖区湖底公园1号'
}];

const columns = [{
  title: '姓名',
  dataIndex: 'name',
  key: 'name',
  // className:'hidden',
}, {
  title: '年龄',
  dataIndex: 'age',
  key: 'age',
}, {
  title: '住址',
  dataIndex: 'address',
  key: 'address',
}];
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hiddenRows:columns,
    }
  }

  componentWillMount() {
    
  }
  hiddenRow(val,columns){
    console.log(val);
    console.log(columns);
    this.setState({
      hiddenRows:columns.filter(item=>val.includes(item.title))
    },()=>{
      console.log(this.state.hiddenRows);
    })
  }
  
  render() {
    return (
      <div className="App">

      <CheckboxGroup
      options={['姓名','年龄','住址']}
      onChange={(val)=>{
        this.hiddenRow(val,columns)
      }}
      ></CheckboxGroup>

        <Table dataSource={dataSource} columns={this.state.hiddenRows} />
      </div>
    );
  }
}

export default App;
