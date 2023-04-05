import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav.js';
import { useState } from 'react';
import Todo from './views/Todo';
import Covid from './views/Covid';
import Blog from './views/Blog';
import BlogDetail from './views/BlogDetail';
import AddNewBlog from './views/AddNewBlog';
import About from './views/About';
import NotFound from './views/NotFound';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
// import { CacheRoute, CacheSwitch } from 'react-router-cache-route';

// template + logic
// JSX
//babel

const App = () => { //class

  //state
  let [name, setName] = useState('TheShy'); //[a1, b1, c1....]
  const [address, setAddress] = useState('');
  const [todos, setTodos] = useState([
    { id: 'todo1', title: 'Watching Netflix and Chill', type: 'shy' },
    { id: 'todo2', title: 'Doing homework', type: 'shy' },
    { id: 'todo3', title: 'Playing game', type: 'shy' },
    { id: 'todo4', title: 'Reading books', type: 'tien' }
  ]);


  const handleEventClick = (event) => {
    if (!address) {
      alert('emtpy input');
      return;
    }

    let newTodo = { id: 'abc', title: address, type: 'shy' }
    setTodos([...todos, newTodo])
    setAddress('')
  }

  const handleOnchangeInput = (event) => {
    setAddress(event.target.value)
  }

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />    
        </header>

        <Routes>
          <Route path="/" exact="true" element={
            <div style={{display: ''}}>
              <h1>Hello world with React and {name}!</h1>
              <Todo 
                todos={todos} 
                title={'All todos'}
              />
              <input className='input-pro' style={{margin: '10px 5px', display: 'inline', width: '25%'}} type="text" value={address} onChange={(event) => handleOnchangeInput(event)} />
              <button className='button-pro' type="button" onClick={(event) => handleEventClick(event)}>Add Todos</button>
            </div>
            } 
          />
          <Route path="covid/" element={<Covid />} />
          <Route path="blogs/" element={<Blog/>} exact="true" />
          <Route path="blog/:id" element={<BlogDetail/>} />
          <Route path="add-blog" element={<AddNewBlog/>} />
          <Route path='about' element={<About/>} />
          <Route path='*' element={<NotFound/>} />
      </Routes>
      </div>
    </Router>

  );
}

export default App;