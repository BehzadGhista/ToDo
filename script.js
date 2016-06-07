$(document).ready(function(){
    //sets background div's min height to height of device viewport
	$('#background').css("min-height",$(window).height());


    //Function to check # of table rows with .info class (Unfinished ToDos)
	var tasknumber = function() {
		var x = $('.table .info').length;
		$('#tasksRemaining').text(x);
	};

    //Called on document load
	tasknumber();

    //Adding a new ToDo
    var i = 1;
    $('#newTaskSubmit').click(function(){
        var toAdd = $('#newTask').val();
        var a = '<tr class="info" id="ToDo';
        var b = '">';
        var c = '<td><span class="glyphicon glyphicon-unchecked"></span></td><td class="taskDescription">';
        var d = '</td><td><input type="button" class="btn btn-danger deleteButton" name="x" value="x" /></td></tr>';

        $('.table').append(a + i + b + c + toAdd + d);
        i++;
        $('#newTask').val('');
        tasknumber();
        return false;        
    });


    //Deleting a ToDo
    $('.table').on('click', '.deleteButton', function() {
		$(this).closest('tr').remove();
		tasknumber();
    });

    //Marking a ToDo as Finished
    $('.table').on('click', '.glyphicon', function() {
    	$(this).toggleClass('glyphicon-check glyphicon-unchecked');
    	$(this).closest('tr').toggleClass('success info');
    	tasknumber();
    });


    ////Toggle Buttons

    //Toggles to show only Unfinished ToDos
    $('#buttonHolder').on('click', '.btn-danger', function() {
    	$('.success').hide();
    	$('.info').show();
    });
    //Toggles to show only Finished ToDos
    $('#buttonHolder').on('click', '.btn-success', function() {
    	$('.info').hide();
    	$('.success').show();
    });
    //Toggles to show all ToDos
    $('#buttonHolder').on('click', '.btn-default', function() {
    	$('tr').show();
    });
});


