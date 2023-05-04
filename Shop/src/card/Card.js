import "./Card.css"
import Box from "../Box/Box"
import {Button} from "react-bootstrap"
import React, { Component } from 'react'

export default class Card extends Component {
    constructor(){
        super()
        this.addProductToCard = this.addProductToCard.bind(this)
        this.state={
            product: [
                { id: 1, name: "xiaomi", price: 125, img: "logo192.png", lorem: "this is update phone" },
                { id: 2, name: "samsung", price: 500, img: "logo192.png", lorem: "this is update phone" },
                { id: 3, name: "apple", price: 1500, img: "logo192.png", lorem: "this is update phone" },
                { id: 4, name: "nokia", price: 269, img: "logo192.png", lorem: "this is update phone" },
                { id: 5, name: "poco m3", price: 178, img: "logo192.png", lorem: "this is update phone" },
            ],
            BuyCard: []
        }
    }
    deleteProduct(id){
      let oldBuy = this.state.BuyCard
      let findDeleteBuy = oldBuy.findIndex(product =>{
        return product.id == id
       
      })
      oldBuy.splice(findDeleteBuy,1)
     this.setState({
        BuyCard : oldBuy
        
      })









    }
    addProductToCard(idproduct){
        let addproduct = this.state.product.find(product =>{
            return product.id == idproduct
        })
        this.setState((prevproduct) =>{
            return{
                BuyCard: [...prevproduct.BuyCard ,addproduct ]

            }

        })   
    }
  render() {
    return (
      <div>
        <Box onAddProduct={this.addProductToCard}></Box>
        <div className="Card-welcom">


{this.state.BuyCard.map(priduct=>(
  <div key={priduct.id} className="Card-Buy">

  <img src={priduct.img}alt="" />
  <h3>{priduct.name}</h3>
  <h3>{priduct.lorem}</h3>
  <p> ${priduct.price}</p>
  <Button  onClick={this.deleteProduct.bind(this,priduct.id)} variant="danger">Cansel</Button>
  </div>
))}



        </div>
      </div>
    )
  }
}
