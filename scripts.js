var intCountDown = 10;
$(document).ready(function(){

	$("#click-me").click(function() {
		console.log("button was clicked!");
		setInterval(decrementCount, 1000);
	});

	function decrementCount() {
		if (intCountDown >= 0) {
			$("#change-me").html(intCountDown);
			intCountDown--;
		}
		else {
			$("#change-me").html("The countdown has ended!");
		}
	}

});

