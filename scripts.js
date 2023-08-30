///--CONST
//Mobile
const MMD = document.querySelector("#mobMenuDisp");
//RedBox
const redCont = document.querySelector("#redCont");
const redTxt = document.querySelector("#redTxt");
const redTime = document.querySelector("#redTime");





///--FUNCTIONS
//MOBILE MENU
function mobileMenu(s) {
    if (s == "open") {
        MMD.style.display = "block";
    }
    else if (s == "close") {
        MMD.style.display = "none";
    }
    else console.log("ERROR - mobMenu no Identificado");
}



//REDBOX
var timer = null;
var seconds = 0;
function redBox(p) {
    if (p == "WA") {
        timerControl("stop");
        redCont.style.display = "block";
        redTxt.innerHTML = "Botón demo - puede ser conectado a un chat de WhatsApp."
        timerControl("run");
    }
    else if(p == "venta") {
        timerControl("stop");
        redCont.style.display = "block";
        redTxt.innerHTML = "Botón demo - puede ser conectado a un chat de WhatsApp o a una tienda en línea."
        timerControl("run");
    }
    else if(p == "subs") {
        timerControl("stop");
        redCont.style.display = "block";
        redTxt.innerHTML = "Botón demo - puede ser conectado a una lista de correos."
        timerControl("run");
    }
    else if(p == "insta") {
        timerControl("stop");
        redCont.style.display = "block";
        redTxt.innerHTML = "Botón demo - puede ser conectado a una página de Instagram."
        timerControl("run");
    }
    else if(p == "face") {
        timerControl("stop");
        redCont.style.display = "block";
        redTxt.innerHTML = "Botón demo - puede ser conectado a una página de Facebook."
        timerControl("run");
    }
    else if(p == "close") {
        timerControl("stop");
        redCont.style.display = "none";
    }
    else console.log("ERROR - RedBox no identificado");
}
function timerControl(stat) {
    seconds = 7;
    redTime.innerHTML = `Este cuadro se cerrará en - ${seconds}`;
    if (stat == "stop") {
      clearInterval(timer);
    }
    else if (stat == "run") {
      timer = setInterval(function () {
        seconds -= 1;
        if (seconds == 0) {
          redCont.style.display = "none";
          clearInterval(timer);
        }
        else {
            redTime.innerHTML = `Este cuadro se cerrará en - ${seconds}`;
        }
    }, 1000);
    }
}