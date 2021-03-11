import React, { Component } from 'react'
import { Button } from 'antd'
import 'antd/dist/antd.css'
import {
  HomeOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
  LoadingOutlined,
} from '@ant-design/icons'

export default class App extends Component {
  render() {
    return (
      <div>
        <Button type="link">111</Button>
        <Button type="icon">111</Button>
        <HomeOutlined />
        <SettingFilled />
        <SmileOutlined />
        <SyncOutlined spin />
        <SmileOutlined rotate={180} />
        <LoadingOutlined />
      </div>
    )
  }
}
