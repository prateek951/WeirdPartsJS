
//CLASSICAL EXAMPLE OF FUNCTIONAL PROGRAMMING


function mapForEach(arr,fn){

	var newArr = [];

	for(var i=0;i<arr.length;i++){

		newArr.push(fn(arr[i]));

	}

	return newArr;

}


var arr1 = [1,2,3];

console.log(arr1);	//1 2 3

var arr2 = mapForEach(arr1,function(item){

		return item	* 2;
})

console.log(arr2);	// 2 4 6

//FUNCTIONAL PROGRAMMING

var arr3 = mapForEach(arr2, function(item){

		return item>2;

});

console.log(arr3);


//UNDERSCOREJS LIBRARY HELPS US TO WORK WITH ARRAYS COLLECTIONS AND OBJECTS










