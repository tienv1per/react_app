import logo from '../logo.svg';
import '../App.css';
import Nav from '../views/Nav';
import { useState } from 'react';
import Todo from '../views/Todo';

function App_useState() {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [todos, setTodos] = useState([
        {id: 1, watching: 'Netflix and Chill'},
        {id: 2, watching: 'Spotify Camp Nou'}
    ]);
    
    const handleVentClick = () => {
        setName(address);
    }

    const handleName = (event) => {
        setAddress(event.target.value);
    }

    const handleTodo = () => {
        const len = todos.length;
        const newTodo = {id: len+1, watching: address};
        setTodos([
            ...todos,
            newTodo
        ]);
    }

  return (
    <div>
        <h1>HELLO {name}</h1>
        <input value={address} onChange={(event) => handleName(event)}/>
        <button onClick={(event) => handleVentClick()}>Submit</button><br/><br/>
        <button 
            style={{height: '40px', width: '130px', margin: '15px'}}
            onClick={handleTodo}
        >
            Add Todo List
        </button>
        <Todo todos={todos}/>
    </div>
  )
}

export default App_useState