const titleElement = document.querySelector("#note-title");
const bodyElement = document.querySelector("#note-body");
const removeElement = document.querySelector("#remove-note");
const goBack = document.querySelector("#go-back");
const noteId = location.hash.substring(1);
const notes = getSavedNotes();
const note = notes.find(note => note.id === noteId);
console.log(notes);
console.log(note);
note === undefined && location.assign("/");

titleElement.value = note.title;
bodyElement.value = note.body;

titleElement.addEventListener("input", e => {
	note.title = e.target.value;
	saveNotes(notes);
});

bodyElement.addEventListener("input", e => {
	note.body = e.target.value;
	saveNotes(notes);
});

removeElement.addEventListener("click", e => {
  removeNote(note.id);
	saveNotes(notes);
	location.assign("/");
});

goBack.addEventListener("click", () => {
	location.assign("/");
});
