let regexp_ob_1 = /admin/;
let regexp_ob_2 = /12345/i;
let email_label = document.getElementById('email_label');
let pwd_label = document.getElementById('pwd_label');
let email_obj = document.getElementById('email');
let pwd_obj = document.getElementById('pwd');
let timeout;
pwd_obj.addEventListener('input', () => {
	pwd_label.style.display = 'block';

	clearTimeout(timeout);
	timeout = setTimeout(() => validation(pwd_obj.value), 500);
	if (regexp_ob_2.test(pwd_obj.value.trim())) {
		pwd_label.style.display = 'none';
	} else {
		pwd_label.style.display = 'block';
	}
});

email_obj.addEventListener('input', () => {
	email_label.style.display = 'block';

	clearTimeout(timeout);
	timeout = setTimeout(() => validation(email_obj.value), 500);
	if (regexp_ob_1.test(email_obj.value.trim())) {
		email_label.style.display = 'none';
	} else {
		email_label.style.display = 'block';
	}
});
function redirect(value) {
	if (value == false) {
		return false;
	} else if (value == true) {
		return true;
	}
}
function validation(callback) {
	//
	pwd_label.innerText = '';
	email_label.innerText = '';

	if (email_obj.value.trim() == '' || pwd_obj.value.trim() == '') {
		if (email_obj.value.trim() == '') {
			email_label.innerText = 'email field should not be empty';
			email_label.style.color = 'red';
			pwd_label.innerText = '';
			email_label.style.display = 'block';
			pwd_label.style.display = 'none';
			return callback(false);
		} else if (pwd_obj.value.trim() == '') {
			pwd_label.innerText = 'password field should not be empty';
			pwd_label.style.color = 'red';
			email_label.innerText = '';
			email_label.style.display = 'none';
			pwd_label.style.display = 'block';
			return callback(false);
		}
	} else if (regexp_ob_1.test(email_obj.value.trim()) == false) {
		email_label.style.display = 'block';
		pwd_label.style.display = 'block';
		if (pwd_obj.value.trim() != '') {
			email_label.innerText = 'email invalid';
			email_label.style.color = 'red';
			pwd_label.innerText = '';
			return callback(false);
		} else {
			email_label.innerText = 'email invalid';
			email_label.style.color = 'red';
			return callback(false);
		}
	} else if (regexp_ob_1.test(email_obj.value.trim())) {
		email_label.style.display = 'block';
		pwd_label.style.display = 'block';
		if (regexp_ob_2.test(pwd_obj.value.trim()) == false) {
			email_label.innerText = '';
			pwd_label.innerText = 'password invalid';
			pwd_label.style.color = 'red';
			return callback(false);
		}
	} else {
		//TODO Important doubt to be rectified in js you know  if one code doesnt work the rest below does'nt work,so how should we find such errors, which stop below code from executing!!//

		email_label.style.display = 'block';
		pwd_label.style.display = 'block';
		if (regexp_ob_1.test(email_obj.value) == false) {
			return callback(false);
		} else {
			return callback(true);
		}
	}
}

//TODO **1.)TO DO LIST PAGE: Using API json data paste,page pwolipikanm,input box checkbox add
//TODO **2.)Promises 5 Checkbox valid yes- then alert box pop ,else nothing should happen
//TODO last responsive form, responsive image
