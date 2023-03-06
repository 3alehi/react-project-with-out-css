import React, { Component } from 'react'
import Shopped from './showShopped/Shopped'
import "./App.css"
import Box from "./Box/Box"
export default class App extends Component {
  constructor() {
    super()
    this.state = {
      product: [
        { id: 1, name: "Apple", price: "2$", img: "logo192.png" },
        { id: 2, name: "orange", price: "4$", img: "logo192.png" },
        { id: 3, name: "benana", price: "2.3$", img: "logo192.png" },
        { id: 4, name: "photeto", price: "1.5$", img: "logo192.png" },
      ],
      shopped:[]
    }
  }
  buyproduct(id){
    let findproduct = this.state.product.find(product =>{
      return product.id == id
    })
    this.setState(prevbuy=>{
      return{
        shopped: [...prevbuy.shopped , findproduct]
      }

    })
   
  }
  Delete(id){
    let find = this.state.shopped.findIndex(product =>{
      return product.id == id
  })
  let oldproduct = this.state.shopped
   oldproduct.splice(find,1)
  this.setState({
    shopped : oldproduct
  })
  }
  render() {
    return (
      <div>
        <div  className='product'>
        {
          this.state.product.map(product => (
            <Box key={product.id} {...product} onClick={this.buyproduct.bind(this)}/>



          ))
        }
        </div>
     <p className='br'></p>

{
  this.state.shopped.map(shopped=>(
    <Shopped key={shopped.id} {...shopped} onDelete={this.Delete.bind(this)}/>

  ))
}
      </div>
    )
  }
}
