let imgBox = document.getElementById('img-Box');
let qrImage = document.getElementById('qrImage');
let qrText = document.getElementById('qrText');

generateQR = () =>{
    if(qrText.value.length > 0) { // if we have some text
        qrImage.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + qrText.value; // will img src equal with the QR api link + value we have in the input text
        imgBox.classList.add('show-img'); // and we add this class edited in css to the div that containts the img, but this class will apply only when the image is diplayed
    }else{
        qrText.classList.add('error'); // and if we have no text will add the class error to the input; that was also edited in css to shake the input value
        setTimeout(()=>{ // and we added a time out of one second, after that the class will be removed
            qrText.classList.remove('error');
        }, 1000);
    }
} // here I obviously didn't need to use async function because the code was syncronous, we didn't need to wait for any response for the server
