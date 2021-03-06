import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Header extends Component {
  back = () => {
    this.props.history.goBack()
  }

  render() {
    return (
      <div className="page-header">
        <h2>React Router Demo</h2>
        <button onClick={this.back}>ει</button>
        <button onClick={this.forward}>εθΏ</button>
      </div>
    )
  }
}

export default withRouter(Header)
