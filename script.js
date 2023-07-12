console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Rabba - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/6.jpg"},
    {songName: "Sakhiyaan - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/7.jpg"},
    {songName: "Bhula Dena - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/8.jpg"},
    {songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/9.jpg"},
    {songName: "Na Jaana - Salam-e-Ishq", filePath: "songs/4.mp3", coverPath: "covers/10.jpg"},


    {songName: "Funny Music Clips - NCS 1", filePath: "songs/11.mp3", coverPath: "covers/10.jpg"},
    {songName: "Funny Music Clips - NCS 2", filePath: "songs/12.mp3", coverPath: "covers/10.jpg"},
    {songName: "Funny Music Clips - NCS 3", filePath: "songs/13.mp3", coverPath: "covers/10.jpg"},
    {songName: "Funny Music Clips - NCS 4", filePath: "songs/14.mp3", coverPath: "covers/10.jpg"},
    {songName: "Funny Music Clips - NCS 5", filePath: "songs/15.mp3", coverPath: "covers/10.jpg"},
    {songName: "Funny Music Clips - NCS 6", filePath: "songs/16.mp3", coverPath: "covers/10.jpg"},
    {songName: "Funny Music Clips - NCS 7", filePath: "songs/17.mp3", coverPath: "covers/10.jpg"},
    {songName: "Funny Music Clips - NCS 8", filePath: "songs/18.mp3", coverPath: "covers/10.jpg"},
    {songName: "Funny Music Clips - NCS 9", filePath: "songs/19.mp3", coverPath: "covers/10.jpg"},
    {songName: "Funny Music Clips - NCS 10", filePath: "songs/20.mp3", coverPath: "covers/10.jpg"},


    {songName: "Funny Music Clips - NCS 11", filePath: "songs/21.mp3", coverPath: "covers/1.jpg"},
    {songName: "Funny Music Clips - NCS 12", filePath: "songs/22.mp3", coverPath: "covers/2.jpg"},
    {songName: "Funny Music Clips - NCS 13", filePath: "songs/23.mp3", coverPath: "covers/3.jpg"},
    {songName: "Funny Music Clips - NCS 14", filePath: "songs/24.mp3", coverPath: "covers/4.jpg"},
    {songName: "Funny Music Clips - NCS 15", filePath: "songs/25.mp3", coverPath: "covers/10.jpg"},
    {songName: "Funny Music Clips - NCS 16", filePath: "songs/26.mp3", coverPath: "covers/5.jpg"},
    {songName: "Funny Music Clips - NCS 17", filePath: "songs/27.mp3", coverPath: "covers/6.jpg"},
    {songName: "Funny Music Clips - NCS 18", filePath: "songs/28.mp3", coverPath: "covers/7.jpg"},
    {songName: "Funny Music Clips - NCS 19", filePath: "songs/29.mp3", coverPath: "covers/8.jpg"},
    {songName: "Funny Music Clips - NCS 20", filePath: "songs/30.mp3", coverPath: "covers/9.jpg"},


]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', ()=>{ 

    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})