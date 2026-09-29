import "./App.css";
import ToDoList from "./ToDoList.jsx";
import Parse from 'parse';

Parse.initialize("y75wFR5G7qYFMOHQsaDMpreQwWHNz4MnMsqM0dxK", "CpsVz4509gfjmooO1w8ZfbJHJWjGiZgyPqtSzJKW");
Parse.serverURL = "https://parseapi.back4app.com"; // your PARSE_SERVER_URL

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