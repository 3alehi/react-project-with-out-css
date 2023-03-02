import React, { Component } from 'react'
import logo from './logo.svg';
import User from "./Tiket/tiket"
import './App.css';
export default class App extends Component {
  constructor(){
    super()
    this.remove = this.remove.bind(this)
    this.state={
      user:[
        {id:1,name:"Slavik"},
        {id:2,name:"Masih"},
        {id:3,name:"Amir"},
        {id:4,name:"Ali"},
      ]
    }
  }
  remove(id){
    let old = this.state.user
    let find = old.findIndex(user=>{
      return user.id == id
    })
    old.splice(find,1)
    this.setState({
      user:old
    })
  }
  render(){
    return(
      <div>
        {this.state.user.map(user=>(
          <User {...user} key={user.id} onRemove={this.remove}/>

        ))}
      </div>
    )
  }

  
}
