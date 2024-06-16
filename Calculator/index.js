let input = document.getElementById('display');

function appendToDisplay(value) {
    let currentValue = document.getElementById('display').value;
    if (currentValue.length < 14) {
      document.getElementById('display').value += value;
    }
} // we added this function so we can limit the length of the input

negativePositive = () =>{
    let number = parseInt(input.value);
    if(number > 0){
        input.value = '-' + input.value; // this will add '-' if the input is positive
    }
    if(number < 0){
        input.value = input.value.slice(1); // this will remove the first character wich will be the '-'
    }
}