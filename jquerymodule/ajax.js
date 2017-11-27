$(document).ready(function() {
	
	// $('#result').load('test.html',function(responseTxt,statusTxt,xhr){

	// 	if(statusTxt === 'success'){
	// 		alert('It went fine');	
	// 	}
	// 	else if(statusTxt === 'error'){
	// 		alert('Error' + xhr.statusText);
	// 	}

	// });

	// $.get('test.html', function(data) {
		

	// 	$('#result').html(data);

	// });


//MAKING GET REQUEST USING AJAX

	// $.ajax({
	// 		url: 'https://jsonplaceholder.typicode.com/posts',
	// 		type: 'GET',
	// 		dataType : 'json',
			
	// 	})
	// 	.done(function(data) {
	// 		$.map(data,function(post,value){

	// 			$('#result').append('<h3>' + post.title + '</h3><p>' + post.body + '</p>');
	// 		})
	// 		console.log("success");
	// 	})
	// 	.fail(function() {
	// 		console.log("error");
	// 	})
	// 	.always(function() {
	// 		console.log("complete");
	// 	});
	
// $('#former').submit(function(event) {
// 	/* Act on the event */
// 	event.preventDefault();

// 	//TAP THE TITLE 

// 	var title = $('#title').val();

// 	//TAP THE BODY

// 	var body = $('#body').val();

// 	var url = $(this).attr('action');

// 	$.post(url, {title:title,body:body}, function(data, textStatus, xhr) {
// 		/*optional stuff to do after success */
// 		console.log('Post saved');

// 		console.log(data);

// 	});


});



});