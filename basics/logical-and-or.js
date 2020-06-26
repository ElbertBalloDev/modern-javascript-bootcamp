let temp = 98;

if (temp >= 60 && temp <= 90) console.log("It is pretty nice out");
else if (temp <= 0 || temp >= 120) console.log("Do not go outside");
else console.log("ehh Do what you want");

let isGuestOneVegan = false; 
let isGuestTwoVegan = false; 

if(isGuestOneVegan && isGuestTwoVegan) console.log('Only Vegan dishes');
else if (isGuestOneVegan || isGuestTwoVegan) console.log('Some Vegan and Non Vegan Dishes');
else console.log("Anything on the menu");