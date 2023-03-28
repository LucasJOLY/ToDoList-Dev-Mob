import React, { useState } from 'react';
import './TodoList.css';
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faPen, faCheck, faXmark, faTrashCan} from '@fortawesome/free-solid-svg-icons'


function TodoList() {
    const [todos, setTodos] = useState([
        {text : "david", done : false},
        {text : "maxime", done : false},
        {text : "lucas", done : false}
    ]);
    const [inputValue, setInputValue] = useState('');
    const [editIndex, setEditIndex] = useState(-1);

    const addTask = () => {
        if (inputValue.trim() !== '') {
            if (editIndex === -1) {
                setTodos([...todos, { text: inputValue, done: false }]);
            } else {
                const newTodos = [...todos];
                newTodos[editIndex].text = inputValue;
                setTodos(newTodos);
                setEditIndex(-1);
            }
            setInputValue('');
        }
    };

    const editTask = (index) => {
        setEditIndex(index);
        setInputValue(todos[index].text);
    };

    const deleteTask = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    const taskDone = (index) => {
        const newTodos = [...todos];
        newTodos[index].done = !newTodos[index].done;
        setTodos(newTodos);
    };

    return (
        <div>
            <h1>Ma liste de tâches</h1>
            <div class="createForm">
                <input class="input_add"
                       type="text"
                       value={inputValue}
                       onChange={(e) => setInputValue(e.target.value)}
                />
                <span class="icons iconPlus"onClick={addTask}>{editIndex === -1 ? <FontAwesomeIcon icon={faPlus} /> : <FontAwesomeIcon icon={faCheck} /> }

            </span>
                {editIndex !== -1 && <span class="icons iconCancel" onClick={() => setEditIndex(-1)}><FontAwesomeIcon icon={faXmark    } /></span>}
            </div>

            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        <div id="index_num">{index+1}</div>
                        <div class="checkbox">
                        <input
                            type="checkbox"
                            checked={todo.done}
                            onChange={() => taskDone(index)}

                        />
                        {editIndex === index ? (
                            <input class="input_edit"
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                            />
                        ) : (
                            <div class="item_text" style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
                                {todo.text}
                            </div>
                        )}
                        </div>
                        <div class="buttons_list">
                        <div class="icons penIcon" onClick={() => editTask(index)}><FontAwesomeIcon icon={faPen} /></div>
                        <div class="icons trashIcon" onClick={() => deleteTask(index)}><FontAwesomeIcon icon={faTrashCan} /></div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
