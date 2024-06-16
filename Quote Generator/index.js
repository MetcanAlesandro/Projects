const apiUrl = 'https://api.quotable.io/random';

let quote = document.querySelector('blockquote');
let author = document.querySelector('span');

async function getQuote(url){ // to get the data from the api
    const response = await fetch(url);
    let data = await response.json(); 
    // console.log(data);
    quote.innerHTML = data.content; // making the quote appearing on blockqoute
    author.innerHTML = data.author; // making the author appearing on that span
}

getQuote(apiUrl); // i have to call this here as well because on refresh will start wit loading..

tweet = () =>{ // we made this function to open a window to share the quote on twitter
    window.open('https://twitter.com/intent/tweet?text=' + quote.innerHTML + ' ---- by ' + author.innerHTML, 'Tweet Window', 'width=600, height=300');
} // we could add here the link + made the text equal with the qoute and the author and selectin a name for the window and selecting the width and the height of the window