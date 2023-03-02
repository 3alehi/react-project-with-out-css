import React, { Component } from 'react'

export default class User extends Component {
 
  remove(id){
    this.props.onRemove(id)
 
  }
  render() {
    return (
      <div>
        <h1>{this.props.name} <button onClick={this.remove.bind(this, this.props.id)}>click</button></h1>
      </div>
    )
  }
}
