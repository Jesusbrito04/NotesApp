import React from "react";
import ListItem from "./ListItem";

const ListNotes = ({ notes, onChangeHandle, onHandleDelete }) => (
  <>
    <table className="table table-striped">
      <tbody>
        {notes.map((note) => (
          <tr>
            <ListItem
              key={note.id}
              note={note}
              onChangeHandle={onChangeHandle}
              onHandleDelete={onHandleDelete}
            />
          </tr>
        ))}
      </tbody>
    </table>
  </>
);

export default ListNotes;
