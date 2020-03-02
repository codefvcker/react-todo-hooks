import React from "react";
import { TodoPage } from "./pages/TodoPage";
import { TodoState } from "./context/todo/TodoState";

function App() {
  return (
    <TodoState>
      <div className="App">
        <TodoPage />
      </div>
    </TodoState>
  );
}

export default App;
