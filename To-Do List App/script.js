const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container'); 

function addTask(){
    if(inputBox.value === ''){
        alert('You must write something!');
    }
    else{
        let li = document.createElement('li'); // we create a li element
        li.innerHTML = inputBox.value; // we make equal to what's in input (innerText works as well)
        listContainer.appendChild(li); // and then we append the new li element to listContainer which has the id for the ul from HTML

        let span = document.createElement('span'); // creating a span element
        span.innerHTML = '\u00d7'; // cross icon
        li.appendChild(span); // and we append this to the li element
    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener('click', function(e){ // in list container we have that 'ul'
    if(e.target.tagName === 'LI'){ // will check were in the ul we clicked (li or span); 'LI' in this case
        e.target.classList.toggle('checked'); // we add the 'checked' class but we used toggle so if the class is already there it will be removed
        saveData(); // we called save data to save the data(we call this whenever we made a change and we want to save data)
    }
    else if(e.target.tagName === 'SPAN'){ // if we click on the span <=> with the 'x'
        e.target.parentElement.remove(); // we remove the parent element wich is the li element 
        saveData();
    }
}, false);

saveData = () => {
    localStorage.setItem('data', listContainer.innerHTML); // localStorage to store the data and .setItem('key name', keyValue); here we are storing the ul
};

showTask = () => { // to display the data when we reload the site
    listContainer.innerHTML = localStorage.getItem('data'); // the ul will be equal with the data we saved
}

showTask(); // and we have to call the function

/*
In summary, while innerText and innerHTML are used for accessing or modifying text or HTML content within elements, 
.value is specifically used with form elements to interact with their values. Each property serves its own purpose in manipulating different aspects of DOM elements in JavaScript.*/

// Exersise: add sublist posibilities to practice