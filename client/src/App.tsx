import React from 'react';
import CreateTodo from './components/CreateTodo';
import AllToDos from './views/AllToDos';



const App: React.FC = () => {

  return <div>
      <CreateTodo />
      <AllToDos />
  </div>
}

export default App;
