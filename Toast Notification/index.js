let toastBox = document.getElementById('toastBox');

let successMsg = '<i class="fa-solid fa-circle-check"></i> Successfully submitted!'; // adding check mark from font fontawesome; here we added the color in css
let errorMsg = '<i class="fa-solid fa-circle-xmark" style="color:red"></i> Please fix the error!'; // we also added the color here and for invalind msg
let invalidMsg = '<i class="fa-solid fa-circle-exclamation" style="color:orange"></i> Invalid input, check again!';

showToast = (msg) =>{
   let toast = document.createElement('div'); // creating a div element
   toast.classList.add('toast'); // adding toast class which we edited in css
   toast.innerHTML = msg; // making toast = with msg parameter, called onclick with the appropiate arguments
   toastBox.appendChild(toast); // appending toast in that div

   if(msg.includes('error')){ // we still need to use this ifs to add the invalid and error classes so we can change the background color for the progress bar
    toast.classList.add('error');
   }
   if(msg.includes('Invalid')){
    toast.classList.add('invalid');
   }

   setTimeout(() =>{ // will remove toast after 6 seconds so the notifications will disappear
    toast.remove()
   }, 6000);
}