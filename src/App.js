import React, { useState } from 'react'
import TodoList from './TodoList'

const App = () => {
  const [inputList, setInputLis]=useState("")
  const [items, setitems] = useState([])
  const itemEvent = (event) => {
    setInputLis(event.target.value)
  }
  const Submit = ()=>{
    setitems((oldItems)=>{
      return [...oldItems, inputList]
    })
    setInputLis("")
  }
  const deleteItems = (id)=>{
    setitems((oldItems)=>{
      return oldItems.filter((arrElem, index)=>{
        return index!== id;
      })
    })
  }

  return (
    <>
      <div className='main_div'>
      <div className='center_div'>
        <br />
        <h1> ToDo List</h1>
        <br />
        <input type='test' placeholder='Add a Items' value={inputList} onChange={itemEvent} />
        <button onClick={Submit}> + </button>

        <ol>
        {
          items.map((itemval,index)=>{
            return(
              <TodoList key={index} id={index} onSelect = {deleteItems} text={itemval} />
            )
          })
        }
        </ol>
      </div>

      </div>
    </>
  )
}

export default App
