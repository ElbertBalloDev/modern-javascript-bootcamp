let name = "Elbert Ballo";

console.log(name.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase());

let password = '123abcpassword098';
console.log(password.includes("password"));

let str = '       this is what happens'; 
console.log(str);
console.log(str.trim());

const isValidPassword = password => password.length > 8 && !password.includes("password");

console.log(isValidPassword("12233"));
console.log(isValidPassword("sdfsdf23423fwefsefsdf"));
console.log(isValidPassword("password123jgyigiuh233"));