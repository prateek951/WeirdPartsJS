//ARRAY IS A COLLECTION AND CONTAINS MANY THINGS TOGETHER

var arr = [1,2,3];

//JS FIGURES OUT WHAT THINGS TO PUT ON THE FLY AND CAN HOLD ELEMENTS OF DIFFERENT TYPES AS WEL UNLIKE OTHER LANGUAGES

console.log(arr[0]);	//1


arr.push(32);	//1 2 3 32

arr.unshift(33);	// 33 1 2 3 32

arr.shift(); // 1 2 3 32

arr.pop();	//1 2 3

console.log(arr);


var a = [

1,

false,

{
	name : 'Lorem',

	address : 'Ipsum'

},

function(name) {

	var greeting = 'Hello';

	console.log(greeting + name);

},
"hello"


];

console.log(a);

a[0] = 1;

console.log(a[0]);

console.log(a[3](a[2].name));

console.log(a[3]("Prateek"));

//ARRAYS CAN EVEN HOLD FUNCTIONS AND WE CAN CALL THEM


//arguments AND SPREAD

//arguments CONTAINS A LIST OF ALL THE VALUES AND ALL THE PARAMETERS THAT YOU PASS TO THE FUNCTIONS

function greet(firstname,lastname,language)

{

	//if no arguments are passed

	if(arguments.length){

		console.log('Missing parameters');

	}

	language = language || 'en';

	console.log(firstname);

	console.log(lastname);

	console.log(language);

	console.log(arguments);	//automatically available to me by JS engine when the execution context was created

	console.log(arguments[0]);	//This is same as above console.log(firstname)

	//argumants is an array that holds all the arguments a function is passed with

	console.log(arguments.length);
}

greet();	//CALLING WITHOUT ARGUMUMENTS WILL GIVE THREE undefined FOR ABOVE LOGS.

greet('John');	//John undefined undefined

greet('John','Doe','English');	//HOISTING

//USING THE SPREAD OPERATOR USING ...

//...other MEANS WRAP UP ALL THE PARAMETERS IN THE JAVASCRIPT ARRAY


greet('...others');


//USING THE SPLICE METHOD ON THE ARRAY


var ca = [1,'Prateek','Madaan',true];

console.log(ca.splice(ca.indexOf(1),1));

console.log(ca[1]);
