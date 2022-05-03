var staffAttempts = 3;
var adminAttempts = 3;

function validateStaff() {
	var name = document.getElementById("staffUser").value;
	var pass = document.getElementById("staffPass").value;
	if (name == "Staff" && pass == "Staff") {
		window.location.href = "staff.html"
	}
	else {
		staffAttempts--;
		alert("Login Credentials Incorrect. Staff login attempts available : " + staffAttempts);
		if (staffAttempts == 0) {   
			alert("No Login Attempts Available");
			document.getElementById("staffUser").disabled = true;
			document.getElementById("staffPass").disabled = true;
			document.getElementById("staffSubmit").disabled = true;
		}
	}
	return false;
}

function validateAdmin() {
	var name = document.getElementById("adminUser").value;
	var pass = document.getElementById("adminPass").value;
	if (name == "Admin" && pass == "Admin") {
		window.location.href = "admin.html"
	}
	else {
		adminAttempts--;
		alert("Login Credentials Incorrect. Admin login attempts available : " + adminAttempts);
		if (adminAttempts == 0) {
			alert("No Login Attempts Available");
			document.getElementById("adminUser").disabled = true;
			document.getElementById("adminPass").disabled = true;
			document.getElementById("adminSubmit").disabled = true;
		}
	}
	return false;
}