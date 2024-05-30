import React from 'react'

const TodoList = (props) => {
  return (
    <>
    <div className='todo_style'>
    <i className='bx fa_items bx-x' onClick={()=>{props.onSelect(props.id)}} ></i>
        <li>{props.text}</li>
        </div>
    </>
  )
}

export default TodoList
