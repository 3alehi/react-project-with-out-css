import "./Box.css"
import React, { Component } from 'react'
import { Button } from "react-bootstrap"
export default class Box extends Component {
    constructor() {
        super()
        this.state = {
            product: [
                { id: 1, name: "xiaomi", price: 125, img: "logo192.png", lorem: "this is update phone" },
                { id: 2, name: "samsung", price: 500, img: "logo192.png", lorem: "this is update phone" },
                { id: 3, name: "apple", price: 1500, img: "logo192.png", lorem: "this is update phone" },
                { id: 4, name: "nokia", price: 269, img: "logo192.png", lorem: "this is update phone" },
                { id: 5, name: "poco m3", price: 178, img: "logo192.png", lorem: "this is update phone" },
            ]
        }
    }
    clg1(id){
        this.props.onAddProduct(id)
    }
    render() {
        return (
            <div>
                <div className='welcome mt-3'>
                    <span className='text'>Welcom to product Web</span>

                </div>
                <div className="Box-product">

                    {this.state.product.map(product => (
                        <div key={product.id} className='Box'>
                            <img className="img" src={product.img} alt="" />
                            <h1>{product.name}</h1>
                            <h3>${product.price}</h3>
                            <p>{product.lorem}</p>
                            <Button onClick={this.clg1.bind(this,product.id)}  variant="success" className="m-3"> click</Button>

                        </div>
                    ))}

                </div>

                <hr />
            </div>
        )
    }
}
