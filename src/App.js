import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login/Login";
import Chat from "./components/Chat/Chat";
import { useSelector } from "react-redux";

function App() {
  const targetStatus = useSelector((state) => state.login.targetStatus);

  return (
    <div className="App">
      {targetStatus !== "connection" ? <Login /> : <Chat />}
    </div>
  );
}

export default App;
