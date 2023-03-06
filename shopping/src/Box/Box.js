import React, { Component } from 'react'
import "./Box.css"
export default class Box extends Component {
    constructor(){
        super()
        
    }
    buy(id){
        this.props.onClick(id)
       
    }
    render() {
        let {id,name,price,img,onClick} = this.props
    return (
        <div className='box'>
            <img src={img} alt="" />
            <h1>{name}</h1>
            <h2>{price}</h2>
            <button className='buy' onClick={this.buy.bind(this , id)}>Buy</button>

        </div>

    )
  }
}
