/** @format */

let contactArray = [];
let id = 0;
function add() {
	let name = document.getElementById("name").value;
	let number = document.getElementById("number").value;
	let email = document.getElementById("email").value;
	function Contact(id, name, number, email) {
		this.id = id;
		this.name = name;
		this.number = number;
		this.email = email;
	}
	id++;
	const contact = new Contact(id, name, number, email);
	contactArray.push(contact);
	console.log(contactArray);
}

function remove() {
	let search = document.getElementById("search").value;
	contactArray.filter((contact) => {
		if (contact.id == search) {
			contactArray.pop(contact);
		} else {
			console.log(`data with id ${contact.name} was removed `);
		}
	});
}

function read() {
	for (var i = 0; i < contactArray.length; i++) {
		document.getElementById("response").innerHTML +=
			`${contactArray[i].name}` +
			(i + 1) +
			"<br>" +
			JSON.stringify(contactArray[i]) +
			"<br>";
	}
	contactArray = [];

	console.log(contactArray);
}
