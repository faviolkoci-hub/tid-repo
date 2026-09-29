import { useState } from "react";
import "./App.css";
import ToDoList from "./components/ToDoList.jsx";
import Parse from "parse";
import AuthPage from "./pages/AuthPage.jsx";

Parse.initialize("y75wFR5G7qYFMOHQsaDMpreQwWHNz4MnMsqM0dxK", "CpsVz4509gfjmooO1w8ZfbJHJWjGiZgyPqtSzJKW");
Parse.serverURL = "https://parseapi.back4app.com"; // your PARSE_SERVER_URL

function App() {
  const [user, setUser] = useState(Parse.User.current());

  function handleAuthenticated(loggedInUser) {
    setUser(loggedInUser);
  }

  if (!user) return <AuthPage onAuthenticated={handleAuthenticated} />;

  return <ToDoList firstName={user.get("username")} userId={user.id} />;
}

export default App;