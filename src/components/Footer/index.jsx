import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
  handleCheckAll = (event) => {
    this.props.checkAllTodo(event.target.checked)
  }

  handleClearAllDone = () => {
    this.props.clearAllDone()
  }

  render() {
    const { todos } = this.props
    const doneConut = todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0)
    // console.log(this.props.todos)
    return (
      <div className="todo-footer">
        <label>
          <input
            type="checkbox"
            onChange={this.handleCheckAll}
            checked={
              doneConut === todos.length && todos.length !== 0 ? true : false
            }
          />
        </label>
        <span>
          <span>已完成{doneConut}</span> / 全部{todos.length}
        </span>
        <button onClick={this.handleClearAllDone} className="btn btn-danger">
          清除已完成任务
        </button>
      </div>
    )
  }
}
