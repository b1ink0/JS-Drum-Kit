const a = document.querySelector(".a");
const s = document.querySelector(".s");
const d = document.querySelector(".d");
const f = document.querySelector(".f");
const g = document.querySelector(".g");
const h = document.querySelector(".h");
const j = document.querySelector(".j");
const k = document.querySelector(".k");
const l = document.querySelector(".l");
const play = document.getElementById("playButton");
let pScore = 0;

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
        console.log("a")
        const aa = document.querySelector(".A")
        aa.style.animation = "small 0.4s ease"
        aa.addEventListener("animationend", function (){
            this.style.animation = "";
        }); 
        pScore++;
        updateScore();
    })
    s.addEventListener("click", function(){
        console.log("s")
        const ss = document.querySelector(".S")
            ss.style.animation = "small 0.4s ease"
            ss.addEventListener("animationend", function (){
                this.style.animation = "";
            });
            pScore++;
            updateScore();
    })
    d.addEventListener("click", function(){
        console.log("d")
        const dd = document.querySelector(".D")
            dd.style.animation = "small 0.4s ease"
            dd.addEventListener("animationend", function (){
                this.style.animation = "";
            });
            pScore++;
            updateScore();
    })
    f.addEventListener("click", function(){
        console.log("f")
        const ff = document.querySelector(".F")
            ff.style.animation = "small 0.4s ease"
            ff.addEventListener("animationend", function (){
                this.style.animation = "";
            });
            pScore++;
            updateScore();
    })
    g.addEventListener("click", function(){
        console.log("g")
        const gg = document.querySelector(".G")
            gg.style.animation = "small 0.4s ease"
            gg.addEventListener("animationend", function (){
                this.style.animation = "";
            });
            pScore++;
            updateScore();
    })
    h.addEventListener("click", function(){
        console.log("h")
        const hh = document.querySelector(".H")
            hh.style.animation = "small 0.4s ease"
            hh.addEventListener("animationend", function (){
                this.style.animation = "";
            });
            pScore++;
            updateScore();
    })
    j.addEventListener("click", function(){
        console.log("j")
        const jj = document.querySelector(".J")
            jj.style.animation = "small 0.4s ease"
            jj.addEventListener("animationend", function (){
                this.style.animation = "";
            });
            pScore++;
            updateScore();
    })
    k.addEventListener("click", function(){
        console.log("k")
        const kk = document.querySelector(".K")
            kk.style.animation = "small 0.4s ease"
            kk.addEventListener("animationend", function (){
                this.style.animation = "";
            });
            pScore++;
            updateScore();
    })
    l.addEventListener("click", function(){
        console.log("l")
        const ll = document.querySelector(".L")
            ll.style.animation = "small 0.4s ease"
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
            console.log("a")
            const aa = document.querySelector(".A")
            aa.style.animation = "small 0.4s ease"
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
            console.log("s")
            const ss = document.querySelector(".S")
            ss.style.animation = "small 0.4s ease"
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
            console.log("d")
            const dd = document.querySelector(".D")
            dd.style.animation = "small 0.4s ease"
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
            console.log("f")
            const ff = document.querySelector(".F")
            ff.style.animation = "small 0.4s ease"
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
            console.log("g")
            const gg = document.querySelector(".G")
            gg.style.animation = "small 0.4s ease"
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
            console.log("h")
            const hh = document.querySelector(".H")
            hh.style.animation = "small 0.4s ease"
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
            console.log("j")
            const jj = document.querySelector(".J")
            jj.style.animation = "small 0.4s ease"
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
            console.log("k")
            const kk = document.querySelector(".K")
            kk.style.animation = "small 0.4s ease"
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
            console.log("l");
            const ll = document.querySelector(".L")
            ll.style.animation = "small 0.4s ease"
            ll.addEventListener("animationend", function (){
                this.style.animation = "";
            });
            pScore++;
            updateScore();
        };
    })
};
key();
