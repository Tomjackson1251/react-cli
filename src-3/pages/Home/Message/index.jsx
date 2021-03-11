import React, { Component } from 'react'
import Detail from './Detail'
import { Link, Route } from 'react-router-dom'

export default class Message extends Component {
  state = {
    messageArr: [
      { id: '01', title: '消息1' },
      { id: '02', title: '消息2' },
      { id: '03', title: '消息3' },
    ],
  }
  replaceShow = (id, title) => {
    this.props.history.replace(`/home/message/detail/${id}/${title}`)
  }

  pushShow = (id, title) => {
    this.props.history.push(`/home/message/detail/${id}/${title}`)
  }

  forward = () => {
    this.props.history.goForward()
  }
  back = () => {
    this.props.history.goBack()
  }

  render() {
    const { messageArr } = this.state
    return (
      <div>
        <ul>
          {messageArr.map((msgObj) => {
            return (
              <li key={msgObj.id}>
                <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>
                  {msgObj.title}
                </Link>
                &nbsp;
                <button
                  onClick={() => this.replaceShow(msgObj.id, msgObj.title)}
                >
                  replace
                </button>
                &nbsp;
                <button onClick={() => this.pushShow(msgObj.id, msgObj.title)}>
                  push
                </button>
              </li>
            )
          })}
        </ul>
        <hr />
        <Route path="/home/message/detail/:id/:title" component={Detail} />
        <button onClick={this.back}>回退</button>
        <button onClick={this.forward}>前进</button>
      </div>
    )
  }
}
