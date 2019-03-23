$(document).ready(function () {
    // initialize win/loss variables
    var wins = 0;
    var losses = 0;    
    $('#numberWins').text(wins);
    $('#numberLosses').text(losses);

    // call reset() to set initial values for the game
    reset();
    
    function reset() {
        targetNumber = Math.floor(Math.random() * 120 +1);        
        $('#targetNumber').text(targetNumber);
        gem1Value = Math.floor(Math.random() * 12 + 1);
        gem2Value = Math.floor(Math.random() * 12 + 1);
        gem3Value = Math.floor(Math.random() * 12 + 1);
        gem4Value = Math.floor(Math.random() * 12 + 1);
        totalScore = 0;
        $('#totalScore').text(totalScore);
    }

    //add the value for the gem that was clicked and determine win, loss or neither.
    function evaluateScore(gemValue) {
        totalScore = totalScore + gemValue;
        $('#totalScore').text(totalScore);

        if (totalScore == targetNumber) {
            win();
        }
        else if (totalScore > targetNumber) {
            loss();
        }
    }

    //handles a win
    function win() {   
        alert("You Win!");     
        wins++;
        $('#numberWins').text(wins);
        reset();
    }
    //handles a loss
    function loss() {  
        alert("You Lost! Loser!!");      
        losses++;
        $('#numberLosses').text(losses);
        reset();
    }    

    //Gem click events
    $('#one').on('click', function () {
        evaluateScore(gem1Value);        
    })
    $('#two').on('click', function () {
        evaluateScore(gem2Value);
    })
    $('#three').on('click', function () {
        evaluateScore(gem3Value);
    })
    $('#four').on('click', function () {
        evaluateScore(gem4Value);
    });
}); 
