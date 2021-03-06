const titleElement = document.querySelector("#note-title");
const bodyElement = document.querySelector("#note-body");
const removeElement = document.querySelector("#remove-note");
const goBack = document.querySelector("#go-back");
const noteId = location.hash.substring(1);

let notes = getSavedNotes();
let note = notes.find(note => note.id === noteId);
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

window.addEventListener("storage", e => {
	if (e.key === "notes") {
		notes = JSON.parse(e.newValue);
		note = notes.find(note => note.id === noteId);
		note === undefined && location.assign("/");

		titleElement.value = note.title;
		bodyElement.value = note.body;
	}
});
