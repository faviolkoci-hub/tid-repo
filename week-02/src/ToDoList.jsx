import { useState, useEffect } from "react";
import NewTodoForm from "./NewTodoForm.jsx";
import TodoItem from "./TodoItem.jsx";
import "./todoList.css";
import { fetchTodos, createTodo, setTodoDone, deleteTodo } from "./services/todoService.js";

export default function ToDoList({ firstName }) {
  let h1Style = { color: "deeppink", backgroundColor: "white" };
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    async function load() {
      setTodoList(await fetchTodos());
    }
    load();
  }, []);

  async function handleAdd(text) {
    const created = await createTodo(text);
    setTodoList([...todoList, created]);
  }

  async function handleToggle(id) {
    const todo = todoList.find((t) => t.id === id);
    await setTodoDone(id, !todo.done);
    setTodoList(todoList.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  }

  async function handleRemove(id) {
    await deleteTodo(id);
    setTodoList(todoList.filter((t) => t.id !== id));
  }

  return (
    <div className="todo-body">
      <h1 style={h1Style}>To Do List for {firstName}</h1>
      <NewTodoForm onAdd={handleAdd} />
      {todoList.length === 0 ? (
        <p>Nothing to do. Enjoy the afternoon.</p>
      ) : (
        <ul>
          {todoList.map((todo) => (
            <TodoItem key={todo.id} todo={todo} onToggle={handleToggle} onRemove={handleRemove} />
          ))}
        </ul>
      )}
    </div>
  );
}