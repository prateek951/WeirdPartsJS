var person = {

	firstname : 'PRATEEK',

	lastname : 'MADAAN',

	getFullName : function(){

		var fullname = this.firstname + ' ' + this.lastname;

		return fullname;

	}


}


var logName = function(lang1,lang2){




	console.log('Logged:' + this.getFullName());

	console.log('Arguments ' + lang1 + ' ' + lang2);

}

var logPersonName = logName.bind(person);

//Bind creates the copy of the function


logPersonName('en');

logName.call(person,'en','es');

//call actually executes the function here we are binding this to the person

logName.apply(person,['en','es']);

//call and apply has only difference that we pass an array in the apply but in the


//call we pass the parameters directly


(function(lang1,lang2){

	console.log('Logged:' + this.getFullName())

	console.log('Arguments:' + lang1 + ' ' + lang2);



}).apply(person,['en','es']);

//FUNCTION BORROWING

var person2 = {

	firstName : 'Prateek',

	lastName : 'Madaan'

}


person.getFullName.apply(person2);

//SETTING this keyword to the person2 OBJECT

console.log(this.firstName);

//FUNCTION CURRYING

function multiply(a,b){

	return a*b;
}

var multiplyByTwo = multiply.bind(this,2);

//CREATING A COPY OF THE MULTIPLY USING THE BIND AND PASSING IT PARAMETERS

//BIND IT PERMANENTALLY PASSING 2 to a

console.log(multiplyByTwo(4));





