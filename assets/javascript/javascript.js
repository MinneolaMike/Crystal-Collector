//Setting the game up to run when the window has finshed loading
$(document).ready(function () {

    $("#buttonstart").on("click", function () {
        $("#slide").slideUp();
        backgroundSound.play();
        console.log("slide fired");
    })

    // $("#buttonstart").click(function(){
        // $("#slide").slideUp();
        // backgroundSound.play();
    // });
    //Global Variables
    var totalScore = 0;
    var wins = 0;
    var losses = 0;

    // Audio variables
    var youWinSound = new Audio("assets/audio/win.wav");
    var youLoseSound = new Audio("assets/audio/lose.mp3");
    var buttonSound = new Audio("assets/audio/button.mp3");
    var backgroundSound = new Audio("assets/audio/chillout.mp3");

    //Starts the audio
    // window.onload = function(){
        // setTimeout(backgroundSound.play(), 3000);
        // console.log("Onload Fired");
    // }
    
    //Genreate a random Target Score between 19 - 120
    var targetScore = Math.floor(Math.random() * 101 + 19);
    console.log("The target score is = " + targetScore);
    //Display it in the HTML
    $("#targetscore").text(targetScore);

    //Generate a random value for each Crystal between 1 - 12
    var redCrystalValue = Math.floor(Math.random() * 11 + 1);
    console.log("Red Crystal Value = " + redCrystalValue);
    var blackCrystalValue = Math.floor(Math.random() * 11 + 1);
    console.log("Black Crystal Value = " + blackCrystalValue);
    var yellowCrystalValue = Math.floor(Math.random() * 11 + 1);
    console.log("yellow Crystal Value = " + yellowCrystalValue);
    var purpleCrystalValue = Math.floor(Math.random() * 11 + 1);
    console.log("Purple Crystal Value = " + purpleCrystalValue);


    //Display wins and losses
    $("#wins").text(wins);
    $("#losses").text(losses);

    //player clicks a crystal, score is updated, and win/loss determined
    $("#buttonred").on("click", function () {
        buttonSound.play();
        totalScore = totalScore + redCrystalValue;
        $("#totalscore").text(totalScore);
        console.log("Total Score is : " + totalScore);
        if (totalScore === targetScore) {
            backgroundSound.pause();
            win();
        }
        else if (totalScore > targetScore) {
            backgroundSound.pause();
            loss();
        }
    })
    $("#buttonblack").on("click", function () {
        buttonSound.play();
        totalScore = totalScore + blackCrystalValue;
        $("#totalscore").text(totalScore);
        console.log("Total Score is : " + totalScore);
        if (totalScore === targetScore) {
            backgroundSound.pause();
            win();
        }
        else if (totalScore > targetScore) {
            backgroundSound.pause();
            loss();
        }
    })
    $("#buttonyellow").on("click", function () {
        buttonSound.play();
        totalScore = totalScore + yellowCrystalValue;
        $("#totalscore").text(totalScore);
        console.log("Total Score is : " + totalScore);
        if (totalScore === targetScore) {
            backgroundSound.pause();
            win();
        }
        else if (totalScore > targetScore) {
            backgroundSound.pause();
            loss();
        }
    })
    $("#buttonpurple").on("click", function () {
        buttonSound.play();
        totalScore = totalScore + purpleCrystalValue;
        $("#totalscore").text(totalScore);
        console.log("Total Score is : " + totalScore);
        if (totalScore === targetScore) {
            backgroundSound.pause();
            win();
        }
        else if (totalScore > targetScore) {
            backgroundSound.pause();
            loss();
        }
    })

    //Win Function
    function win() {
        youWinSound.play();
        youWinSound.volume=1;
        alert("You Win!!!");
        wins++;
        $("#wins").text(wins);
        reset();
    }

    //Loss Function
    function loss() {
        youLoseSound.play();
        alert("You Lose!!!");
        losses++;
        $("#losses").text(losses);
        reset();
    }

    //Reset
    function reset() {
        targetScore = 0;
        targetScore = Math.floor(Math.random() * 101 + 19);
        $("#targetscore").text(targetScore);
        console.log("New target score is : " + targetScore);
        totalScore = 0;
        $("#totalscore").text(totalScore);
        redCrystalValue = Math.floor(Math.random() * 11 + 1);
        console.log("New red crystal value : " + redCrystalValue);
        blackCrystalValue = Math.floor(Math.random() * 11 + 1);
        console.log("New black crystal value: " + blackCrystalValue);
        yellowCrystalValue = Math.floor(Math.random() * 11 + 1);
        console.log("New yellow crystal value: " + yellowCrystalValue);
        purpleCrystalValue = Math.floor(Math.random() * 11 + 1);
        console.log("New Purple Crystal Value: " + purpleCrystalValue);
        backgroundSound.play();
    }
})
