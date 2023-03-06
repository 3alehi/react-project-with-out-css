import "./showBook.css"
import React, { Component } from 'react'

export default class showBook extends Component {
  render() {
    return (
      <div>
        <table className="table">
         
        <tr>
            <th>{this.props.name}</th>
            <th>{this.props.Bookname}</th>
            <th>{this.props.date}</th>

        </tr>
        </table>
      </div>
    )
  }
}
