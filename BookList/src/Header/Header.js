import "./Header.css"
import React, { Component } from 'react'
import {BsBookHalf} from 'react-icons/bs'

export default class Header extends Component {
  render() {
    return (
      <div>
       
        <h1 className="h1"><span><BsBookHalf/></span> this is a library</h1>

      </div>
    )
  }
}
