//Setting the game up to run when the window has finshed loading
$(document).ready(function(){
    
    //Global Variables
    var wins = 0;
    var losses = 0;
        //Display wins and losses
        $("#wins").text(wins);
        $("#losses").text(losses);

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
    // RE-Assigning Crystal Values to new variables outside the function
    var redValue = redCrystalValue;
    var blackValue = blackCrystalValue;
    var yellowValue = yellowCrystalValue;
    var purpleValue = purpleCrystalValue;
    
    //player clicks a crystal and score is updated
    $("#buttonred").on("click", function() {
        totalScore = totalScore + redCrystalValue;
        $("#totalscore").text(totalScore);
        console.log("Total Score is : " + totalScore);
        return totalScore;
        winLoss();
    })
    $("#buttonblack").on("click" , function() {
        totalScore = totalScore + blackCrystalValue;
        $("#totalscore").text(totalScore);
        console.log("Total Score is : " + totalScore);
        return totalScore;
        winLoss();
    })
    $("#buttonyellow").on("click" , function () {
        totalScore = totalScore + yellowCrystalValue;
        $("#totalscore").text(totalScore);
        console.log("Total Score is : " + totalScore);
        return totalScore;
        winLoss();     
    })
    $("#buttonpurple").on("click" , function() {
        totalScore = totalScore + purpleCrystalValue;
        $("#totalscore").text(totalScore);
        console.log("Total Score is : " + totalScore);
        return totalScore;
        winLoss();
    })
    var total = totalScore;

    // Win Or Loss and updtae the appropriate score
    function winLoss() {
        if (total === targetScore){
            alert("You Won!!");
            wins++;
            $("#wins").text(wins);
            reset();
        }
        else if (total > targetScore){
            alert("You Lost!!");
            losses++;
            $("#losses").text(losses);
            reset();
        }
    }

    //Reset
    function reset(){
        var targetScore = Math.floor(Math.random() * 101 + 19);
        console.log("The target score is = " + targetScore);
        $("#targetscore").text(targetScore);
        crystalValues();
        total = 0;
        $("#totalscore").text(total);        
    }    
})
