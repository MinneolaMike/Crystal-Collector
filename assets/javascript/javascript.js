//Setting the game up to run when the window has finshed loading
$(document).ready(function(){
    
    //Global Variables
    var totalScore = 0;
    var wins = 0;
    var losses = 0;

    //Genreate a random Target Score
    var targetScore = Math.floor(Math.random() * 101 + 19);
    console.log("The target score is = " + targetScore);
    //Display it in the HTML
    $("#targetscore").text(targetScore);
    crystalValues();
    
    //Generate a random value for each Crystal
    function crystalValues() {
        var redCrystalValue = Math.floor(Math.random() * 11 + 1);
        console.log("Red Crystal Value = " + redCrystalValue);
        return redCrystalValue;
        var blackCrystalValue = Math.floor(Math.random() * 11 + 1);
        console.log("Black Crystal Value = " + blackCrystalValue);
        return blackCrystalValue;
        var yellowCrystalValue = Math.floor(Math.random() * 11 + 1);
        console.log("yellow Crystal Value = " + yellowCrystalValue);
        return yellowCrystalValue;
        var purpleCrystalValue = Math.floor(Math.random() * 11 + 1);
        console.log("Purple Crystal Value = " + purpleCrystalValue);
        return purpleCrystalValue;
    }
    //RE-Assigning Crystal Values to new variables outside the function
    var redValue = redCrystalValue;
    var blackValue = blackCrystalValue;
    var yellowValue = yellowCrystalValue;
    var purpleValue = purpleCrystalValue;

    //Display wins and losses
    $("#wins").text(wins);
    $("#losses").text(losses);
    
    //player clicks a crystal and score is updated
    $("#buttonred").on("click", function() {
        totalScore = totalScore + redValue;
        $("#totalscore").text(totalScore);
        console.log("Total Score is : " + totalScore);
    })
    $("#buttonblack").on("click" , function() {
        totalScore = totalScore + blackValue;
        $("#totalscore").text(totalScore);
        console.log("Total Score is : " + totalScore);
    })
    $("#buttonyellow").on("click" , function () {
        totalscore = totalScore + yellowValue;
        $("#totalscore").text(totalScore);
        console.log("Total Score is : " + totalScore);
    })
    $("#buttonpurple").on("click" , function() {
        totalScore = totalScore + purpleValue;
        $("#totalscore").text(totalScore);
        console.log("Total Score is : " + totalScore);
    })

    //win
    //loss
    //update wins and losses
    //reset
})
