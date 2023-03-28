import logo from './logo.svg';
import './App.css';
import Calendar from "react-calendar"
import TodoList from "./TodoList";

import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function App() {
  return (
    <div className="App">
        <h1>ToDo List</h1>
          <TodoList/>
    </div>
  );

}

export default App;
