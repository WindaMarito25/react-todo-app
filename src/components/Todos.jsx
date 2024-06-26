import React from "react";
import TodoItem from "./TodoItem";

/*Function Todos component*/
const Todos = ({ todos }) => {
  return (
    <div style={styles.container}>
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </div>
  );
};

/*CSS Inline Style */
const styles = {
  container: {
    width: "40%",
    margin: "0 auto",
  },
};

export default Todos;
