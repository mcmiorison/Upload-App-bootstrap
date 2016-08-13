function startRead(evt){
	var file = document.getElementById('file').files[0];
	if(file){
		console.log("Name" + file.name );
		}
}

//Function to check username availabiltity

$(document).ready(function () {

    //the min chars for username  
    var min_chars = 10;

    //result texts  
    var characters_error = 'Minimum amount of chars is 10';
    var checking_html = 'Checking...';

    //when button is clicked  
    $('#check_username_availability').click(function () {
        //run the character number check  
        if ($('#username').val().length < min_chars) {
            //if it's bellow the minimum show characters_error text '  
            $('#username_availability_result').html(characters_error);
        } else {
            //else show the cheking_text and run the function to check  
            $('#username_availability_result').html(checking_html);
            check_availability();
        }
    });

});

