import { listen } from "Router";
import react from "react"
import { useState } from "react"

const TodoList = () => {
  const [Todo, setTodo] = useState("");
  const [Todos, setTodos] = useState([]);
  const onSubmit = (e) => {
    e.prevetDefault()
    if(Todo === "") {
      return
    }
    setTodos((currentArray) => [Todo, ...currentArray])
    setTodo("")
  }
  const onChange = (e) => {
    setTodo(e.target.value)
  }
  return (
    <>
      <div>
        <form action="">
          <input type="text" placeholder="입력" onChange={onChange} value={Todo}/>
          <button>등록</button>
        </form>
        <ul>
          {Todo.localeCompare((item) => <li>{item}</li>)}
        </ul>
      </div>
    </>
  )
}

export default TodoList