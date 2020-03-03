const peopleList = document.getElementById("peopleList");
const newPersonBTN = document.getElementById("newPerson");

var people = {
    "Josh Smith": {
        "firstName": "Josh",
        "lastName": "Smith",
        "role": "creator",
        "dateAdded": "02/02/20",
        "opened": false
    },
    "Rae Smith": {
        "firstName": "Rae",
        "lastName": "Smith",
        "role": "creator's wife",
        "dateAdded": "02/02/20",
        "opened": false
    },
    "Leo Smith": {
        "firstName": "Leo",
        "lastName": "Smith",
        "role": "creator's son",
        "dateAdded": "02/02/20",
        "opened": false
    }
};

document.addEventListener("DOMContentLoaded", function(){
    Object.keys(people).forEach(function(key) {
        peopleList.appendChild(personNode(people[key]));
    });
});

function personNode(personDetails){
    let main = document.createElement("div");
    main.classList.add("person");
    main.id = "person";
    main.addEventListener("click", function(){
        if(!personDetails.opened){
            this.appendChild(personDetailsNode(personDetails));
            personDetails.opened = true;
        }
    })
    main.innerHTML = personDetails.firstName + " " + personDetails.lastName;
    return main;
}

function personDetailsNode(personDetails){
    let main = document.createElement("div");
    main.classList.add("personDetails");
    main.innerHTML = 
    `
    <button class="closeBTN" onclick="closeDetails(this)">[X]</button>
    <div class="firstName">
        <label>First Name</label>
        <input type="text" value="`+personDetails.firstName+`">
    </div>
    <div class="lastName">
        <label>Last Name</label>
        <input type="text" value="`+personDetails.lastName+`">
    </div>
    <div class="role">
        <label>Role</label>
        <input type="text" value="`+personDetails.role+`">
    </div>
    <div class="dateAdded">
        <label>Date Added: `+ personDetails.dateAdded + `</label>
    </div>`;

    return main;
}

function closeDetails(node){
    let jsonKey = node.nextElementSibling.getElementsByTagName("input")[0].value + " " + node.nextElementSibling.nextElementSibling.getElementsByTagName("input")[0].value;
    people[jsonKey].opened = false;
    let parent = node.parentNode.parentNode;
    parent.removeChild(node.parentNode);
    node.parentNode;
}

newPersonBTN.onclick = function(){
    var name = prompt("what is the persons name? (first last)");
    var role = "creator";
    while(role == 'creator' || role == "Creator" || role.includes("creator")){
        role = prompt("What is the persons role? (Can't be creator)");
    }
    addPerson(name, role);    
}

function addPerson(name, role){
    let date = new Date();
    let first = name.substring(0, name.indexOf(' '));
    let last = name.substring(name.indexOf(' ') + 1, name.length)
    let key = name;
    let value = {"firstName": first, "lastName": last, "role": role, "dateAdded": getDate(), "opened": false}
    let obj = {[key]: value};
    people = appendOnObject(people, obj);
    peopleList.appendChild(personNode(people[key]));
}

function getDate(){
    var currentDate = new Date()
    var day = currentDate.getDate()
    var month = currentDate.getMonth()
    var year = currentDate.getFullYear()
    return month + "/" + day + "/" + year;
}

function appendOnObject(object, appendPart){
    let objString = JSON.stringify(object);
    let shortened = objString.substring(0, objString.length - 1);
    let obj = shortened + "," + JSON.stringify(appendPart).substring(1, JSON.stringify(appendPart).length - 1) + "}"
    return JSON.parse(obj);
}