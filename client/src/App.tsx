import React from 'react';
import CreateTodo from './components/CreateTodo';
import AllToDos from './views/AllToDos';
import SpecificToDo from './views/SpecificToDo';
import UpdateToDo from './components/UpdateToDo'
import { Routes, Route } from 'react-router-dom';



const App: React.FC = () => {
  return <div>
    <Routes>
      <Route path='/' element={<CreateTodo />}/>
      <Route path='/allTodos' element={<AllToDos />}/>
      <Route path='/allTodos/:id' element={<SpecificToDo />}/>
      <Route path='/allTodos/:id/edit' element={<UpdateToDo />}/>
      </Routes>
  </div>
}

export default App;
