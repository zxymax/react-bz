import TodoList from "./TodoList";
import { Alert } from "antd";

function App() {
  return (
    <div className="App">
      <header
        className="App-header"
        style={{ marginTop: "10px", padding: "10px 10px" }}
      >
        <Alert
          style={{ marginTop: "10px", padding: "10px 10px" }}
          message="Antd UI TodoList"
          type="success"
        />
        <TodoList />
      </header>
    </div>
  );
}

export default App;
