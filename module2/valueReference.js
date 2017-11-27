

//CALL BY VALUE

var a = 3;

var b = true;

b = a;

//a is a reference pointing to location 0X201 where 3 is sitting

//b is a reference pointing to location 0x203 where true is physically sitting in the memory

//b = a WILL CREATE A COPY OF VALUE OF a and make a point to it


console.log(a); //3

console.log(b); //3


//a and b will be copies of each other

//I can change the value of a and it will not effect the value of a 

//because they are two different spots in memory.


  a = 2;

  console.log(a); //2

  console.log(b); //3


//BY REFERENCES (ALL OBJECTS INCLUDING FUNCTIONS)

var c = {

	greeting : 'Hi'

}

var d;

d = c;

//RATHER THAN SETTING UP NEW MEMORY SPACE FOR THE OBJECT

//THIS STATEMENT SIMPLY POINTS d TO POINT TO c


console.log(d);

console.log(c);

//IF I MUTATE c

c.greeting = 'Holla';

//d will also get mutated 

console.log(d.greeting);	//Holla

console.log(c.greeting);	//Holla

console.log(c);

console.log(d);


//by reference(even as parameters)

function changeGreeting(obj) {

	obj.greeting = 'Hola';
}

changeGreeting(d);

console.log(c);

console.log(d);

//equals operator set up a new memory space(new address)

c = {greeting : 'howdy'};

console.log(c);

console.log(d);


//ALL PRIMITIVE TYPES ARE BY VALUES AND ALL OBJECTS ARE PASSED BY REFERENCE


//OBJECTS,FUNCTIONS AND THIS

//THIS IS IMMEDIATELY AVAILABLE EVEN IN THE GLOBAL EXECUTION CONTEXT

console.log(this);	//WINDOW

//INSIDE THE BROWSER , THE GLOBAL OBJECT IS WINDOW

function are(){

	console.log(this);	//this points to the global object if you are simply invoking the function

	this.newVariable = 'hello';
}

are();	//EXECUTION CONTEXT CREATED WHEN are() IS INVOKED


var b = function(){

	console.log(this);	//this points to the global object 

}

b();	//A NEW EXECUTION CONTEXT IS CREATED WHEN b() IS INVOKED

console.log(newVariable);	//hello

//ASKING FOR A VARIABLE IN THE GLOBAL OBJECT


var c = {

	name : 'The c object',

	log : function(){

		this.name = 'Updated c object';

		console.log(this);

			//this points to object where that method is sitting inside of

		console.log(this.name);

		var setname = function(newname){

			this.name = newname;

		}
		setname('Updated again!! The c object');

		console.log(this);
	}

}

c.log();

