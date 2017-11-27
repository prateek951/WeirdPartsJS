$(document).ready(function() {
	
	//$('p.para1').css('color', 'red');

	// $('p.para1').css({
	// 	'color': 'red',
	// 	'backgroundColor': 'pink'
	// });

	// $('p.para2').addClass('myClass');


	// $('#button1').click(function(event) {

	// 	$('p.para2').toggleClass('myClass');
	// 	/* Act on the event */
	// });

	// $('#myDiv').text('Hello World');

	// $('#myDiv').html('<h1>Hello World</h1>');

	//APPEND AND PREPEND

	// $('ul').append('<li>AppendListItem');

	// $('ul').prepend('<li>Prepend List Item');


	// $('.para1').appendTo('.para2');

	// $('.para1').prependTo('.para2');

	// $('ul').before('<h1>Hello</h1>');

	// $('ul').empty();

	//empty removes only the containing elements of the container

	// $('ul').detach();

	// $('a').attr('target', '_blank');

	// console.log($('a').attr('href'));

	// $('a').removeAttr('target');

	// $('p').wrapAll('<h1>');

	// $('input#new_item').keyup(function(event) {
	// 	/* Act on the event */
	
	// 	var code = event.which;

	// 	if(code == 13){

	// 		event.preventDefault();

	// 		$('ul').append('<li>' + event.target.value + '</li>');
	// 	}


	// });


	//USING THE FOR EACH LOOP IN JQUERY

	// var a = ['Prateek','Madaan','Navneet','Juneja','Jose'];

	// $.each(a, function(index, val) {
	// 	 /* iterate through array or object */
	// 	console.log(val);

	// });

	// console.log(this);

	// var new_array = $('ul#list li').toArray();

	// $.each(new_array, function(index, val) {
	// 	 /* iterate through array or object */
	
	// 	 console.log(val);

	// });

	// $('#fadeOut').click(function(event) {
	// 	/* Act on the event */
	
	// 	$('#box').fadeOut();

	// });

	// $('#fadeIn').click(function(event) {
	// 	$('#box').fadeIn();

	// });

	// $('#fadeToggle').click(function(event) {
	// 	/* Act on the event */
	// 	$('#box').fadeToggle();

	// });

	// $('#fadeOut').click(function(event) {
	// 	/* Act on the event */
	
	// 	$('#box').fadeOut('slow', function() {
		
	// 		$('#fadeOut').text('Its gone!!');

	// 	});

	// });

	$('#moveright').click(function(event) {
		/* Act on the event */
		$('#box2').animate({
			left: 500,
			height : 250,
			width : 250
			});

	});

	$('#moveleft').click(function(event) {
		/* Act on the event */

		$("#box2").animate({
			left: 0});

	});


});


// console.log(this);