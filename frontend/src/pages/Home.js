import { useEffect } from "react";
import { useNotesContext } from "../hooks/useNotesContext";

//componets
import NoteDetails from "../components/NoteDetails";

const Home = () => {
  const { notes, dispatch } = useNotesContext();

  useEffect(() => {
    const fetchNote = async () => {
      const response = await fetch("http://localhost:4000/notes");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_NOTES", payload: json });
      }
    };

    fetchNote();
  }, []);

  return (
    <div className="home">
      <div className="notes">
        {notes &&
          notes.map((note) => <NoteDetails key={note._id} note={note} />)}
      </div>
    </div>
  );
};

export default Home;
