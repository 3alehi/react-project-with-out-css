import React, { Component } from 'react'
import AddBook from "./AddBook/addBook"
import Header from './Header/Header'



export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <AddBook/>


      </div>
      
    )
  }
}
