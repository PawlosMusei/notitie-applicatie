const NoteDetails = ({ note }) => {
  return (
    <div className="note-details">
      <h4>{note.title}</h4>
      <p>{note.description}</p>
      <p>{note.createdAt}</p>
    </div>
  );
};

export default NoteDetails;
