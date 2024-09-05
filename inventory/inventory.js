

// var firebaseConfig = {
//     apiKey: "API_KEY",
//     authDomain: "PROJECT_ID.firebaseapp.com",
//     // The value of `databaseURL` depends on the location of the database
//     databaseURL: "https://DATABASE_NAME.firebaseio.com",
//     projectId: "PROJECT_ID",
//     storageBucket: "PROJECT_ID.appspot.com",
//     messagingSenderId: "SENDER_ID",
//     appId: "APP_ID",
//     // For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
//     measurementId: "G-MEASUREMENT_ID",
//   };
  
//   const app = initializeApp(firebaseConfig);
//   const database = getDatabase(app);



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
function multiply(){
    a=Number(document.getElementById('squantity').value);
    b=Number(document.getElementById('sprice').value);
    c=a*b;
    document.getElementById('stotal').value=c;
}

function readFormData() {
    var formData = {};
    formData["sname"] = document.getElementById("sname").value;
    formData["sprice"] = document.getElementById("sprice").value;
    formData["squantity"] = document.getElementById("squantity").value;
    formData["stotal"] = document.getElementById("stotal").value;
    formData["sattnd"] = document.getElementById("sattnd").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("ItemList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.sname;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.sprice;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.squantity;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.stotal;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.sattnd;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = `<a onClick="onEdit(this)">Edit / </a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("sname").value = "";
    document.getElementById("sprice").value = "";
    document.getElementById("squantity").value = "";
    document.getElementById("stotal").value = "";
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
    document.getElementById("sname").value =  selectedRow.cells[0].innerHTML;
    document.getElementById("sprice").value =  selectedRow.cells[1].innerHTML;
    document.getElementById("squantity").value =  selectedRow.cells[2].innerHTML;
    document.getElementById("stotal").value =  selectedRow.cells[3].innerHTML;
    document.getElementById("sattnd").value =  selectedRow.cells[4].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.sname;
    selectedRow.cells[1].innerHTML = formData.sprice;
    selectedRow.cells[2].innerHTML = formData.squantity;
    selectedRow.cells[3].innerHTML = formData.stotal;
    selectedRow.cells[4].innerHTML = formData.sattnd;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("ItemList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("sname").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}
function tableSearch() {
    let input, filter, table, tr, td, txtValue;

    //Intialising Variables
    input = document.getElementById("srch");
    filter = input.value.toUpperCase();
    table = document.getElementById("ItemList");
    tr = table.getElementsByTagName("tr");

    for (let i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }

}