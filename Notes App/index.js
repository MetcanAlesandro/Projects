const notesContainer  = document.querySelector('.notes-container');
const createBtn  = document.querySelector('.btn');
let notes = document.querySelectorAll('.input-box'); // to select all the notes that will be created

showNotes = () => {
    notesContainer.innerHTML = localStorage.getItem('notes'); //notesContainer will be equal it whatever it's stored in notes
}

showNotes();

updateStorage = () => {
    localStorage.setItem('notes', notesContainer.innerHTML); // whatever it's stored notesContainer.innerHTML will be stored in the browser with the name notes
}

createBtn.addEventListener('click', () => { // clicking on create notes button adds the note
    let inputBox = document.createElement('p'); // creating the p tag
    let img = document.createElement('img'); // creating the img tag
    inputBox.className = 'input-box'; // adding input-box class
    inputBox.setAttribute('contenteditable', 'true'); // adding contenteditable atributte and setting it's value to true
    img.src = 'images/delete.png'; // making img.src equal with the right image
    notesContainer.appendChild(inputBox).appendChild(img); // and appending input box and img to the div tag
}); // we can create as manny notes as we want


notesContainer.addEventListener('click', function(e){
    if(e.target.tagName === 'IMG'){ // if we click on the image; ! tag name works only in capital letters
        e.target.parentElement.remove(); // the all div will be remove
        updateStorage(); // to store the fact tha was deleted
    }
    else if(e.target.tagName === 'P'){ // if we write anything on p tag we also need to save the data, and will make this available for each note
        notes = document.querySelectorAll('.input-box'); // I need this line to asign any new note created p tag created 
        notes.forEach(nt => { // nt short for notes
            nt.onkeyup = function(){ // onkeyup is triggered when the user release a key
                updateStorage(); // we update storage basically after every key it's pressed
            }
        })
    }
}); // it doesn't save empty notes