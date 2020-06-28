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

// const findNote = function (notes, noteTitle) {
// 	const index = notes.findIndex(function (note, index) {
// 		return note.title.toLowerCase() === noteTitle.toLowerCase();
// 	});
// 	return index !== -1 ? notes[index] : "No Match";
// };

// const findNote = function (notes, noteTitle) {
// 	const note = notes.find(function (note, index) {
// 		return note.title.toLowerCase() === noteTitle.toLowerCase();
//   });
// 	return note !== undefined ? note : "No Match";
// };

// const note = findNote(notes, "Physical strengsdfsfdth");
// console.log(note);

// console.log(notes.length);
// console.log(notes);

// const index = notes.findIndex(function(note, index){
//   return note.title === 'Habits to work on'
// })

// console.log(index)

const sortNotes = function (notes) {
	notes.sort((a, b) => {
		if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
		else if (b.title.toLowerCase() < a.title.toLowerCase()) return 1;
		else return 0;
	});
};

const findNotes = (notes, query) => {
	return notes.filter((note, index) => {
		const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase());
		const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase());
		return isTitleMatch || isBodyMatch;
	});
};

//console.log(findNotes(notes, "Work"));
sortNotes(notes);
console.log(notes);