/*When the page loads, have a button on the DOM that says 'generate'. 
 *Upon clicking on that button, append a new container onto the DOM.
 *That container should have two buttons, one that reads 'delete', 
 *the other that reads 'change'.
 *Additionally, there should be text that provides a number. 
 -The number should be the number of times the 'generate' button has been clicked.

 -The delete button should delete JUST the container that the button is in.
 -The change button should change the background-color of the container to red.
 -The default or 'normal' state of the background-color should be yellow. 
 -Clicking the button a second time should change it back to yellow, 3rd time red, 4th time yellow, etc.

  -Do not add in anything additional beyond what is required. The goal is not to be clever here, it is simply to execute on the provided instructions.

Once you are complete, check your work into a new repo and post it on GitHub.
*/

var counter = 0;

$(document).ready(function(){
	$('#generate').append('<button class="generate-button">Generate</button>');

	$('.generate-button').on('click', appendDom);
	$('.generate-button').on('click', '.delete-button');
	$('.generate-button').on('click', '.change-button');
	$('.generate-button').on('click', appendDom);

});

function appendDom(){

	counter++;

	var $el = $('#generate').children().last();
	$el.data("value", counter);

	$('#generate').append('<button class="delete-button">Delete</button>');
    $('#generate').append('<button class="change-button">Change</button>');
    $('#generate').append(counter);
}

