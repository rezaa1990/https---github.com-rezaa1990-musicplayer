let musics = [
    {
        name : "Fearless(1)" ,
        cover : "imgs/img1.jpeg" ,
        audio : new Audio("./musics/Fearless(1).mp3")
    }
]


let range = document.querySelector("#music-time")
let playBtn= document.querySelector("#play-btn")
let nextBtn = document.querySelector("#next-btn")
let preBtn = document.querySelector("#pre-btn")
let musicCover = document.querySelector("#music-cover")
let musicName = document.querySelector("#music-name")


let currentMusic = 0;
let audio = musics[currentMusic].audio
musicCover.src = musics[currentMusic].cover
musicName.innerText = musics[currentMusic].name



audio.addEventListener("canplay" , (e)=>{
    console.log(audio.duration)
    range.max = audio.duration
})



audio.addEventListener("timeupdate" , (e)=>{
    range.value = audio.currentTime
})



range.addEventListener("input" , (e)=>{
    audio.currentTime = range.value
})



playBtn.addEventListener("click" , (e)=>{
    if(audio.paused){
        audio.play()
        musicCover.style.animationplaystate = "running"
        playBtn.classList.replace("fa-play" , "fa-pause")
    }else{
        audio.pause()
        musicCover.style.animationplaystate = "paused"
        playBtn.classList.replace("fa-pause","fa-play")

    }
})