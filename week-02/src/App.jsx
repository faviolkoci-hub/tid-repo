import "./App.css";
import ToDoList from "./ToDoList.jsx";

function App() {
  const annasToDoList = [
    { id: "anna-1", text: "Call the landlord", done: false },
    { id: "anna-2", text: "Book the dentist", done: false },
  ];
  const konstantinaToDoList = [
    { id: "konstantina-1", text: "Buy milk", done: false },
    { id: "konstantina-2", text: "Book the dentist", done: false },
  ];

  return (
    <>
      <ToDoList firstName={"Anna"} todos={annasToDoList} />
      <ToDoList firstName={"Konstantina"} todos={konstantinaToDoList} />
    </>
  );
}

export default App;