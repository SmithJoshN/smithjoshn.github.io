const titleBox = document.getElementById("create-new-title");
const noteArea = document.getElementById("create-new-area");
const notes = document.getElementById("notes");
const note1 = document.getElementById("note1").getElementsByClassName("content")[0];

let savedNotes = [{"title": "Dynamic Note", "content": "I was added from javascript! I am also really long and obnoxious and take up a lot of space in this block for testing purposessss....."}]

document.addEventListener("DOMContentLoaded", function(){
    savedNotes.forEach(element => {
        addNewNote(element.title, element.content)
    });
});

function boxFocus(){
    titleBox.style.display = "block";
    noteArea.style.color = "#fff";
    noteArea.innerHTML = ""
}

function titleBoxFocus(){
    titleBox.setSelectionRange(0,0);
}

function boxUnfocus(){
    console.log("unfocus");
    titleBox.style.display = "none";
    if(noteArea.innerHTML != ""){
        addNewNote(titleBox.innerHTML, noteArea.innerHTML);
        noteArea.innerHTML = "Take a note...";
        noteArea.style.color = "#999";
    }
}

function addNewNote(noteTitle, noteContent){
    let note = document.createElement("div");
    note.classList.add("note");
    let title = document.createElement("div");
    title.classList.add("title");
    title.innerHTML = noteTitle;
    let content = document.createElement("div");
    content.classList.add("content");
    content.innerHTML = noteContent;
    note.appendChild(title);
    note.appendChild(content);
    notes.prepend(note);
}