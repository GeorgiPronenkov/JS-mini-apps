function validate() {

	let username = $('#username');
	let email = $('#email');
	let password = $('#password');
	let confirmPassword = $('#confirm-password');
	let companyCheckBox = $('#company');
	let companyNumber = $('#companyNumber');
	let companyInfo = $('#companyInfo');
	let submitBtn = $('#submit');
	let validationDiv = $('#valid');
	let allIsValid = true;

	//checkbox mark/unmark
	companyCheckBox.on('change', function () {
		if (companyCheckBox.is(':checked')) {
		    companyInfo.css('display', 'block');
		} else {
		    companyInfo.css('display' ,'none');
		}
	});

	//submit button
	submitBtn.on('click', function (ev) {
		ev.preventDefault();
		validateForm();
		validationDiv.css('display', allIsValid ? 'block' : 'none');
		allIsValid = true;
	});

	//validate
	function validateForm() {
		validateInputWithRegEx(username, /^[A-Za-z\d]{3,20}$/g);
		validateInputWithRegEx(email, /^.*?@.*?\..*$/g);
		if (confirmPassword.val() === password.val()) {
		 	validateInputWithRegEx(password, /^\w{5,15}$/g);
		 	validateInputWithRegEx(confirmPassword, /^\w{5,15}$/g);
		} else {
		    confirmPassword.css('border', 'solid red');
		    password.css('border', 'solid red');
		    allIsValid = false;
		}
	}

	//regEx
	function validateInputWithRegEx(input, pattern) {
		if (pattern.test(input.val())) {
		    input.css('border', 'none');
		} else {
		    input.css('border', 'solid red');
		    allIsValid = false;
		}
	}

	//validate company info
	function validateCompanyInfo() {
		let numValue = Number(companyNumber.val());
		if (numValue >= 1000 && numValue <= 9999) {
		    companyNumber.css('border', 'none');
		} else {
		    companyNumber.css('border', 'solid red');
		    allIsValid = false;
		}
	}
}
