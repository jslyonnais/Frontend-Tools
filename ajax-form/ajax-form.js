$(function() {

	var theForm		= $('#form');

	theForm.validate({
		rules: {
			fullName: {          	// Input name: fullName
				required: true,   	// Required boolean: true/false
				minlength: 5,       // Minimum length size
			},
			email: {              	// Input name: email
				required: true,   	// Required boolean: true/false
				email: true       	// Required boolean: true/false
			},
			subject: {            	// Input name: subject
				required: true,   	// Required boolean: true/false
				minlength: 5		// Minimum length size
			},
			message: {            	// Input name: message
				required: true,		// Required boolean: true/false
				minlength: 1		// Minimum length size
			}
		},
		messages: {              	// Messages to appear on error
			fullName: {
				required:"Please put your full name.",
				minlength:"Your name couldn't be so short!"
			},
			email: "Enter a valid email.",
			subject: {
				required: "Whats the topic?",
				minlength: ""
			},
			message: {
				required: "What did you want to say?",
				minlength: "Please complete your thoughts, then submit."
			}
		},
		submitHandler: function(form) {
			form.submit();
		}
	});	
});

