//Setting the game up to run when the window has finshed loading
$(document).ready(function () {

    //Global Variables
    var totalScore = 0;
    var wins = 0;
    var losses = 0;
    var targetScore = 0;
    var redCrystalValue = 0;
    var blackCrystalValue = 0;
    var yellowCrystalValue = 0;
    var purpleCrystalValue = 0;

    // Audio variables
    var youWinSound = new Audio("assets/audio/win.wav");
    var youLoseSound = new Audio("assets/audio/lose.mp3");
    var buttonSound = new Audio("assets/audio/button.mp3");
    var backgroundSound = new Audio("assets/audio/chillout.mp3");
    
    //Start button that starts the game, audio, and slides up non-game content 
    $("#buttonstart").on("click", function () {
        $("#slide").slideUp();
        backgroundSound.play();
        console.log("slide fired");

    //Genreate a random Target Score between 19 - 120
    targetScore = Math.floor(Math.random() * 102 + 19);
    console.log("The target score is = " + targetScore);
    //Display it in the HTML
    $("#targetscore").text(targetScore);

    //Generate a random value for each Crystal between 1 - 12
    redCrystalValue = Math.floor(Math.random() * 12 + 1);
    console.log("Red Crystal Value = " + redCrystalValue);
    blackCrystalValue = Math.floor(Math.random() * 12 + 1);
    console.log("Black Crystal Value = " + blackCrystalValue);
    yellowCrystalValue = Math.floor(Math.random() * 12 + 1);
    console.log("yellow Crystal Value = " + yellowCrystalValue);
    purpleCrystalValue = Math.floor(Math.random() * 12 + 1);
    console.log("Purple Crystal Value = " + purpleCrystalValue);
    // });

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

});

    //Win Function
    function win() {
        $("#winModal").modal('show');
        youWinSound.play();
        youWinSound.volume=1;
        // alert("You Win!!!");
        wins++;
        $("#wins").text(wins);
        $("button").on("click", function() {
            reset();
            $("#winModal").modal('hide');
            console.log("Play Again Fired");
        });
    }

    //Loss Function
    function loss() {
        $("#loseModal").modal('show');
        youLoseSound.play();
        // alert("You Lose!!!");
        losses++;
        $("#losses").text(losses);
        $("button").on("click", function() {
            reset();
            $("#loseModal").modal('hide');
            console.log("Play Again Fired");
        });
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
