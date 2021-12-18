import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import TodoList from "./TodoList";
import store from "./store";
import "./index.css";

function App() {
  return (
    <Provider store={store}>
      <div>
        <TodoList />
      </div>
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
