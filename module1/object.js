
//CREATING A NEW OBJECT

//GOING TO SIT IN MEMORY

var person = new Object();

//GOING TO ADD PROPERTIES AND METHODS

person["first_name"] = 'Prateek';   //TO DYNAMICALLY DECIDE WHICH PROPERTY TO GET 

//GOING TO CREATE A SPOT IN MEMORY AND THIS OBJECT WILL ADDRESS THAT SPOT IN MEMORY AND REFER TO IT

//IT KNOWS WHERE IT IS IN THE MEMORY

person["last_name"] = "Madaan";

var firstNameProperty = "first_name";

console.log(person);    //Object

console.log(person[firstNameProperty]); //Prateek

//USING THE DOT OPERATOR

console.log(person.first_name); //Prateek

console.log(person.last_name);  //Madaan

//MAKING AN OBJECT SITTING INSIDE ANOTHER OBJECT

person.address = new Object();

//ADDING A PROPERTY

person.address.street = "111 Ashok Vihar";

person.address.city = 'New Delhi';

person.address.state = 'Delhi';

console.log(person.address.city);

console.log(person.address.street);

console.log(person.address.state);

console.log(person["address"]["state"]);

//OBJECTS ARE NAME-VALUE PAIRS SITTING IN MEMORY AND THEY CAN HAVE FUNCTIONS,PRIMITVES AND OTHER OBJECTS AS THEIR PROPERTY VALUES

//USE THE . OPERATOR UNLESS NO DYNAMIC ACCESS IS REQUIRED

//OBJECT LITERALS

var movie = {};

console.log(movie); //Object

var person = {

    first_name : 'Prateek',

    last_name : 'Madaan',

    address : {

        //address IS ANOTHER OBJECT

        street : '111 Ashok Vihar',

        city : 'New Delhi',

        state : 'Delhi'

    }


};

console.log(person.address.city);

console.log(person.address.street);

console.log(person.address.state);

console.log(person["address"]["state"]);

//WE CAN ALSO PASS AN OBJECT TO A FUNCTION ON THE FLY

//WE CAN CREATE AN OBJECT ON THE FLY

