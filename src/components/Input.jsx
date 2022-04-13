import React from "react";

const Input = ({ importantNotes, notes, inputValue, handleInput }) => {
  return (
    <>
      <p className="h6">
        {importantNotes
          ? `Te quedan ${
              notes.filter((note) => note.complete === true).length
            } notas importantes`
          : `Te queda${notes.length <= 1 ? "" : "n"} ${
              notes.filter((note) => note).length
            } nota${notes.length <= 1 ? "" : "s"} por completar`}
      </p>
      <input
        maxLength={200}
        className="form-control"
        value={inputValue}
        onChange={handleInput}
        type="text"
      />
    </>
  );
};

export default Input;
