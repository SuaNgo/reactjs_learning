"use client";
import { useEffect, useState } from "react";
import FormTodo from "./FormTodo";
import TodoItems from "./TodoItems";

const TodosList = () => {
  const [todos, setTodos] = useState(() => {
    const local = localStorage.getItem("ITEM");
    if (local == null) return [];
    return JSON.parse(local);
  });

  useEffect(() => {
    localStorage.setItem("ITEM", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (title) => {
    setTodos((currentTodo) => {
      return [...currentTodo, { id: Math.random(), title, checked: false }];
    });
  };

  const toggleCheckbox = (id, checked) => {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, checked };
        }

        return todo;
      });
    });
  };

  const deleteHandle = (id) => {
    setTodos((currentTodo) => {
      return currentTodo.filter((todo) => todo.id !== id);
    });
  };

  return (
    <div>
      <FormTodo onSubmit={addTodo} />
      <TodoItems
        todos={todos}
        deleteHandle={deleteHandle}
        toggleCheckbox={toggleCheckbox}
      />
    </div>
  );
};

export default TodosList;
