import React from 'react'

function Todo({todos}) {
  return (
    <div className='todos-container'>
        {todos.map((todo) => {
            return <li className='todo-child' key={todo.id}>{todo.watching}</li>
        })}
    </div>
  )
}

export default Todo