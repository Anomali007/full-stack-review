import React from "react";

const ListEntry = props => (
  <div>
    {props.entry.todo}
    <button onClick={() => props.deleteTodo(props.entry._id)}>Delete</button>
  </div>
);

export default ListEntry;
