import React from "react";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [note, setNote] = React.useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(preValue => {
      return {
        ...preValue,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    })
    event.preventDefault();
  }

  const [inputExpand, setInputExpand] = React.useState(false);
  function handleClick() {
    setInputExpand(true);
  }

  return (
    <div>
      <form className="create-note">
        {inputExpand && (<input name="title" placeholder="Title" onChange={handleChange} value={note.title} />)}
        <textarea name="content" placeholder="Take a note..." rows={inputExpand ? 3 : 1} onChange={handleChange} onClick={handleClick} value={note.content} />
          <Zoom in={inputExpand}>
            <Fab onClick={submitNote}>
              <AddIcon />
            </Fab>
          </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;