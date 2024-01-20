import InProgress from './InProgress'
import StartedToDo from './StartedToDo'
import '../styles/AllTodos.css'

const AllTodos: React.FC = () => {

    return <div className='Alltodos-container'>
        <div className='todos-container'>
        <InProgress/>
        <StartedToDo/>
        </div>
    </div>
}

export default AllTodos;