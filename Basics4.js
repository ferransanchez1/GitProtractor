var name ="Francesc"; // String literal declaration

//Return the character in the position 3 -> n
console.log(name.charAt(3));

//Concatenació de dos strings -> FrancescRamallo
var newname=name.concat("Ramallo");
console.log(newname);

//Print the position of character -> 3
console.log(name.indexOf("n"));

//starting index is inclusive (r) and ending index is exclusive (cesc)
console.log(name.slice(1, 4));

//Print the string in uppercase -> FRANCESC
console.log(name.toUpperCase());

var name ="Rahul ";
//trim() is used to print only the name without the final space
console.log(name.trim());

var name2=new String("VICENTE");  // string object declaration
console.log(name2.toLowerCase()); //convert string to lowercase