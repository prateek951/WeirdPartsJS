//JAVASCRIPT DOESN'T HAVE FUNCTION OVERLOADING 


//OVERLOADING MEANS A FUNCTION WITH THE SAME NAME BUT DIFFERENT NUMBER OF PARAMETERS


function greet(firstname,lastname,language){


	language = language || null;

	if(language === 'en'){

		console.log('Hello' + firstname + lastname);

	}
	 
	if(language === 'es'){

		console.log('Hola' + firstname + lastname);

	}

}

//INVOKE THE GREET METHOD

greet("Prateek","Madaan","es");


function greetEnglish(firstname,lastname){


	greet(firstname,lastname,'en');

}

function greetSpanish(firstname,lastname){

	greet(firstname,lastname,'es');

}


greetEnglish('Prateek', 'Madaan');

greetSpanish('Enrique', 'Iglesias');


//ALWAYS PUT YOUR SEMICOLON AFTER EACH STATEMENT

//AUTOMATIC SEMICOLON INSETION MAY CAUSE PROBLEMS IN YOUR CODE

function getPerson() {

	return 	//COMPILER AUTOMATICALLY DOES SEMICOLON INSERTION WHICH IS DANGEROUS HERE

	//COMPILER IS TRYING TO BEHAVE WAY TOO SMART

	{

		firstname : 'Tony'

	}

}

console.log(getPerson());

//HERE WE ARE GETTING undefined BECAUSE SYNTAX PARSER DROPPED A SEMICOLON AGAINST THE RETURN 

//AND IT RETURNED undefined TO THE SPOT WHERE THE FUNCTION WAS CALLED


//TO FIX THIS USE { IN THE SAME LINE AS THE RETURN STATEMENT

//THE PARSER IN THIS CASE WILL SEE A SPACE AND A STARTINC CURLY BRACE AND COMES TO KNOW THAT 

//AN OBJECT LITERAL IS COMING TO PICTURE AND DOESN'T IMPLICITLY RETURN BY ITSELF

//IT IS VERY DANGEROUS AND CAN BE HARD TO TRACK DOWN

//CORRECT CODE

function getPerson() {

	return {

		firstName : 'Tony'

	}


}

console.log(getPerson());	//Here we get the Object

 //WHITESPACES ARE INVISIBLE CHARACTERS THAT CREATE LITERAL SPACE IN YOUR WRITTEN CODE



 var

 //first name of the person

 //COMMENTS ARE IGNORED BY THE COMPILTER JS ENGINE

  fname,

  //last name of the person

  lname,

  //the language can be en or es

  //WE ARE LIBERAL TO PUT WHITESPACES TO CLARIFY OUR CODE \

  //TO OTHER DEVELOPERS

  lang;

 var person = {

 	//FIRSTNAME ALWAYS REQUIRED

 	fname : 'Prateek',

 	// THE LAST NAME ALWAYS REQUIRED

 	lname : 'Madaan'

}

console.log(person);

//COMMENT THE CODE AS MUCH AS YOU CAN TO MAKE IT UNDERSTANDABLE TO OTHER DEVELOPERS


//IIFE(IMMEDIATELY INVOKED FUNCTION EXPRESSIONS)

//FUNCTION STATEMENT

function greet(name) {

	console.log('Hello' + name);

}

greet('Prateek');


//FUNCTION EXPRESSION

//JUST LIKE CREATING A FUNCTION LITERAL

//CREATING IT ON THE FLY

var greetFunc = function(name) {

	console.log('Hello' + name);

};

greetFunc('Prateek');

//INVOKE THE SPECIAL CODE PROPERTY ON THE FLY


var greeting = function(name){

	return 'Hello ' + name;

}('Prateek');	//INVOKES THE FUNCTION IMMEDIATELY AFTER CREATING IT

console.log(greeting);

3;	//VALID JS EXPRESSION IT RUNS AND EXECUTES AND DON'T DO ANYTHING WITH IT

"I am a string"; //SIMPLY LINE OF CODE BEING EXECUTED VALID JS EXPRESSION


var firstName = 'Prateek';

(function(name){

	return 'Hello' + name;

}(firstName));

//THIS STYLE IS USED IN ALMOST EVERY FRAMEWORK THAT WE ARE USING AT THE CURRENT DATE.

//INVOKED THE FUNCTION IMMEDIATELY AFTER CREATING IT

//WE USE PARENTHESIS TO GROUP AN EXPRESSION

//SINCE JS ENGINE KNOWS THAT EVERYTHING YOU HAVE WRITTEN WITHIN PARENTHESIS IS AN EXPRESSION

//THE FUNCTION STATEMENT IS ASSUMED AS A FUNCTION EXPRESSION BY THE JS ENGINE

(function(name){

	return 'Hello' + name;


}('Prateek'));

