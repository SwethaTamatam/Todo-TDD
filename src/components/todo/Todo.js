import React, { useState } from 'react'

function Todo() {
    const [items,setItems]= useState([])
    const [todo, setTodo] = useState("")
    const clickHandler = (e)=>{
        setItems([...items,todo])
    }
    const changeHadnler =(e)=>{
        console.log(e.target.value)
        setTodo(e.target.value)
    }
  return (
    <div>
        <h1>Todo List</h1>
        <input type="text" placeholder='todo' onChange={changeHadnler}/>
        <button onClick={clickHandler}>add</button>
        {
            items.map((item,index)=>
                <h1 key={index}>{item}</h1>)
        }
    </div>
  )
}

export default Todo