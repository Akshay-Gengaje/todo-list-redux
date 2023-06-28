import React, { useState, useEffect } from 'react';
import './Todo.css';
import store from '../../store/store';
import { addTask, deleteTask } from '../../store/actions.js';
export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  // const tasks = store.getState();
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const unsubcribe = store.subscribe(() => {
    setTasks(store.getState());
  });
  return (
    <div className="container">
      <div>
        <h2 className="text-center">Todo List</h2>
        <div className="row d-flex justify-content-center">
          <input
            className="col-8"
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter task"
          />
          <button
            className="col-3"
            onClick={() => {
              if (inputValue.trim() !== '') {
                store.dispatch(addTask(inputValue));
                setInputValue('');
              }
            }}
          >
            Add Task
          </button>
        </div>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <span>{task.task}</span>
              <button onClick={() => store.dispatch(deleteTask(task.id))}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
