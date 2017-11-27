//CLOSURES IS A JS TOPIC THAT IS VITAL TO MASTER 

//FOR MASTERING PRODUCTION CODING

//DIFFICULT TO UNDERSTAND

// A BIT OF CODE TO SHOW THE POWER OF CLOSURES

function greeting(whattosay){


	//return a function using the function expression

	return function(name) {

		console.log(whattosay + ' ' + name);

	}

}


greeting('Hi')('Prateek');

//INVOKING A FUNCTION THAT RETURNS A FUNCTION 

//AND THEN THE RETURNED FUNCTION CAN BE INVOKED

//WHEN I INVOKE THE greeting FUNCTION IT RETURNS A FUNCTION 

//WHICH CAN THEN AGAIN CAN BE INVOKED TO RETURN A VALUE


//CLOSURES

function buildFunction(){

	var arr = [];

	for(var i = 0; i<3;i++){

		arr.push(

			function(){

				console.log(i);

			}



			)

	}

	return arr;

}


var fs = buildFunction();

fs[0]();	//3
fs[1]();	//3
fs[2]();	//3



function buildFunctions2(){


	var arr = [];


		for(var i = 0;i<3;i++) {

			let j = i;

			//NOW LET ENABLES US TO DO BLOCK SCOPING 

			arr.push(function(){

				console.log(j);

			})

	}

	return arr;

}

var fs2 = buildFunctions2();

fs2[0]();	//0

fs2[1]();	//1

fs2[2]();	//2


//2ND WAY TO PRINT 0,1,2 USING IIFE

function buildFunctions3(){

	var arr = [];

	for(var i =0;i<3;i++){

		arr.push(

			(function(j){

				return function(){
					
					console.log(j);
				}
		
			}(i))

			//THREE EXECUTION CONTEXTS WILL BE CREATED

			)

	} 

	return arr;

}

var fs3 = buildFunctions3();

fs3[0]();

fs3[1]();

fs3[2]();




