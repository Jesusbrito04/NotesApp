import React from "react";

const Button = ({ onClickButton, importantNotes, setImportantNotes }) => {
  return (
    <div className="row buttons">
      <div className="col-12 d-flex flex-wrap justify-content-center">
        <button
          className="btn btn-success btn-sm me-1 mb-3 mt-2"
          onClick={onClickButton}
        >
          Add task
        </button>
        <button
          className="btn btn-primary btn-sm ms-1 mb-3 mt-2"
          onClick={() => setImportantNotes(!importantNotes)}
        >
          {importantNotes ? "Show all" : "Importants"}
        </button>
      </div>
    </div>
  );
};

export default Button;
