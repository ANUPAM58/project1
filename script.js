var arr = [
    {songName:"Babel",url:"./Songs/Otnicka - Babel (Official Release).mp3",img:"./songspic/artworks-E3kgsjg2zwiZK3ul-ntEgkw-t500x500.jpg"},
    {songName:"Beyond The Sky",url:"./Songs/Otnicka - Beyond The Sky.mp3",img:"./songspic/artworks-PTtJUH8keHziZqED-zR0LRw-t500x500.jpeg"},
    {songName:"Where Are You",url:"./Songs/Otnicka Where Are You-(PagalSongs.Com.IN).mp3",img:"./songspic/artworks-z0p9qdRCMOpI-0-t500x500.jpg"},
    {songName:"Her Broken Dreams",url:"./Songs/Otnicka, Mihaenkin - Her Broken Dreams.mp3",img:"./songspic/artworks-wXGV1mlCLOphHggM-9Hq3aQ-t500x500.jpg"}
    ]

    var audio = new Audio()

    var allSongs = document.querySelector("#all-songs")

    var selectedSong = 0

    var poster = document.querySelector("#left")

    var backward = document.querySelector("#backward")
    var play = document.querySelector("#play")
    var forward = document.querySelector("#forward")


    function mainFunction(){
        var clutter = ""
    
    arr.forEach(function(elem,index){
        clutter+=`<div class="song-card" id=${index}>
        <div class="part1">
        <img src="${elem.img}" alt="">
        <h2>${elem.songName}</h2>
        </div>
        <h6>2:58</h6>
    </div>`
    })
    
    audio.src = arr[selectedSong].url
    
    allSongs.innerHTML = clutter

    poster.style.backgroundImage = `url(${arr[selectedSong].img})`
    }

    mainFunction()

    allSongs.addEventListener("click",function(dets){
        selectedSong = dets.target.id
        play.innerHTML = `<i class="ri-pause-mini-fill"></i>`
        flag = 1
        mainFunction()
        audio.play()                                                                                                                                                                                         
    })

    var flag = 0

    play.addEventListener("click",function(){
        if(flag == 0){
            play.innerHTML = `<i class="ri-pause-mini-fill"></i>`
            mainFunction()
            audio.play()
            flag = 1
        }
        else{
            play.innerHTML = `<i class="ri-play-mini-fill"></i>`
            mainFunction()
            audio.pause
            flag = 0
        }
    })

   
   
    // Store the original opacity values of the buttons
const originalOpacityForward = forward.style.opacity;
const originalOpacityBackward = backward.style.opacity;

forward.addEventListener("click", function(){
    if(selectedSong < arr.length-1){
        selectedSong++
        mainFunction()
        audio.play()
        
        // Reset opacity when it's not at the limit
        backward.style.opacity = originalOpacityBackward;
    }
    else{
        forward.style.opacity = 0.4;
    }
});

backward.addEventListener("click", function(){
    if(selectedSong > 0){
        selectedSong--
        mainFunction()
        audio.play()
        
        // Reset opacity when it's not at the limit
        forward.style.opacity = originalOpacityForward;
    }
    else{
        backward.style.opacity = 0.4;
    }
});

    
    
    



