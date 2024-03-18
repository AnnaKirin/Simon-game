let buttonsColors = ["green", "red", "yellow", "blue"]
let gamePattern = []
let userClickedPattern = []
let level = 0;
let randomColor = "";
let started = false


$(document).keydown(function () {
    if (!started) {
        fillGamePattern()
        $("#" + randomColor).animate({ opacity: 0.1 }, "slow")
        $("#" + randomColor).animate({ opacity: 1 }, "slow")
        started = true
    }

})
checkAnswer()
playSound()


function checkAnswer() {
    $(".btn").click(function (event) {
        playSound(event)
        userClickedPattern.push(event.target.id)

        for (let i = 0; i < userClickedPattern.length; i++) {
            if (userClickedPattern[i] !== gamePattern[i]) {
                console.log("userClickedPattern " + userClickedPattern);
                new Audio("./sounds/wrong.mp3").play()
                $("h1").text("Game Over. Press A Key to Restart")
                startOver()
                return
            }
        }
        if (gamePattern.length === userClickedPattern.length) {
            animateButton()
            userClickedPattern = []
        }
    })
}
function animateButton() {
    fillGamePattern()
    console.log("gamePattern " + gamePattern);

    $("#" + gamePattern[gamePattern.length - 1]).animate({ opacity: 0.1 }, "slow")
    $("#" + gamePattern[gamePattern.length - 1]).animate({ opacity: 1 }, "slow")
    console.log("userClickedPattern " + userClickedPattern);
    nextLevel()
}
function playSound(event) {
    switch (event.target.id) {
        case "blue":
            new Audio("./sounds/blue.mp3").play()
            break;
        case "green":
            new Audio("./sounds/green.mp3").play()
            break;
        case "yellow":
            new Audio("./sounds/yellow.mp3").play()
            break;
        case "red":
            new Audio("./sounds/red.mp3").play()
            break;
        default:
    }
}

function fillGamePattern() {
    randomColor = buttonsColors[generateRandomNumber()]
    gamePattern.push(randomColor)
    $("h1").text("Level " + level)
}

function nextLevel() {
    level++
}
function startOver() {
    started = false
    gamePattern = []
    level = 0
    userClickedPattern = []
}
function generateRandomNumber() {
    return Math.round(Math.random() * 3)
}
