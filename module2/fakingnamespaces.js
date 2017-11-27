var greet = 'Hello';

var greet = 'Hola';

console.log(greet);

var english = {};

//Object will serve as container because of such nature of 

//namespaces we don't require namespaces

var spanish = {};


english.greet = 'Hello';

spanish.greet = 'Holla';

console.log(english);

console.log(spanish);

//ENSURE THERE IS NO NAMESPACE COLLISION

english.greetings = {};

english.greetings.greet = 'Hello Broda';

console.log(english.greetings.greet);

var english = {


	greetings : {

		greet : 'Grand Welcome'

	}


}

console.log(english.greetings.greet);