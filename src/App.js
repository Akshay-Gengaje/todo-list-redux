import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import TodoList from './Pages/Todo/TodoList';
import './style.css';

export default function App() {
  return (
    <>
      <Navbar />
      <TodoList />
    </>
  );
}
