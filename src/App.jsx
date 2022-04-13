import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import ListNotes from "./components/ListNotes";
import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      task: "throw out the trash",
      complete: false,
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const [importantNotes, setImportantNotes] = useState(false);

  const handleInput = (e) => setInputValue(e.target.value);

  const onClickButton = () => {
    if (inputValue !== "") {
      if (
        notes.some(
          (element) => inputValue.toLowerCase() === element.task.toLowerCase()
        )
      ) {
        alert(`This task ${inputValue} already exists`);
        return null;
      }
      return (
        setNotes([...notes, { id: uuid(), task: inputValue, complete: false }]),
        setInputValue("")
      );
    }
  };

  const onChangeHandle = (id) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, complete: !note.complete } : note
      )
    );
  };

  const onHandleDelete = (id) => {
    setNotes(notes.filter((note) => (note.id === id ? !note.id : note)));
  };

  return (
    <div
      style={{
        backgroundColor: "#f7f2ee",
        minHeight: "100vh",
      }}
      className="container align-items-center justify-content-center d-flex flex-column"
    >
      <header
        style={{
          display: "flex",
          height: "100px",
          alignItems: "center",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <h1
          style={{
            lineHeight: "100px",
          }}
        >
          Note Book
        </h1>
      </header>
      <div className="row w-50 p-3">
        <Input
          importantNotes={importantNotes}
          notes={notes}
          inputValue={inputValue}
          handleInput={handleInput}
        />
        <Button
          importantNotes={importantNotes}
          onClickButton={onClickButton}
          setImportantNotes={setImportantNotes}
        />

        <ListNotes
          notes={notes.filter((note) =>
            importantNotes ? note.complete === true : note
          )}
          onChangeHandle={onChangeHandle}
          onHandleDelete={onHandleDelete}
        />
      </div>
      <footer></footer>
    </div>
  );
}

export default App;
