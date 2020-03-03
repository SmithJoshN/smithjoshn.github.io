var addNoteBtn = document.getElementById("addNoteBTN");
var noteTemplate = document.getElementById("noteTemplate");
var noteTitle = document.getElementById("noteTitle");
var noteBody = document.getElementById("noteBody");
var notes = document.getElementById("notes");

document.addEventListener("DOMContentLoaded", function(){
    noteTemplate.style.display = "none";
})


addNoteBtn.onclick = addNote;

function addNote(){
    if(noteTemplate.style.display == "none"){
        noteTemplate.style.display = "block";
    }
    else{
        if(noteTitle.value != "" && noteBody.value != ""){
            addNoteNode();
        }
        noteTemplate.style.display = "none"
    }
}

function addNoteNode(){
    let node = document.createElement("div");
    node.classList.add("note");
    let header = document.createElement("div");
    header.classList.add("noteTitle");
    header.innerHTML = noteTitle.value;
    let body = document.createElement("div");
    body.classList.add("noteBody");
    body.innerHTML = noteBody.value;
    let mover = document.createElement("div");
    mover.classList.add("mover");
    mover.innerHTML = "<img class='left' src='../assets/next.svg' onclick=\"move(this, 'left')\"><img class='trash' src='../assets/bin.svg' onclick=\"trash(this)\"><img class='right' src='../assets/next.svg' onclick=\"move(this, 'right')\">";
    node.appendChild(header);
    node.appendChild(mover);
    node.appendChild(body);
    notes.prepend(node);
}

function move(node, direction){
    let noteBlock = node.parentNode.parentNode;
    if(direction == 'left'){
        if(noteBlock.previousSibling != null){
            noteBlock.parentNode.insertBefore(noteBlock, noteBlock.previousSibling);
        }
    }else{
        if(noteBlock.nextSibling != null){
            noteBlock.parentNode.insertBefore(noteBlock.nextSibling, noteBlock);
        }
    }
}

function trash(node){
    let noteBlock = node.parentNode.parentNode;
    noteBlock.parentNode.removeChild(noteBlock)
}