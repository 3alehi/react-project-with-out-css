import "./Todo.css"
import React, { useState } from 'react'
import {IoMdAddCircleOutline} from 'react-icons/io'
import{AiFillCloseCircle,AiOutlineCheckCircle} from 'react-icons/ai'


export default function Todo() {
    const [todo , setTodo] = useState([])
    const [inputValue , setValue] = useState(' ')
    
    function changevalue(e){
        setValue(e.target.value)
    }
    function setTodoList(){
        setTodo(prevvalue => [...prevvalue , inputValue])
        setValue('')
    }
    function deleteTodo(e){
        let todod = todo
        console.log(e)
    }
    window.addEventListener('keypress' ,(e)=>{
    if(e.key =="Enter"){
        setTodoList()
    }})
    
    
    return (
        <div >
        <center>
<h1>         Todi List
</h1>
        <input type="text" value={inputValue} onChange={changevalue} className="input" name="" id="" /> <IoMdAddCircleOutline onClick={setTodoList} className="font"></IoMdAddCircleOutline>
        </center>
{todo.map(todo =>(
    <div key={todo} className="Todoshow">

    <h3>{todo}</h3>
    <div>
    <AiFillCloseCircle onClick={deleteTodo} className="font"></AiFillCloseCircle>
    <AiOutlineCheckCircle  className="font"></AiOutlineCheckCircle>
    </div>
    </div>
))}

    </div>
  )
}
