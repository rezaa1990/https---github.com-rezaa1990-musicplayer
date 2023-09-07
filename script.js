let musics = [
    {
        name : "Fearless(1)" ,
        cover : "imgs/img1.jpeg" ,
        audio : new Audio("./musics/Fearless(1).mp3")
    },

    {
        name : "Fearless(2)" ,
        cover : "imgs/img2.jpeg" ,
        audio : new Audio("./musics/Fearless(2).mp3")
    },

    {
        name : "Fearless(3)" ,
        cover : "imgs/img3.jpeg" ,
        audio : new Audio("./musics/Fearless(3).mp3")
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



nextBtn.addEventListener("click" , (e)=>{
    changeMusic("next")
})

preBtn.addEventListener("click" , (e)=>{
    changeMusic("pre")
})



function changeMusic(state){
    audio.pause()
    range.value = 0
    playBtn.classList.replace("fa-pause","fa-play")
    musicCover.style.animationplaystate = "paused"
    audio.currentTime = 0
    
    if(state == "next"){

        if(currentMusic == musics.length - 1)
            currentMusic = 0
        else currentMusic += 1
        console.log(currentMusic)
        playBtn.classList.replace("fa-play" , "fa-pause")
    }else{

        if(currentMusic == 0)
            currentMusic = musics.length - 1
        else currentMusic -= 1
        console.log(currentMusic)
        playBtn.classList.replace("fa-play" , "fa-pause")

    }

    audio = musics[currentMusic].audio
    musicCover.src = musics[currentMusic].cover
    musicName.innerText = musics[currentMusic].name
    audio.play()

}