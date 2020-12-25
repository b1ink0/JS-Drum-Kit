//play
const play = document.getElementById("playButton");
let pScore = 0;
//button class
const a = document.querySelector(".a");
const s = document.querySelector(".s");
const d = document.querySelector(".d");
const f = document.querySelector(".f");
const g = document.querySelector(".g");
const h = document.querySelector(".h");
const j = document.querySelector(".j");
const k = document.querySelector(".k");
const l = document.querySelector(".l");
//ids of sound
const soundA = document.getElementById("a");
const soundS = document.getElementById("s");
const soundD = document.getElementById("d");
const soundF = document.getElementById("f");
const soundG = document.getElementById("g");
const soundH = document.getElementById("h");
const soundJ = document.getElementById("j");
const soundK = document.getElementById("k");
const soundL = document.getElementById("l");

//start
document.addEventListener("DOMContentLoaded", function(){
    //forAnimationOfButton
    function AA() {
        const a1 = document.querySelector(".A");
        a1.style.animation = "small 0.4 ease";
        a1.addEventListener("animationend", function (){
                      this.style.animation = "";
                  });
      }
      document.querySelector("button").onclick = AA();
      //function for playing audios by buttons
      function playAudioa() { 
        soundA.currentTime = 0;
        soundA.play(); 
      } 
      function playAudios() { 
        soundS.currentTime = 0;
        soundS.play(); 
      }
      function playAudiod() { 
        soundD.currentTime = 0;
        soundD.play(); 
      }
      function playAudiof() { 
        soundF.currentTime = 0;
        soundF.play(); 
      }
      function playAudiog() { 
        soundG.currentTime = 0;
        soundG.play(); 
      }
      function playAudioh() { 
        soundH.currentTime = 0;
        soundH.play(); 
      }
      function playAudioj() { 
        soundJ.currentTime = 0;
        soundJ.play(); 
      }
      function playAudiok() { 
        soundK.currentTime = 0;
        soundK.play(); 
      }
      function playAudiol() { 
        soundL.currentTime = 0;
        soundL.play(); 
      }
      //score
    const updateScore = () =>{
    const playerScore = document.querySelector(".score p");
    playerScore.textContent = pScore;
    }
    // for smartphones

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

    a.addEventListener("click", function(){
        playAudioa();
        const aa = document.querySelector(".A")
        aa.style.animation = "small 0.3s ease"
        aa.addEventListener("animationend", function (){
            this.style.animation = "";
        }); 
        pScore++;
        updateScore();
    })
    s.addEventListener("click", function(){
        playAudios();
        const ss = document.querySelector(".S")
            ss.style.animation = "small 0.3s ease"
            ss.addEventListener("animationend", function (){
                this.style.animation = "";
            });
            pScore++;
            updateScore();
    })
    d.addEventListener("click", function(){
        playAudiod();
        const dd = document.querySelector(".D")
            dd.style.animation = "small 0.3s ease"
            dd.addEventListener("animationend", function (){
                this.style.animation = "";
            });
            pScore++;
            updateScore();
    })
    f.addEventListener("click", function(){
        playAudiof();
        const ff = document.querySelector(".F")
            ff.style.animation = "small 0.3s ease"
            ff.addEventListener("animationend", function (){
                this.style.animation = "";
            });
            pScore++;
            updateScore();
    })
    g.addEventListener("click", function(){
        playAudiog();
        const gg = document.querySelector(".G")
            gg.style.animation = "small 0.3s ease"
            gg.addEventListener("animationend", function (){
                this.style.animation = "";
            });
            pScore++;
            updateScore();
    })
    h.addEventListener("click", function(){
        playAudioh();
        const hh = document.querySelector(".H")
            hh.style.animation = "small 0.3s ease"
            hh.addEventListener("animationend", function (){
                this.style.animation = "";
            });
            pScore++;
            updateScore();
    })
    j.addEventListener("click", function(){
        playAudioj();
        const jj = document.querySelector(".J")
            jj.style.animation = "small 0.3s ease"
            jj.addEventListener("animationend", function (){
                this.style.animation = "";
            });
            pScore++;
            updateScore();
    })
    k.addEventListener("click", function(){
        playAudiok();
        const kk = document.querySelector(".K")
            kk.style.animation = "small 0.3s ease"
            kk.addEventListener("animationend", function (){
                this.style.animation = "";
            });
            pScore++;
            updateScore();
    })
    l.addEventListener("click", function(){
        playAudiol();
        const ll = document.querySelector(".L")
            ll.style.animation = "small 0.3s ease"
            ll.addEventListener("animationend", function (){
                this.style.animation = "";
            });
            pScore++;
            updateScore();
    })
};
button();
    // for pc

const key = ()=>{
    window.addEventListener("keydown", function (e){
        if (e.key === "a" || e.key === "A") {
            soundA.currentTime = 0;
            soundA.play(); 
            const aa = document.querySelector(".A")
            aa.style.animation = "small 0.3s ease"
            aa.addEventListener("animationend", function (){
                this.style.animation = "";
            }); 
            pScore++;
            updateScore();   
        };
    })
    window.addEventListener("keydown", function (e){
        if (e.key === "s" || e.key === "S") {
            soundS.currentTime = 0;
            soundS.play(); 
            const ss = document.querySelector(".S")
            ss.style.animation = "small 0.3s ease"
            ss.addEventListener("animationend", function (){
                this.style.animation = "";
            });
            pScore++;
            updateScore();

        };
    })
    window.addEventListener("keydown", function (e){
        if (e.key === "d" || e.key === "D") {
            soundD.currentTime = 0;
            soundD.play(); 
            const dd = document.querySelector(".D")
            dd.style.animation = "small 0.3s ease"
            dd.addEventListener("animationend", function (){
                this.style.animation = "";
            });
            pScore++;
            updateScore();
        };
    })
    window.addEventListener("keydown", function (e){
        if (e.key === "f" || e.key === "F") {
            soundF.currentTime = 0;
            soundF.play(); 
            const ff = document.querySelector(".F")
            ff.style.animation = "small 0.3s ease"
            ff.addEventListener("animationend", function (){
                this.style.animation = "";
            });
            pScore++;
            updateScore();
        };
    })
    window.addEventListener("keydown", function (e){
        if (e.key === "g" || e.key === "G") {
            soundG.currentTime = 0;
            soundG.play(); 
            const gg = document.querySelector(".G")
            gg.style.animation = "small 0.3s ease"
            gg.addEventListener("animationend", function (){
                this.style.animation = "";
            });
            pScore++;
            updateScore();
        };
    })
    window.addEventListener("keydown", function (e){
        if (e.key === "h" || e.key === "H") {
            soundH.currentTime = 0;
            soundH.play(); 
            const hh = document.querySelector(".H")
            hh.style.animation = "small 0.3s ease"
            hh.addEventListener("animationend", function (){
                this.style.animation = "";
            });
            pScore++;
            updateScore();
        };
    })
    window.addEventListener("keydown", function (e){
        if (e.key === "j" || e.key === "J") {
            soundJ.currentTime = 0;
            soundJ.play();
            const jj = document.querySelector(".J")
            jj.style.animation = "small 0.3s ease"
            jj.addEventListener("animationend", function (){
                this.style.animation = "";
            });
            pScore++;
            updateScore();
        };
    })
    window.addEventListener("keydown", function (e){
        if (e.key === "k" || e.key === "K") {
            soundK.currentTime = 0;
            soundK.play();
            const kk = document.querySelector(".K")
            kk.style.animation = "small 0.3s ease"
            kk.addEventListener("animationend", function (){
                this.style.animation = "";
            });
            pScore++;
            updateScore();
        };
    })
    window.addEventListener("keydown", function (e){
        if (e.key === "l" || e.key === "L") {
            soundL.currentTime = 0;
            soundL.play();
            const ll = document.querySelector(".L")
            ll.style.animation = "small 0.3s ease"
            ll.addEventListener("animationend", function (){
                this.style.animation = "";
            });
            pScore++;
            updateScore();
        };
    })
  };
key();
});



