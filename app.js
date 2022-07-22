var images = document.getElementById("back1");
var images2 = document.getElementById("back2");
var images3 = document.getElementById("back3");
var images4 = document.getElementById("gif");
var message = document.querySelector("#message");
var message1 = document.querySelector("#message1");

// var message2 = document.querySelector("#message2");

var Total = document.querySelector("#Total");
var win = document.querySelector("#wins");
var lose = document.querySelector("#loses");
var btn = document.querySelector("#btn");
var btn1 = document.querySelector("#btn1");

var wins = []
var loses = []
var totals = []
var funcBond;
var restartfunc;
// function start() {
//     message.innerHTML = "Chose Ace From The Card"

function imgclick(userpic) {
    // images.style.display = "none"
    // images2.style.display = "none"
    // images3.style.display = "none"
    // images4.style.display = ""
    // images.src = "images/card2.gif"
    //   for(var i=0;i<1;i++){
    if (funcBond) {
        var random = Math.ceil(Math.random() * 3)
        // var random1 = Math.ceil(Math.random() * 3)
        // var random2 = Math.ceil(Math.random() * 3)
        totals.push("cyclecomplete")
        console.log(random)
        restartfunc = "restrt"
        // for (var i = 1; i <= 1; i++) {
        if (random === 1 && userpic === "card1") {
            images.src = "images/ace.png"
            // images2.src = "images/king.jpg"
            // images3.src = "images/queeen.jpg"
        }
        else if (random === 2 && userpic === "card2") {
            images2.src = "images/ace.png"
            // images3.src = "images/king.jpg"
            // images.src = "images/queeen.jpg"

        }
        else if (random === 3 && userpic === "card3") {
            images3.src = "images/ace.png"
            // images.src = "images/king.jpg"
            // images2.src = "images/queeen.jpg"
        }
        else if (random === 1 && userpic === "card2") {
            // images3.src = "images/ace.webp"
            images2.src = "images/king.jpg"
            // images2.src = "images/queeen.jpg"
        }
        else if (random === 2 && userpic === "card3") {
            // images3.src = "images/ace.webp"
            images3.src = "images/king.jpg"
            // images2.src = "images/queeen.jpg"
        }
        else if (random === 3 && userpic === "card1") {
            // images3.src = "images/ace.webp"
            images.src = "images/king.jpg"
            // images2.src = "images/queeen.jpg"
        }
        else if (random === 1 || userpic === "card3") {
            // images3.src = "images/ace.webp"
            // images.src = "images/king.jpg"
            images3.src = "images/queeen.jpg"
        }
        else if (random === 2 || userpic === "card1") {
            // images3.src = "images/ace.webp"
            // images.src = "images/king.jpg"
            images.src = "images/queeen.jpg"
        }
        else if (random === 3 || userpic === "card2") {
            // images3.src = "images/ace.webp"
            // images.src = "images/king.jpg"
            images2.src = "images/queeen.jpg"
        }
        if (userpic === "card1" && random === 1 || userpic === "card2" && random === 2 || userpic === "card3" && random === 3) {
            message.innerHTML = " Great! You Have Picked Ace"
            message1.innerHTML = ""

            wins.push(1)
        }
        else if (userpic === "card2" && random === 1 || userpic === "card3" && random === 2 || userpic === "card1" && random === 3) {
            message1.innerHTML = " You Haved Picked King ,Try picking Ace"
            message.innerHTML = ""
            loses.push(0)
        }
        else if (userpic === "card3" && random === 1 || userpic === "card1" && random === 2 || userpic === "card2" && random === 3) {
            message1.innerHTML = " You Haved Picked queeen ,Try picking Ace"
            message.innerHTML = ""

            loses.push(0)
        }

        Total.innerHTML = "Totle :" + totals.length
        win.innerHTML = "Wins :" + wins.length
        lose.innerHTML = "Loses :" + loses.length

        // btn.innerHTML = "ReStart"
        // message.innerHTML = ""
        // break   ;
        // restartfunc =undefined

    }
    else {
        undefined
    }
    //     if (restartfunc) {
    btn.innerHTML = "ReStart"
    // btn.onclick = restart()
    //         message.innerHTML = "Restart For Another Round"
    //     }
    // break   ;
    //   }
    funcBond = undefined
    // restartfunc =undefined

}
function start() {
    message.innerHTML = "Chose Ace From The Card"
    funcBond = "start"
    if (restartfunc) {
        btn.innerHTML = "ReStart"

        message.innerHTML = "Restart For Another Round"
        message1.innerHTML = ""
        images.src = "images/back.jpg"
        images2.src = "images/back.jpg"
        images3.src = "images/back.jpg"
        // funcBond = undefined

    }
    if (btn.innerHTML === "ReStart") {
        btn.innerHTML = "Start"
        message.innerHTML = "Try To Pic Ace This Time"
        // funcBond = "start"
        // funcBond = undefined


    }
    // if (btn.innerHTML === "Start") {
    //     funcBond = "restart"
        // if (btn.innerHTML === "ReStart") {
        // images.src = "images/back.png"
        // images2.src = "images/back.png"
        // images3.src = "images/back.png"
        // }
    // }
// imgclick(function(){})

// function restart() {
//     // btn.innerHTML = ""
//     // btn1.innerHTML = "ReStart"

//     message.innerHTML = "Try Chosing Ace This Time"
//     images.src = "images/back.jpg"
//     images2.src = "images/back.jpg"
//     images3.src = "images/back.jpg"
}