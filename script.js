var form = document.getElementById("form").addEventListener("submit", (e) => {

    e.preventDefault();
    var first_name = document.getElementById("first-name")
    var last_name = document.getElementById("last-name")
    var address = document.getElementById("address")
    var pincode = document.getElementById("pincode")
    var state = document.getElementById("state")
    var country = document.getElementById("country")

    let table = document.getElementById("table")
    let row = table.insertRow()

    let td1 = row.insertCell()
    td1.innerHTML = first_name.value

    let td2 = row.insertCell()
    td2.innerHTML = last_name.value

    let td3 = row.insertCell()
    td3.innerHTML = address.value

    let td4 = row.insertCell()
    td4.innerHTML = pincode.value

    var gender = document.getElementsByName("gender")
    let td5 = row.insertCell();
    for(i = 0; i < gender.length; i++){

        if(gender[i].checked){
            td5.innerHTML = gender[i].value;
        }
    }

    var foodLists = document.querySelector("#foods");
    var td6 = row.insertCell();

    for(i = 0; i < foodLists.length; i++){
        if (foodLists[i].selected){
            td6.innerHTML += foodLists[i].value + "<br />"
        }
    }

    let td7 = row.insertCell()
    td7.innerHTML = state.value

    let td8 = row.insertCell()
    td8.innerHTML = country.value


    document.querySelector("#first-name").value="";
    document.querySelector("#last-name").value="";
    document.querySelector("#address").value="";
    document.querySelector("#pincode").value="";
    document.querySelector("#male").checked=false;
    document.querySelector("#female").checked=false;
    document.querySelector("#foods").value="";
    document.querySelector("#country").value="";
    document.querySelector("#state").value="";

    })