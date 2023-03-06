import React, { Component } from 'react'
import "./Shopped.css"

export default class Shopped extends Component {
    deleteproduct(id){
        this.props.onDelete(id)
    }
  render() {
    let {id,name,price,img} = this.props
    return (
      <div className='shopped'>
        <img className='img' src={img} alt="" />
        <h1>{name}</h1>
        <h2>{price}</h2>
        <button onClick={this.deleteproduct.bind(this,id)} className='Dele'>Delete</button>
      </div>
    )
  }
}
