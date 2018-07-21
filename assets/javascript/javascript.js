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
    var blackCrystalValue = Math.floor(Math.random() * 11 + 1);
    console.log("Black Crystal Value = " + blackCrystalValue);
    var yellowCrystalValue = Math.floor(Math.random() * 11 + 1);
    console.log("yellow Crystal Value = " + yellowCrystalValue);
    var purpleCrystalValue = Math.floor(Math.random() * 11 + 1);
    console.log("Purple Crystal Value = " + purpleCrystalValue);
    }

    //Display wins and losses
    $("#wins").text(wins);
    $("#losses").text(losses);
    
    //player clicks a crystal and score is updated

    //win
    //loss
    //update wins and losses
    //reset
})
