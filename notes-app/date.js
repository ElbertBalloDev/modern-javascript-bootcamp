
const now = new Date();
const timeStamp = now.getTime();
const myDate = new Date(timeStamp);
console.log(myDate.getFullYear());

// console.log(`Year: ${now.getFullYear()}`);
// console.log(`Month: ${now.getMonth()}`);
// console.log(`Date: ${now.getDate()}`);
// console.log(`Hours: ${now.getHours()}`);
// console.log(`Minutes: ${now.getMinutes()}`);
// console.log(`Seconds: ${now.getSeconds()}`);

const date1 = new Date("June 5 1986 03:43:01");
const timeStamp1 = date1.getTime();

const date2 = new Date("March 21 1989 03:43:01");
const timeStamp2 = date2.getTime();

const older = timeStamp1 < timeStamp2 ? date1.toString() : date2.toString();
console.log(`${older}`)