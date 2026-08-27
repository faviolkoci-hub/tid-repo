import { useState } from "react";

const SAMPLE_TASKS = ["Buy milk", "Call the landlord", "Book the dentist"];

function randomTask() {
  return SAMPLE_TASKS[Math.floor(Math.random() * SAMPLE_TASKS.length)];
}

function TodoItem({ text }) {
  return <li className="todo-item">{text}</li>;
}

export default function TodoList() {
  const [todos, setTodos] = useState(["Buy milk"]);

  function handleAdd() {
    setTodos([...todos, randomTask()]);
  }

  return (
    <>
      <h1>My To-Do ({todos.length})</h1>
      <ul>
        {todos.map((text, index) => (
          <TodoItem key={index} text={text} />
        ))}
      </ul>
      <button onClick={handleAdd}>Add</button>
    </>
  );
}