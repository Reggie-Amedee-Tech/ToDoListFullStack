import React from 'react';
import CreateTodo from './components/CreateTodo';
import AllTodos from './views/AllTodos'
import SpecificToDo from './views/SpecificToDo'
import UpdateToDo from './components/UpdateToDo';

import { Routes, Route } from 'react-router-dom';



const App: React.FC = () => {
  return <div>
    <Routes>
      <Route path='/' element={<><CreateTodo/><AllTodos/></>}/>
      
      
      <Route path='/:id' element={<SpecificToDo />}/>
      <Route path='/:id/edit' element={<UpdateToDo />}/>
      </Routes>
  </div>
}

export default App;
