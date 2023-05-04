import React, { Component } from 'react'
import {BsSearchHeart} from 'react-icons/bs'
import  Card  from './card/Card'
import "./App.css"
import {Container , Navbar} from "react-bootstrap"
export default class App extends Component {
  render() {
    return (
      <div>

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">
            <img
              alt=""
              src="logo192.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            /> {" "}
            React Bootstrap
          </Navbar.Brand>
        </Container>
      </Navbar>

<Card></Card>
      </div>
    )
  }
}
