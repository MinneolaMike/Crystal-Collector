//Setting the game up to run when the window has finshed loading
$(document).ready(function () {

    //Global Variables
    var totalScore = 0;
    var wins = 0;
    var losses = 0;

    // Audio variables
    var youWinSound = new Audio("assets/audio/win.mp3");
    var youLoseSound = new Audio("assets/audio/lose.mp3");
    var buttonSound = new Audio("assets/audio/button.mp3");
    var backgroundSound = new Audio("assets/audio/chillout.mp3");

    //Starts the audio
    window.onload = function(){
        backgroundSound.play();
        console.log("Onload Fired");
    }

    // backgroundSound.play();
    
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
        totalScore = totalScore + redCrystalValue;
        $("#totalscore").text(totalScore);
        console.log("Total Score is : " + totalScore);
        buttonSound.play();
        if (totalScore === targetScore) {
            win();
        }
        else if (totalScore > targetScore) {
            loss();
        }
    })
    $("#buttonblack").on("click", function () {
        totalScore = totalScore + blackCrystalValue;
        $("#totalscore").text(totalScore);
        console.log("Total Score is : " + totalScore);
        buttonSound.play();
        if (totalScore === targetScore) {
            win();
        }
        else if (totalScore > targetScore) {
            loss();
        }
    })
    $("#buttonyellow").on("click", function () {
        totalScore = totalScore + yellowCrystalValue;
        $("#totalscore").text(totalScore);
        console.log("Total Score is : " + totalScore);
        buttonSound.play();
        if (totalScore === targetScore) {
            win();
        }
        else if (totalScore > targetScore) {
            loss();
        }
    })
    $("#buttonpurple").on("click", function () {
        totalScore = totalScore + purpleCrystalValue;
        $("#totalscore").text(totalScore);
        console.log("Total Score is : " + totalScore);
        buttonSound.play();
        if (totalScore === targetScore) {
            win();
        }
        else if (totalScore > targetScore) {
            loss();
        }
    })

    //Win Function
    function win() {
        youWinSound.play();
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
        var targetScore = Math.floor(Math.random() * 101 + 19);
        $("#targetscore").text(targetScore);
        console.log("New target score is : " + targetScore);
        totalScore = 0;
        $("#totalscore").text(totalScore);
        var redCrystalValue = Math.floor(Math.random() * 11 + 1);
        console.log("New red crystal value : " + redCrystalValue);
        var blackCrystalValue = Math.floor(Math.random() * 11 + 1);
        console.log("New black crystal value: " + blackCrystalValue);
        var yellowCrystalValue = Math.floor(Math.random() * 11 + 1);
        console.log("New yellow crystal value: " + yellowCrystalValue);
        var purpleCrystalValue = Math.floor(Math.random() * 11 + 1);
        console.log("New Purple Crystal Value: " + purpleCrystalValue);
        backgroundSound.play();
    }
})
