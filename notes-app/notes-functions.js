console.log(uuidv4())
const getSavedNotes = () => {
	const notesJSON = localStorage.getItem("notes");
	if (notesJSON !== null) return JSON.parse(notesJSON);
	else return [];
};

// Generate the DOM structure for the note
const generateNoteDOM = note => {
  const noteEl = document.createElement("div");
  const textEl = document.createElement("span");
  const button = document.createElement('button');

  // Setup the remove note button
  button.textContent = "x"
  noteEl.appendChild(button);

  // Setup the note title text
	if (note.title.length > 0) textEl.textContent = note.title;
  else textEl.textContent = "Unnamed Note";
  noteEl.appendChild(textEl);
	return noteEl;
};

const renderNotes = (notes, filters) => {
	const filteredNotes = notes.filter(note => {
		return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
	});
	document.querySelector("#notes").innerHTML = "";
	filteredNotes.forEach(note => {
		const noteEl = generateNoteDOM(note);
		document.querySelector("#notes").appendChild(noteEl);
	});
};

const saveNotes = (notes) => localStorage.setItem("notes", JSON.stringify(notes));