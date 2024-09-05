var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["sid"] = document.getElementById("sid").value;
    formData["sname"] = document.getElementById("sname").value;
    formData["sattnd"] = document.getElementById("sattnd").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.sid;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.sname;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.sattnd;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit / </a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("sid").value = "";
    document.getElementById("sname").value = "";
    document.getElementById("sattnd").value = "";
    selectedRow = null;
}

function onEdit(td) {
    var closePopup = document.getElementById("popupclose");
    var overlay = document.getElementById("overlay");
    var popup = document.getElementById("popup");
    var button = document.getElementById("button");

    
      overlay.style.display = 'block';
      popup.style.display = 'block';
    

    selectedRow = td.parentElement.parentElement;
    document.getElementById("sid").value = selectedRow.cells[0].innerHTML;
    document.getElementById("sname").value = selectedRow.cells[1].innerHTML;
    document.getElementById("sattnd").value = selectedRow.cells[2].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.sid;
    selectedRow.cells[1].innerHTML = formData.sname;
    selectedRow.cells[2].innerHTML = formData.sattnd;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("sid").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}