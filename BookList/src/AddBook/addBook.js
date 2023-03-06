import React, { Component } from 'react'
import ShowBook from '../ShowBook/showBook'
import "./AddBook.css"

export default class addBook extends Component {
    constructor(){
        super()
        this.state={
            name:"",
            nameBook:"",
            date:"",
            Books:[

            ]
        }
    }
    nameChange(e){
        this.setState({
            name: e.nativeEvent.target.value
        })

    }
    bookchange(e){
        this.setState({
            nameBook: e.nativeEvent.target.value
        })


    }
    datechange(e){
        this.setState({
            date: e.nativeEvent.target.value
        })

    }
    buttonChange(){
        let books = {name:this.state.name , Bookname: this.state.nameBook, date:this.state.date}
let oldbook = this.state.Books
oldbook.push(books)
        this.setState({
            books: oldbook,
            name:"",
            nameBook:'',
            date:''


        })
        
    }
  render() {
    return (
      <div>
        <div className='input'>
            <center>
            <input onChange={this.nameChange.bind(this)}  value={this.state.name} type="text" />
            <input  onChange={this.bookchange.bind(this)} value={this.state.nameBook} type="text" />
            <input  onChange={this.datechange.bind(this)} value={this.state.date} type="text" />
        <button onClick={this.buttonChange.bind(this)}>Add to Book List</button>
            </center>
         

        </div>
        <br />
        <br />
        <br />
        <br />
        <p className='br'></p>
        {
            this.state.Books.map(Book =>(
                <ShowBook {...Book}/>
            ))
        }

      </div>
    )
  }
}
