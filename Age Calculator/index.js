let userInput = document.getElementById('date');
userInput.max = new Date().toISOString().split('T')[0]; // this line will make impossible to select future dates
let result = document.getElementById('result');

// new Date() creates a new Date object representing the current date and time.
// toISOString() converts the date object to a string in the ISO 8601 format.
// .split('T')[0] splits the string at the 'T' character (which separates date and time in ISO 8601 format) and selects the date part.

calculateAge = () =>{
    let birthDate = new Date(userInput.value); // when we select any date in userInput will be stored in birthday

    let d1 = birthDate.getDate(); // this will get us the day selected (number format)
    let m1 = birthDate.getMonth() + 1; // So, whenever you're working with Date objects in JavaScript, remember to adjust for zero-indexing, whether you're dealing with months or days of the week.
    let y1 = birthDate.getFullYear();

    let today = new Date();

    let d2 = today.getDate(); // this will get us today 'day'
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let d3, m3, y3;

    y3 = y2 - y1; // this will get us year gap

    if(m2 >= m1){
        m3 = m2 - m1;
    }else{
        y3--;
        m3 = 12 + m2 - m1;
    }

    if(d2 >= d1){
        d3 = d2 - d1;
    }else{
        m3--; // here we decreasing the month so there is a posibility that the month will became negative so we have no make another if 
        d3 = getDaysInMonth(y1,m1) + d2 - d1; // getDaysInMonth(y1,m1) because d1 is higher in this case 
    }
    if(m3 < 0){ // in this case will make m3 = 11 and will decrease the year
        m3 = 11;
        y3--;
    }
    result.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months and <span>${d3}</span> days old!`;
}

getDaysInMonth = (year, month) =>{ // function is designed to return the number of days in a given month of a specific year
    return new Date(year, month, 0).getDate();
}
//creates a Date object representing the last day of the previous month. By passing 0 as the day parameter, it effectively represents the last day of the previous month.
//.getDate() is then called on this Date object to retrieve the day of the month, which effectively gives the number of days in the specified month.