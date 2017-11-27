
//JSON IS INSPIRED BY THE OBJECT LITERAL SYNTAX

//OBJECT LITERAL


var Person = {

	first_name : 'Prateek',

	last_name : 'Madaan',

	isAProgrammer :  true


};


console.log(Person.first_name);

console.log(Person.last_name);

console.log(Person.isAProgrammer);

//JSON(SENDING DATA ACROSS THE INTERNET)

//STRING OF DATA IT LOOKS JUST LIKE OBJECT LITERAL

//WITH SOME DIFFERECES

//FOR AN OBJECT LITERAL TO BE CONVERTED TO JSON

console.log(JSON.stringify(Person));

//FOR JSON TO OBJECT LITERAL CONVERSION

//use JSON.parse({any valid JSON String})

