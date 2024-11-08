import { useState } from "react";
import { useNotesContext } from "../hooks/useNotesContext";


const NoteFrom = () => {
  const { dispatch } = useNotesContext();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const note = { title, description };

    const response = await fetch("http://localhost:4000/notes", {
      method: "POST",
      body: JSON.stringify(note),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setTitle("");
      setDescription("");
      setError(null);
      console.log("new note added", json);
      dispatch({type: 'CREATE_NOTES', payload: json});
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Note</h3>

      <label>Note Title:</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <label>Note Text:</label>
      <input
        type="text"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />

      <button>Add Note</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default NoteFrom;
