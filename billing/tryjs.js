var selectedRow = null

let count = 0

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
            resetForm();
        }
        else{
            updateRecord(formData);
        resetForm();
        }
    }
}
function multiply(){
    a=Number(document.getElementById('squantity').value);
    b=Number(document.getElementById('srate').value);
    c=a*b;
    document.getElementById('stotal').value=c;
}


function readFormData() {
    var formData = {};
    formData["sno"] = document.getElementById("sno").value;
    formData["sname"] = document.getElementById("sname").value;
    formData["squantity"] = document.getElementById("squantity").value;
    formData["srate"] = document.getElementById("srate").value;
    formData["stotal"] = document.getElementById("stotal").value;
    count += parseInt(formData.stotal);
    // console.log("Total Amount",count);
    let htmldata='';
    htmldata=`
    <h5>${count}</h5>
    `
    document.getElementById("answer").innerHTML=htmldata;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("ItemList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.sno;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.sname;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.squantity;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.srate;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.stotal;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = `<a onClick="onEdit(this)">Edit / </a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("sno").value = "";
    document.getElementById("sname").value = "";
    document.getElementById("squantity").value = "";
    document.getElementById("srate").value = "";
    document.getElementById("stotal").value = "";
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
    document.getElementById("sno").value =  selectedRow.cells[0].innerHTML;
    document.getElementById("sname").value =  selectedRow.cells[1].innerHTML;
    document.getElementById("squantity").value =  selectedRow.cells[2].innerHTML;
    document.getElementById("srate").value =  selectedRow.cells[3].innerHTML;
    document.getElementById("stotal").value =  selectedRow.cells[4].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.sno;
    selectedRow.cells[1].innerHTML = formData.sname;
    selectedRow.cells[2].innerHTML = formData.squantity;
    selectedRow.cells[3].innerHTML = formData.srate;
    selectedRow.cells[4].innerHTML = formData.stotal;
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
    if (document.getElementById("sno").value == "") {
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
        td = tr[i].getElementsByTagName("td")[1];
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

function taxation(){
    perc=document.getElementById("tax").value;
    tax = document.getElementById("tax").value;
    // console.log(perc);
    ans=(count * tax)/100;
    document.getElementById("tax_id").innerHTML=ans;
    // console.log(ans);
    // console.log("Tax:",ans);
    // console.log("Im changing");

}

function finaladdition(){
    finaladd=count+ans;
    // console.log(finaladd);
    document.getElementById("total_amount").innerHTML=finaladd;
}



