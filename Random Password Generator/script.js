const passwordBox = document.getElementById('password');
const lenght = 12; // password lenght

const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const number = '0123456789';
const symbol = '@#$%^&*()_+~|}{[]></-=';
const allChars = upperCase + lowerCase + number + symbol;


createPass = () =>{
    let password = '';
    password += upperCase[Math.floor(Math.random() * upperCase.length)]; // geting a random upperCase character // getting a random index
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)]; // geting a random lowerCase character
    password += number[Math.floor(Math.random() * number.length)]; // geting a random number
    password += symbol[Math.floor(Math.random() * symbol.length)]; // geting a random symbol
    // getting only the first four characters but making sure we get one of each

    while(lenght > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)]; // adding one random character until the password is 12
    }
    passwordBox.value = password; // making the input value equal with passowrd
}

copyPass = () => {
    passwordBox.select(); // this will select the text
    document.execCommand('copy'); // and this comand will copy the text
}