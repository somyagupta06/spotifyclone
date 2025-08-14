// let currentSong = new Audio()


// function secondsToMinutesSeconds(seconds){
// if (isNaN(seconds) || seconds < 0) { 
//     return "Invalid input";}
// const minutes = Math.floor (seconds / 60);
// const remainingSeconds = Math.floor (seconds % 60);
// const formattedMinutes = String(minutes).padStart(2, '0');
// const formattedSeconds = String(remainingSeconds).padStart(2,'0');
// return `${formattedMinutes}:${formattedSeconds} `
//  }

//  async function getsongs(){
//     let a = await fetch( "/spotifyclone/songs.html")
//     let response = await a.text()
//     console.log(response);
//     let div = document.createElement('div')
//     div.innerHTML = response
//     let as= div.getElementsByTagName('a')
//     let songs=[]
//     for (let index = 0; index < as.length; index++) {
//         const element = as[index];
//         if (element.href.endsWith(".mp3")){
//             songs.push(element.href)
//         }
//     }
//    return songs
// }

// const playMusic=(track)=>{
    
//     currentSong.src = "/spotifyclone/songs/" + track
//     currentSong.play()
//      document.querySelector(".songInfo").innerHTML=track
//     document.querySelector(".songduration").innerHTML = "00:00 / 00:00"
    
// }
// const playMusicc=(track)=>{
    
//     currentSong.src = "/spotifyclone/songs/"+ track
    
//     currentSong.play()
     
// }


// async function main(){
// let song = await getsongs()
// console.log(song);
// allSongs = song; // Store all songs for search
//     renderSongList(song);

//     function renderSongList(songs){
//         let songUrl = document.querySelector('.songList');
//         let songUl = document.createElement('ul');
//         songUl.innerHTML = "";
    
//         for (const sg of songs) {
//             songUl.innerHTML += `
//                 <li>
//                     <img class="musicsvg" src="music.svg">
//                     <span class='info'>${sg.split('/songs/')[1]}</span>
//                     <span class='playNow'>Play Now
//                         <img class="playsongsvg" src="playsong.svg">
//                     </span>
//                 </li>
//             `;
//         }
//         songUrl.innerHTML = "";
//         songUrl.appendChild(songUl);

//         Array.from(document.querySelector(".songList").getElementsByTagName("li")).forEach(e=>{
//             e.addEventListener('click',element=>{
//                 play.src="pausesong.svg"
//                 console.log(e.querySelector('.info').innerHTML);
//                 playMusic(e.querySelector('.info').innerHTML)
                
//             })
           
//         })
        
//     }
    
//     // Search filter
//     document.getElementById("searchBar").addEventListener("input", function(){
//         let query = this.value.toLowerCase();
//         let filteredSongs = allSongs.filter(song => 
//             song.toLowerCase().includes(query)
//         );
//         renderSongList(filteredSongs);
//     });





//     Array.from(document.querySelectorAll(".card")).forEach(e=>{
//         e.addEventListener('click',element=>{
//             play.src="pausesong.svg"
//               console.log(e.querySelector('.infoo').innerHTML);
//               playMusic(e.querySelector('.infoo').innerHTML)
//           })
         
         
//       })
//       play.addEventListener('click',()=>{
//         if(currentSong.paused){
//             currentSong.play()
//             play.src="pausesong.svg"
            
//         }
//         else{
//             currentSong.pause()
//             play.src="playsong.svg"
//         }
//     })
//     currentSong.addEventListener("timeupdate",()=>{
//         document.querySelector('.songduration').innerHTML=`
//         ${secondsToMinutesSeconds(currentSong.currentTime)}/
//         ${secondsToMinutesSeconds(currentSong.duration)}`
//         document.querySelector('.circle').style.left=(currentSong.currentTime/currentSong.duration)*100 + "%"
//     })
    
//     document.querySelector('.seekbar').addEventListener('click', e=>{
//         let percent = (e.offsetX/e.target.getBoundingClientRect().width)*100
//         document.querySelector('.circle').style.left = percent + '%'
//         currentSong.currentTime = ((currentSong.duration)*percent)/100
//     })
    
//     document.getElementById("prev").addEventListener("click",()=>{
//         let index;
//         let a ;
//         let c ;
//       for (index = 1 ; index<8 ; index++){
//         if(song[index]===currentSong.src){
//             a = song [index-1]
//             c=index-1
//         }
//       }
//       console.log(c);
//       if(c>=1){
//         console.log(currentSong.src);
//         let b = a.split('/songs/')[1]
    
//      playMusic(b)
//       }else{
//         playMusic(song[0].split('/songs/')[1])
//       }
//      })
    
//      document.getElementById("next").addEventListener("click",()=>{
//         let index;
//         let a ;
//       for (index = 0 ; index<8 ; index++){
//         if(song[index]===currentSong.src){
//             a = song [index+1]
//             c=index+1
//         }
//       }
//       console.log(c);
//       if(c<=7){
//         console.log(currentSong.src);
//         let b = a.split('/songs/')[1]
    
//      playMusic(b)
//       }else{
//         playMusic(song[7].split('/songs/')[1])
    
//       }
//      })
    
    
//     document.querySelector('.range').addEventListener('input',(e)=>{
        
//         currentSong.volume = parseInt(e.target.value)/100
//     })
    






// }

// document.querySelector('.spotifyPlaylist').querySelectorAll(".card").forEach(e => {
//     e.addEventListener("click",main
//     )
// })

// Array.from(document.querySelector(".songList").getElementsByTagName("li")).forEach(e=>{
//     e.addEventListener('click',element=>{
        
//         console.log(e.querySelector('.info').innerHTML);
//         playMusic(e.querySelector('.info').innerHTML)
        
//     })
   
// })

// Array.from(document.querySelectorAll(".card")).forEach(e=>{
//   e.addEventListener('click',element=>{
//       play.src="pausesong.svg"
//         console.log(e.querySelector('.infoo').innerHTML);
//         playMusicc(e.querySelector('.infoo').innerHTML)
//     })
   
   
// })






 
// document.querySelector(".hamburger").addEventListener("click",()=>{
//     document.querySelector('.slide').style.left= "0"
    
    
// })
// document.querySelector(".cross").addEventListener("click",()=>{
//     document.querySelector('.slide').style.left= "-1000%"
    

// })
// Array.from(document.querySelector(".songList").getElementsByTagName("li")).forEach(e=>{
//     e.addEventListener('click',element=>{
//         play.src="pausesong.svg"
//         console.log(e.querySelector('.info').innerHTML);
//         playMusic(e.querySelector('.info').innerHTML)
        
//     })
   
// })




let currentSong = new Audio();
let allSongs = [];
let currentIndex = 0;

function secondsToMinutesSeconds(seconds) {
    if (isNaN(seconds) || seconds < 0) return "00:00";
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

async function getsongs() {
    let a = await fetch("/spotifyclone/songs.html");
    let response = await a.text();
    let div = document.createElement('div');
    div.innerHTML = response;
    let as = div.getElementsByTagName('a');
    let songs = [];
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href);
        }
    }
    return songs;
}

function playMusicByIndex(index) {
    currentIndex = index;
    let trackName = allSongs[index].split('/songs/')[1];
    currentSong.src = "/spotifyclone/songs/" + trackName;
    currentSong.play();
    play.src = "pausesong.svg";
    document.querySelector(".songInfo").innerHTML = trackName;
}

function renderSongList(songs) {
    let songUrl = document.querySelector('.songList');
    let songUl = document.createElement('ul');
    songUl.innerHTML = "";

    songs.forEach((sg, i) => {
        songUl.innerHTML += `
            <li>
                <img class="musicsvg" src="music.svg">
                <span class='info'>${sg.split('/songs/')[1]}</span>
                <span class='playNow'>Play Now
                    <img class="playsongsvg" src="playsong.svg">
                </span>
            </li>
        `;
    });
    songUrl.innerHTML = "";
    songUrl.appendChild(songUl);

    document.querySelectorAll(".songList li").forEach((e, i) => {
        e.addEventListener('click', () => {
            playMusicByIndex(i);
        });
    });
}

async function main() {
    allSongs = await getsongs();
    renderSongList(allSongs);

    // Search filter
    document.getElementById("searchBar").addEventListener("input", function () {
        let query = this.value.toLowerCase();
        let filteredSongs = allSongs.filter(song =>
            song.toLowerCase().includes(query)
        );
        renderSongList(filteredSongs);
    });

    // Card click
    document.querySelectorAll(".card").forEach((card, i) => {
        card.addEventListener('click', () => {
            playMusicByIndex(i);
        });
    });

    // Play/Pause
    play.addEventListener('click', () => {
        if (currentSong.paused) {
            currentSong.play();
            play.src = "pausesong.svg";
        } else {
            currentSong.pause();
            play.src = "playsong.svg";
        }
    });

    // Time update
    currentSong.addEventListener("timeupdate", () => {
        document.querySelector('.songduration').innerHTML = `
            ${secondsToMinutesSeconds(currentSong.currentTime)} /
            ${secondsToMinutesSeconds(currentSong.duration)}`;
        document.querySelector('.circle').style.left =
            (currentSong.currentTime / currentSong.duration) * 100 + "%";
    });

    // Seekbar
    document.querySelector('.seekbar').addEventListener('click', e => {
        let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
        document.querySelector('.circle').style.left = percent + '%';
        currentSong.currentTime = (currentSong.duration * percent) / 100;
    });

    // Volume
    document.querySelector('.range').addEventListener('input', (e) => {
        currentSong.volume = parseInt(e.target.value) / 100;
    });

    // Prev
    document.getElementById("prev").addEventListener("click", () => {
        if (currentIndex > 0) {
            playMusicByIndex(currentIndex - 1);
        } else {
            playMusicByIndex(allSongs.length - 1); // loop to last
        }
    });

    // Next
    document.getElementById("next").addEventListener("click", () => {
        if (currentIndex < allSongs.length - 1) {
            playMusicByIndex(currentIndex + 1);
        } else {
            playMusicByIndex(0); // loop to first
        }
    });
}

main();

