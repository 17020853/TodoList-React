import React from "react";
import Todo from "./Todo";

const TodoList = ({
  listTodos,
  setTodoByIdWithUpdate,
  removeTodoById,
  checkTodo,
  completeTodoByID,
  checkList,
  updateTodoById
}) => {
  return (
    <section>
      <ul className="todo-list">
        {listTodos.map((todo, index) =>
          todo ? (
            <Todo
              index={index}
              key={index}
              todo={todo}
              checkList={checkList}
              setTodoByIdWithUpdate={setTodoByIdWithUpdate}
              removeTodoById={removeTodoById}
              checkTodo={checkTodo}
              completeTodoByID={completeTodoByID}
              updateTodoById={updateTodoById}
            />
          ) : (
            ""
          )
        )}
      </ul>
    </section>
  );
};

export default TodoList;
