const notes = [
	{
		title: "next Vacation Time",
		body: "I would like to go to Spain",
	},
	{
		title: "Habits to work on",
		body: "Eat Better",
	},
	{
		title: "Physical Strength",
		body: "new Exercise",
	},
];

const filters = {
	searchText: "",
};

const renderNotes = (notes, filters) => {
	const filteredNotes = notes.filter(note => {
		return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
	});
	document.querySelector("#notes").innerHTML = "";
	filteredNotes.forEach(note => {
		const noteEl = document.createElement("p");
		noteEl.textContent = note.title;
		document.querySelector("#notes").appendChild(noteEl);
	});
};

renderNotes(notes, filters);

document.querySelector("#create-note").addEventListener("click", e => {
	e.target.textContent = "create button has been hit";
});

document.querySelector("#search-text").addEventListener("input", e => {
	filters.searchText = e.target.value;
	renderNotes(notes, filters);
});

document.querySelector('#for-fun').addEventListener("change", (e)=> {
  console.log(e.target.checked);
})