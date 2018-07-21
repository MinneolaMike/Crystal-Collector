//Setting the game up to run when the window has finshed loading
$(document).ready(function(){
    
    //Global Variables
    var totalScore = 0;
    var wins = 0;
    var losses = 0;

    //Audio variables
    var youWinSound = new Audio("../sounds/win.mp3");
    var youLoseSound = new Audio("../sounds/lose.mp3");
    var buttonSound = new Audio("../sounds/button.mp3");
    var backgroundSound = new Audio("../sounds/chillout.mp3");

    backgroundSound.play();

    //Genreate a random Target Score
    var targetScore = Math.floor(Math.random() * 101 + 19);
    console.log("The target score is = " + targetScore);
    //Display it in the HTML
    $("#targetscore").text(targetScore);
    // crystalValues();
    
    //Generate a random value for each Crystal
    // function crystalValues() {
        var redCrystalValue = Math.floor(Math.random() * 11 + 1);
        console.log("Red Crystal Value = " + redCrystalValue);
        // return redCrystalValue;
        var blackCrystalValue = Math.floor(Math.random() * 11 + 1);
        console.log("Black Crystal Value = " + blackCrystalValue);
        // return blackCrystalValue;
        var yellowCrystalValue = Math.floor(Math.random() * 11 + 1);
        console.log("yellow Crystal Value = " + yellowCrystalValue);
        // return yellowCrystalValue;
        var purpleCrystalValue = Math.floor(Math.random() * 11 + 1);
        console.log("Purple Crystal Value = " + purpleCrystalValue);
        // return purpleCrystalValue;
    // }
    //RE-Assigning Crystal Values to new variables outside the function
    // var redValue = redCrystalValue;
    // var blackValue = blackCrystalValue;
    // var yellowValue = yellowCrystalValue;
    // var purpleValue = purpleCrystalValue;

    //Display wins and losses
    $("#wins").text(wins);
    $("#losses").text(losses);
    
    //player clicks a crystal and score is updated
    $("#buttonred").on("click", function() {
        totalScore = totalScore + redCrystalValue;
        $("#totalscore").text(totalScore);
        console.log("Total Score is : " + totalScore);
        buttonSound.play();
        // return totalScore;
        // winLoss();
        if (totalScore === targetScore) {
            win();
        }
        else if (totalScore > targetScore) {
            loss();
        }
    })
    $("#buttonblack").on("click" , function() {
        totalScore = totalScore + blackCrystalValue;
        $("#totalscore").text(totalScore);
        console.log("Total Score is : " + totalScore);
        buttonSound.play();
        // return totalScore;
        // winLoss();
        if (totalScore === targetScore) {
            win();
        }
        else if (totalScore > targetScore) {
            loss();
        }
    })
    $("#buttonyellow").on("click" , function () {
        totalScore = totalScore + yellowCrystalValue;
        $("#totalscore").text(totalScore);
        console.log("Total Score is : " + totalScore);
        buttonSound.play();
        // return totalScore;
        // winLoss();
        if (totalScore === targetScore) {
            win();
        }
        else if (totalScore > targetScore) {
            loss();
        }        
    })
    $("#buttonpurple").on("click" , function() {
        totalScore = totalScore + purpleCrystalValue;
        $("#totalscore").text(totalScore);
        console.log("Total Score is : " + totalScore);
        buttonSound.play();
        // return totalScore;
        // winLoss();
        if (totalScore === targetScore) {
            win();
        }
        else if (totalScore > targetScore) {
            loss();
        }
    })
    // var total = totalScore;

    //Win Or Loss and updtae the appropriate score
    // function winLoss() {
        // if (total === targetScore){
            // alert("You Won!!");
            // wins++;
            // $("#wins").text(wins);
            // reset();
        // }
        // else if (total > targetScore){
            // alert("You Lost!!");
            // losses++;
            // $("#losses").text(losses);
            // reset();
        // }
    // }

    function win() {
        alert("You Win!!!");
        wins++;
        $("#wins").text(wins);
        youWinSound.play();
        reset();
    }

    function loss() {
        alert("You Lose!!!");
        losses++;
        $("#losses").text(losses);
        youLoseSound.play();
        reset();
    }

    //Reset
    function reset(){
        var targetScore = Math.floor(Math.random() * 101 + 19);
        console.log("The target score is = " + targetScore);
        // crystalValues();
        totalScore = 0;
        $("#totalscore").text(totalScore);
        // total = 0;
        var redCrystalValue = Math.floor(Math.random() * 11 + 1);
        console.log("Red Crystal Value = " + redCrystalValue);
        // return redCrystalValue;
        var blackCrystalValue = Math.floor(Math.random() * 11 + 1);
        console.log("Black Crystal Value = " + blackCrystalValue);
        // return blackCrystalValue;
        var yellowCrystalValue = Math.floor(Math.random() * 11 + 1);
        console.log("yellow Crystal Value = " + yellowCrystalValue);
        // return yellowCrystalValue;
        var purpleCrystalValue = Math.floor(Math.random() * 11 + 1);
        console.log("Purple Crystal Value = " + purpleCrystalValue);
        chilloutSound.play();        
    }    
})
