let progress = document.getElementById('progress'); // progress bar
let song = document.getElementById('song'); // audio
let ctrlIcon = document.getElementById('controlIcon'); // play button

// song.onloadedmetadata = function(){
//     progress.max = song.duration;
//     progress.value = song.currentTime;
// }


// playPause = () =>{
//     if(ctrlIcon.classList.contains("fa-pause")){ // If the ctrlIcon contains the class fa-pause, it means the audio is currently playing
//         song.pause(); // The song.pause() method is called to pause the audio playback.
//         ctrlIcon.classList.remove('fa-pause'); // will remove fa pause and ad fa-play
//         ctrlIcon.classList.add('fa-play');
//     }
//     else{ // If the ctrlIcon does not contain the class fa-pause, it means the audio is currently paused
//         song.play(); // The song.play() method is called to start or resume audio playback.
//         ctrlIcon.classList.add('fa-pause');
//         ctrlIcon.classList.remove('fa-play');
//     }
// }

// if(song.play()){ // if the song is playing 
//     setInterval(() => {
//         progress.value = song.currentTime;
//     }, 500);
// }

// progress.onchange = function(){ // progress.onchange event is triggered when the value of the progress bar (progress) changes (e.g., when the user interacts with the progress bar).
//     song.play(); // method is called to ensure that the audio playback is started or resumed.
//     song.currentTime = progress.value; // song.currentTime property is set to the value of the progress bar 
//     ctrlIcon.classList.add('fa-pause'); // The classes fa-pause and fa-play are toggled on the ctrlIcon to update the play/pause button appearance.
//     ctrlIcon.classList.remove('fa-play');
// }

song.onloadedmetadata = function(){ // is an event handler attribute for the <audio> element;"When the metadata of the audio file associated with the song element is loaded, execute this function."
    progress.max = song.duration; 
    // The progress.max property is set to the duration of the audio file (song.duration), which sets the maximum value of the progress bar to the duration of the audio file.
}

function updateProgress() {
    progress.value = song.currentTime; // song.currentTime retrieves the current playback time of the audio, measured in seconds from the beginning of the audio file.
    // The updateProgress function is defined separately to update the progress bar's value based on the current playback time of the audio.
}

playPause =() =>{ 
    if(song.paused){ // song.paused return a boolean value. When you access the paused property of an <audio> element in JavaScript, it returns true if the audio is currently paused and false if it is playing.
        // we used song.paused instead of song.play because song.paused returns a boolean and song.play it's a method!!! IT WORKED WITH IF(SONG.PLAY) BUT USING SONG.PAUSED SHOULD BE MORE RELIABLE
        // When you call song.play(), it initiates the playback of the audio, but it doesn't return any value. 
        song.play();
        ctrlIcon.classList.add('fa-pause'); // adding the pause icon 
        ctrlIcon.classList.remove('fa-play'); // and removing the play icon
        setInterval(updateProgress, 500); //  we call setInterval(updateProgress, 500) to periodically update the progress bar (0.5 s)
    } else {
        song.pause(); // we call song.pause to pause
        ctrlIcon.classList.remove('fa-pause');
        ctrlIcon.classList.add('fa-play');
    }
}

progress.oninput = function(){ // When you click on that progress bar sometimes it doesn't work so smoothly so I used "oninput" instead of "onchange"
    song.currentTime = progress.value; // When the input event occurs (i.e., when the user interacts with the progress bar), the song.currentTime property is set to the value of the progress element 
    updateProgress(); // Update progress bar immediately
    if(song.paused) { // If the audio is paused (if(song.paused)), meaning it was paused before the user interacted with the progress bar, the playPause function is called to resume playback. 
        playPause(); // Resume playing if paused (This ensures that playback resumes automatically if it was paused before the user seeks to a different position in the audio.)
    }
}

// The input event fires immediately when the value of an <input> element changes, such as when the user interacts with the progress bar.