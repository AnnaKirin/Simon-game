let buttonsColors = ["green", "red", "yellow", "blue"]

function generateRandomNumber() {
    return Math.round(Math.random() * 3)
}


let randomColor = buttonsColors[randomNumber]


$(document).keypress(function () {
    $("h1").text("Level 1")
    $("#" + randomColor).animate({ opacity: 0.5 }, "slow")
    $("#" + randomColor).animate({ opacity: 1 }, "slow")
})

