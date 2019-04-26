import React, { Component } from 'react';
import { Table } from 'antd';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const dataSource = [];
    const columns = [{
      title: '姓名',
      key: 'name',
      dataIndex: 'name',
      render: text => text || '--'
    }, {
      title: '性别',
      key: 'name',
      dataIndex: 'name',
      render: text => text || '--'
    }, {
      title: '年龄',
      key: 'name',
      dataIndex: 'name',
      render: text => text || '--'
    }, {
      title: '身高',
      key: 'name',
      dataIndex: 'name',
      render: text => text || '--'
    }, {
      title: '体重',
      key: 'name',
      dataIndex: 'name',
      render: text => text || '--'
    }, {
      title: '住址',
      key: 'name',
      dataIndex: 'name',
      render: text => text || '--'
    }, {
      title: '特长',
      key: 'name',
      dataIndex: 'name',
      render: text => text || '--'
    }, {
      title: '',
      key: 'name',
      dataIndex: 'name',
      render: text => text || '--'
    }, {
      title: '姓名',
      key: 'name',
      dataIndex: 'name',
      render: text => text || '--'
    }, {
      title: '姓名',
      key: 'name',
      dataIndex: 'name',
      render: text => text || '--'
    }, {
      title: '姓名',
      key: 'name',
      dataIndex: 'name',
      render: text => text || '--'
    }, {
      title: '姓名',
      key: 'name',
      dataIndex: 'name',
      render: text => text || '--'
    }, {
      title: '姓名',
      key: 'name',
      dataIndex: 'name',
      render: text => text || '--'
    }, {
      title: '姓名',
      key: 'name',
      dataIndex: 'name',
      render: text => text || '--'
    }, {
      title: '姓名',
      key: 'name',
      dataIndex: 'name',
      render: text => text || '--'
    }, {
      title: '姓名',
      key: 'name',
      dataIndex: 'name',
      render: text => text || '--'
    }, {
      title: '姓名',
      key: 'name',
      dataIndex: 'name',
      render: text => text || '--'
    }, {
      title: '姓名',
      key: 'name',
      dataIndex: 'name',
      render: text => text || '--'
    }];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit
            <code>src/App.js</code> 
            and save to reload.
          </p>
          <Table
            dataSource={dataSource}
            columns={columns}
          />
        </header>
      </div>
    );
  }
}

export default App;
