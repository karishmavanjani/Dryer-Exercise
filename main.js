$(document).ready(
	function () {
		$('#img1').prop('disabled', true);
		$('.holdbuttons').on("click", function (e) {
			e.preventDefault();
			$('.holdbuttons').prop('disabled', false);
			$(this).prop('disabled', true);

			if (this.disabled) {
				console.log("IT'S WORKING");
				console.log("IT'S GROUPING MESSAGES");
			}
			// if (this.enabled) {
			// 	console.console.error("IT'S NOT WORKING");
			// }
			var x = $(this).data('picture');
			$('#aidsproject').attr('src', x);
		})
	}
)