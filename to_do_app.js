// let jsondata = '';
// let apiUrl = 'https://jsonplaceholder.typicode.com/todos';

// async function getJson(url) {
// 	let response = await fetch(url);
// 	let data = await response.json();
// 	return data;
// }

// async function main() {
// 	//OPTION 1
// 	// getJson(apiUrl).then((data) => console.log(data));

// 	//OPTION 2
// 	jsondata = await getJson(apiUrl);
// 	console.log(jsondata);
// }

// main();

//* Step1 Creating XHR Object
var xhttp = new XMLHttpRequest();
//* Step4 Defining event listner for readystate change event
xhttp.onreadystatechange = function() {
	//* Step5 Check if the request is complete and was succesfull
	if (this.readyState == 4 && this.status == 200) {
		//* Step6 Inserting the response from server into body of the page

		var ajax_json = JSON.parse(this.responseText);

		var ajax_output = ''; //<div style="background-color:#e5e5e5;
		for (var i = 0; i < ajax_json.length; i++) {
			ajax_output +=
				'<li style="text-align:left;">' +
				ajax_json[i].title +
				`<input type="checkbox" name="" id="chk${i}">` +
				'</li>';
		}
		ajax_output += '';

		document.getElementById('content').innerHTML = ajax_output;
		// function test() {
		// 	var check_boxes = 0;

		// 	for (var i = 0; i <= 199; i++) {
		// 		temp_var = document.getElementById(`chk${i}`);

		// 		if (temp_var.checked == true) {
		// 			check_boxes += 1;
		// 		} else {
		// 		}
		// 		if (check_boxes == 5) {
		// 			break;
		// 		}
		// 	}
		// }
		var checkboxes = document.querySelectorAll('input[type=checkbox]');
		let enabledSettings = [];
		checkboxes.forEach(function(checkbox) {
			checkbox.addEventListener('change', function() {
				enabledSettings = Array.from(checkboxes).filter((i) => i.checked).map((i) => i.value);

				console.log(enabledSettings);
				to_do_main().then(alert).catch(function(e) {
					console.log('sorry you have not met the required tasks');
				});
			});
		});
		// document.querySelectorAll('.some-class').forEach(item => {
		//     item.addEventListener('change', event => {
		//       //handle click
		//     })
		//   })
		// function test2() {
		// 	// var check_boxes = 0;

		// 	// for (var i = 0; i <= 199; i++) {
		// 	// 	temp_var = document.getElementById(`chk${i}`);

		// 	if (enabledSettings.length == 5) {
		// 		alert('congrats 5 checkboxes have been checked');
		// 	} else {
		// 	}
		// }

		function to_do_main() {
			return new Promise(function(resolve, reject) {
				if (enabledSettings.length == 5) {
					resolve('Congrats You Have Completed 5 Tasks');
				} else {
					reject('sorry you have not completed the charted tasks');
				}
			});
		}
	}
};
//* Step2 Instantiating the requests object
xhttp.open('GET', 'https://jsonplaceholder.typicode.com/todos', true);
//* Step3 Sending the request to the server
xhttp.send();

var temp_var = undefined;
var check_boxes = 0;
//TODO Try adding event listner for listening to input events of all checkboxes, and
