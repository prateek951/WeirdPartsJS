//FUNCTION FACTORIES ARE ONES THAT RETURNS OR MIXES OTHER THINGS FOR ME


function makeGreeting(language){

	return function (firstname,lastname){

		if(language === 'en'){

			console.log('Hello' + firstname + ' ' +  lastname);

		}


		if(language === 'es') {

			console.log('Hola' + firstname + ' ' + lastname);

		}



	}

}

var greetEnglish = makeGreeting('en');


var greetSpanish = makeGreeting('es');

greetEnglish('John', 'Doe');

greetSpanish('John', 'Doe');

//CLOSURES AND CAKKBACKS


function sayHiLater(){

	var greeting = 'Hi';


	setTimeout(function () {
	


		console.log(greeting);

	},3000)



}


sayHiLater();	//CLOSURES IS BEING USED IN THE SETTIMEOUT FUNCTIONS


//CALLBACK FUNCTIONS

function tellMeWhenDone (argument) {
	
	var a = 1000;

	var b = 2000;

	argument();


}

tellMeWhenDone(function(){

	console.log('I am done');

});

tellMeWhenDone(function(){
	
	console.log('Yoooooo!!!!');

})
