import './index.css'

const TodoItem = props => {
  const {todoTask, onDeleteTodo} = props
  const {title, id} = todoTask

  const deleteTodoTask = () => {
    onDeleteTodo(id)
  }
  return (
    <li className="todo">
      <p className="todo-text">{title}</p>
      <button className="del-btn" type="button" onClick={deleteTodoTask}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
