import { useState, useEffect } from "react";
import NewTodoForm from "./NewTodoForm.jsx";
import TodoItem from "./TodoItem.jsx";

function loadTodos(name, fallback) {
  const saved = localStorage.getItem(`todos-${name}`);
  return saved ? JSON.parse(saved) : fallback;
}

export default function ToDoList({ firstName, todos }) {
  let h1Style = { color: "deeppink", backgroundColor: "white" };
  const [todoList, setTodoList] = useState(() => loadTodos(firstName, todos));

  useEffect(() => {
    localStorage.setItem(`todos-${firstName}`, JSON.stringify(todoList));
  }, [todoList, firstName]);

  function handleAdd(text) {
    const newTodo = { id: crypto.randomUUID(), text, done: false };
    setTodoList([...todoList, newTodo]);
  }

  function handleToggle(id) {
    setTodoList(
      todoList.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  }

  function handleRemove(id) {
    setTodoList(todoList.filter((t) => t.id !== id));
  }

  return (
    <>
      <h1 style={h1Style}>To Do List for {firstName}</h1>

      <NewTodoForm onAdd={handleAdd} />

      {todoList.length === 0 ? (
        <p>Nothing to do. Enjoy the afternoon.</p>
      ) : (
        <ul>
          {todoList.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={handleToggle}
              onRemove={handleRemove}
            />
          ))}
        </ul>
      )}
    </>
  );
}