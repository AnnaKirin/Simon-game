let buttonsColors = ["green", "red", "yellow", "blue"]
let gamePattern = []
let userClickedPattern = []



$(document).keypress(function () {
    fillGamePattern()
    $("h1").text("Level 1")
    for (i = 0; i <= gamePattern.length; i++) {
        $("#" + gamePattern[i]).animate({ opacity: 0.1 }, "slow")
        $("#" + gamePattern[i]).animate({ opacity: 1 }, "slow")
    }
})


//wykona sie raz

$('.btn').on("click", function () {
    var userChosenColor = $(this).attr('id')
    userClickedPattern.push(userChosenColor)
    // debugger;


    if (arraysAreEqual(gamePattern, userClickedPattern)) {
        fillGamePattern()
        console.log("gamePattern " + gamePattern);
        //w tym miejscu 2 kolory, showing last element
        $("h1").text("Level 2")
        $("#" + gamePattern[gamePattern.length - 1]).animate({ opacity: 0.1 }, "slow")
        $("#" + gamePattern[gamePattern.length - 1]).animate({ opacity: 1 }, "slow")
        console.log("userClickedPattern " + userClickedPattern);

    } else { $("h1").text("Game Over") }
})



function generateRandomNumber() {
    return Math.round(Math.random() * 3)
}

function fillGamePattern() {
    let randomColor = buttonsColors[generateRandomNumber()]
    gamePattern.push(randomColor)
    // console.log("gamePattern beginning " + gamePattern);
}

function arraysAreEqual(array1, array2) {
    if (array1.length !== array2.length) {
        return false;
    }
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }
    return true;
}



// if (arraysAreEqual(gamePattern, userClickedPattern)) {

//     $("h1").text("Level 2")
//     $("#" + gamePattern).animate({ opacity: 0.1 }, "slow")
//     $("#" + gamePattern).animate({ opacity: 1 }, "slow")
//     console.log(gamePattern);
//     console.log(userClickedPattern);
// } else {
//     $("h1").text("Game Over")
//     gamePattern = []
//     userClickedPattern = []
// }
// console.log(userChosenColor);

// for(){
//     let randomColor = buttonsColors[generateRandomNumber()]
//         gamePattern.push(randomColor)
//         console.log(gamePattern);
// }





// $("#" + randomColor).click(function () {
//     $("h1").text("Level 2")
// })
// $("#" + randomColor).click(function () {
//     $("h1").text("Game Over")
// })

