import React from "react";

const ListItem = ({ note, onChangeHandle, onHandleDelete }) => {
  const { id, task, complete } = note;
  return (
    <td className="d-flex" key={id}>
      <div class="form-check form-switch align-self-center">
        <input
          className="form-check-input"
          role="switch"
          checked={complete}
          onChange={() => onChangeHandle(id)}
          type="checkbox"
          id={task}
        />
      </div>
      <label
        style={{ wordWrap: "anywhere" }}
        class="form-check-label align-self-center"
        for={task}
      >
        {task}
      </label>
      <button
        style={{ height: "40px", alignSelf: "center" }}
        className="btn btn-danger ms-2"
        onClick={() => onHandleDelete(id)}
      >
        Delete
      </button>
    </td>
  );
};
export default ListItem;
