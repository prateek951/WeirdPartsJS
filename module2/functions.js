function greet() {


	console.log('Hi');

}

greet.language = 'English';

console.log(greet);

console.log(greet.language);	//English (because we know Function is an Object in JavaScript)

//IT IS IN MEMORY,LANGUAGE PROPERTY IS ATTACHED TO THE FUNCTION 

//BUT NOT A PART OF THE CODE PROPERTY HENCE IT IS NOT INVOCABLE.


console.log(greet());




//FUNCTION STATEMENTS AND EXPRESSIONS

var a;

//EXPRESSION IS A UNIT OF CODE THAT RETURNS A VALUE


//1+2 IS AN EXPRESSION AND RETURNS A VALUE

if(a === 3) {

	//if is just a statement it doesn't returns a value


}


//FUNCTION STATEMENTS

function greet(){

	console.log('Hi');

}


//THIS IS A FUNCTION STATEMENT AND DOESN'T RETURN A VALUE

//UNTIL IT IS INVOKED.

//IT GETS HOISTED DURING THE CREATION PHASE OF THE EXECUTION CONTEXT OF THE GLOBAL OBJECT


greet();	//INVOKES THE FUNCTION




//FUNCTION EXPRESSIONS

var anonymousGreet = function(){

	console.log('hi');

}

// ON THE RIGHT HANDSIDE WE HAVE AN EXPRESSION THAT RETURNS A VALUE

//VARIABLES anonymousGreet KNOWS WHERE THAT FUNCTION LIVES

//FUNCTIONS IN JS ARE OBJECTS SO WE CAN CREATE THEM ON THE FLY

//AND SETTING THEM EQUAL TO THIS VARIABLE

anonymousGreet();


//FUNCTION EXPRESSIONS AREN'T HOISTED


function log(a){

	console.log(a);

}

log(5);

