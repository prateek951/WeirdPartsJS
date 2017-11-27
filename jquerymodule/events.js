$(document).ready(function() {
	
	// $('#button1').click(function(event) {
		
	// 	$('p.para1').toggle();

	// });

	// $('#button2').click(function(event) {

	// 	$('p.para1').show();

	// 		/* Act on the event */
	// });

	// $('#button1').dblclick(function(event) {

	// 	$('p.para1').toggle();
	// 	/* Act on the event */
	// });

	// $('#button1').hover(function() {
	// 	/* Stuff to do when the mouse enters the element */

	// 	$('p.para1').slideDown('slow', function() {
	// 		alert('THE PARAGRAPH IS SLIDING DOWN');	
	// 	});
	// }, function() {
	// 	/* Stuff to do when the mouse leaves the element */
	// 	$('p.para1').slideUp('slow',function(){
	// 		alert('THE PARAGRAPH IS SLIDING UP');
	// 	})

	// });

	// $('#button1').hover(function() {
	// 	$('#button2').hide();
	// }, function() { 
	// 	$('#button2').show();

	// });

	// $('#button1').mousemove(function(event) {
	// 	$('p.para1').hide();
	// });

	// $('#button1').mouseup(function(event) {

	// 	$('p.para1').toggle();
	// 	/* Act on the event */
	// });

	// $('#button1').click(function(event) {
		/* Act on the event */
		// console.log(event);

		// alert(event.currentTarget.id);

	// });


	// $('#button1').mousemove(function(event) {
		/* Act on the event */

		// console.log('Coordinates : Y' +event.clientY);
		// console.log('Coordinates : X' + event.clientX);
	// });

	//FORM EVENTS

	// $('input').focus(function(event) {
		
	// 	alert('Focus event is happening on me!! Save Me');
	

	// });

	// $('input#name').focus(function(event) {

	// 	$('input#name').css('backgroundColor', 'red');

	// 	/* Act on the event */
	// });

	//KEYUP AND KEYDOWN EVENTS

		// $('input').keyup(function(event) {
		// 	/* Act on the event */
		// 	console.log('Keyup');

		// 	console.log(event.target.value);
		// });

		// $('select#gender').change(function(event) {
		// 	/* Act on the event */
		// 	alert('Change Event is occuring on me');

		// 	console.log(event.target.value);

		// });

		$('#form').submit(function(event) {
			/* Act on the event */
			event.preventDefault();
			console.log('Submitted');

			var name = $('input#name').val();

			console.log(name);

		});


});