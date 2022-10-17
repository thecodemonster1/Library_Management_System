var selectedRow = null

// Form Submit Function
function onFormSubmit() {
    // check validity
    if (validate()) {
        // store user data
        var formData = readFormData();
        // check empty row
        if (selectedRow == null)
        {
            // Insert New User Record
            insertNewRecord(formData);
        }
        else
        {
            // Update New User Record
            updateRecord(formData);
        }
        // Reset Input Values
        resetForm();
    }
}
// Get Values From Form
function readFormData() {
    var formData = {};
    // Get Values From  Input
    formData["name"] = document.getElementById("name").value;
    formData["sid"] = document.getElementById("sid").value;
    formData["centre"] = document.getElementById("centre").value;
    formData["year"] = document.getElementById("year").value;
    formData["semester"] = document.getElementById("semester").value;
    formData["cgpa"] = document.getElementById("cgpa").value;
    formData["email"] = document.getElementById("email").value;
    // return Form Data
    return formData;
}
// Insert New User Record
function insertNewRecord(data) {
    var table = document.getElementById("stdlist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.userName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.sID;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.stdClass;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.tsub;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.age;
    cell5 = newRow.insertCell(5);
    cell5.innerHTML = `<a onClick="onEdit(this)">Edit</a>
    <a onClick="onDelete(this)">Delete</a>`;
}
// Reset Function
function resetForm() {
    document.getElementById("userName").value = "";
    document.getElementById("sID").value = "";
    document.getElementById("stdClass").value = "";
    document.getElementById("tsub").value = "";
    document.getElementById("age").value = "";
    selectedRow = null;
}
// Edit Function
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("userName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("sID").value = selectedRow.cells[1].innerHTML;
    document.getElementById("stdClass").value = selectedRow.cells[2].innerHTML;
    document.getElementById("tsub").value = selectedRow.cells[3].innerHTML;
    document.getElementById("age").value = selectedRow.cells[4].innerHTML;
}
// Update Record
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.userName;
    selectedRow.cells[1].innerHTML = formData.sID;
    selectedRow.cells[2].innerHTML = formData.stdClass;
    selectedRow.cells[3].innerHTML = formData.tsub;
    selectedRow.cells[4].innerHTML = formData.age;
}
// Delete Function
function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("stdlist").deleteRow(row.rowIndex);
        resetForm();
    }
}
// Check User validation
function validate() {
    isValid = true;
    // userName validation
    if (document.getElementById("userName").value == "") {
        isValid = false;
        document.getElementById("userNamevalidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("userNamevalidationError").classList.contains("hide"))
        {
            document.getElementById("userNamevalidationError").classList.add("hide");
        }
    }
    // Roll No validation
    if (document.getElementById("sID").value == "") {
        isValid = false;
        document.getElementById("sIDvalidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("sIDvalidationError").classList.contains("hide"))
        {
            document.getElementById("sIDvalidationError").classList.add("hide");
        }
    }
    // Std class validation
    if (document.getElementById("stdClass").value == "") {
        isValid = false;
        document.getElementById("stdClassvalidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("stdClassvalidationError").classList.contains("hide"))
        {
            document.getElementById("stdClassvalidationError").classList.add("hide");
        }
    }
    // Tsub validation
    if (document.getElementById("tsub").value == "") {
        isValid = false;
        document.getElementById("tsubvalidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("tsubvalidationError").classList.contains("hide"))
        {
            document.getElementById("tsubvalidationError").classList.add("hide");
        }
    }
    // Age validation
    if (document.getElementById("age").value == "") {
        isValid = false;
        document.getElementById("agevalidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("agevalidationError").classList.contains("hide"))
        {
            document.getElementById("agevalidationError").classList.add("hide");
        }
    }
    return isValid;
