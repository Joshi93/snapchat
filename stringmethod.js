//string methods
//length: Retruns the length of the string
//toUpperCase(): Converts the entire string to uppercase
//toLowerCase(): Converts the entire string to lowercase
//charAt(index): Returns the character at the specified index
//indexOf(): Returns the index of the first occurence of the specified substring
//lastIndexOf(): Returns the index of the last occurence of the specified substring
//slice(): Extracts a section of the string
//substring: it is used to get a particular portion in the string
//replace(): Replaces the specified value with a new value
//replaceAll: Replace all the specified character in the given string
//trim(): removes whitespace from both ends of the string
//split(): splits the string into an array of substring
//join: it is used to join the words
//concat(): joins two ro more strings
//startsWith(): Checks if the string starts with the specified substring
//endsWith(): Checks if the string ends with the specified substring
//includes(): Checks if the string contains the specified substring

let a = "hi hello java welcome java to the coding world java";
console.log(a.length);
console.log(a.toUpperCase());
console.log(a.toLowerCase());
console.log(a.charAt(7));
console.log(a.indexOf("h"));
console.log(a.lastIndexOf("h"));
console.log(a.slice(4));
console.log(a.substring(0,10));
console.log(a.replace("java","js"));
console.log(a.replaceAll("java","javascript"));
console.log(a.trim());
console.log(a.split(""));
console.log(a.split(" ").join(""));
console.log(a.concat(" Checks if the string contains the specified substring"));
console.log(a.startsWith("j"));
console.log(a.endsWith("a"));
console.log(a.includes("x"));

let b="chennai city center"
console.log(b.replaceAll("c","C"));