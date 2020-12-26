//play
const play = document.getElementById("playButton");
let pScore = 0;
//start
document.addEventListener("DOMContentLoaded", function(){
    //score
    const updateScore = () =>{
        const playerScore = document.querySelector(".score p");
        playerScore.textContent = pScore;
    }
    //audio
    document.querySelectorAll("button").forEach(button =>{
        button.onclick = function(){
             const audio = document.getElementById(`${this.dataset.sound}s`);
             audio.currentTime = 0;
             audio.play();
             document.querySelectorAll("div").forEach(div =>{
                div.onclick = function(){
                    const animation = document.getElementById(`${this.dataset.anm}`)
                    animation.style.animation = "small 0.3s ease";
                    animation.addEventListener("animationend", function (){
                    this.style.animation = "";
                    });
                    pScore++;
                    updateScore();
                } 
             
            })
             
        }
    })
    const button = ()=>{ 
        play.addEventListener("click", function(){
            const play1 = document.querySelector(".play")
            play1.style.animation = "start 1s ease"
            play1.addEventListener("animationend", function (){
                this.style.animation = "";
            }); 
            play1.classList.add("fadeOut");
            const play2 = document.querySelector(".start1");
            play2.classList.add("fadeIn")
        })
    };
    button();
    // for pc
    const key = ()=>{
        window.addEventListener("keydown", function (e){
            const key = document.getElementById(`${e.key}s`)
            key.currentTime = 0;
            key.play();
            const animation = document.getElementById(`${e.key}`)
            animation.style.animation = "small 0.3s ease"
            animation.addEventListener("animationend", function (){
                this.style.animation = "";
            });
            pScore++;
            updateScore();
        });
    }
    key();
});  

