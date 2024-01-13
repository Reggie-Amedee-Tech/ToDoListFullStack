import {Router} from 'express';
import {getAllTodos, addToDos, updateTodo, deleteTodo} from '../controllers/ToDos';

const router: Router = Router();

router.get('/all-todos', getAllTodos);
router.post('/add-todo', addToDos);
router.put('/edit-todo/:id', updateTodo);
router.delete('/delete-todo/:id', deleteTodo);

export default router