function computerPlay() {
    let number = Math.floor((Math.random() * 3) + 0);
    let choices = ['ROCK', 'PAPER', 'SCISSORS'];
    return choices[number];

}

function playRound(playerSelection, computerSelection) {
    //console.log(playerSelection);
    if (playerSelection == 'ROCK' && computerSelection == 'ROCK') {
        return `It's a tie! Rock vs. Rock`;

    }
    else if (playerSelection == 'PAPER' && computerSelection == 'PAPER') {
        return `It's a tie! Paper vs. Paper`;

    }
    else if (playerSelection == 'SCISSORS' && computerSelection == 'SCISSORS') {
        return `It's a tie! Scissors vs Scissors`;

    }



    else if (playerSelection == 'PAPER' && computerSelection == 'ROCK') {
        return `You win! Paper beats rock!`;
    }
    else if (playerSelection == 'PAPER' && computerSelection == 'SCISSORS') {
        return `You lose! Scissors beats paper!`;
    }



    else if (playerSelection == 'ROCK' && computerSelection == 'PAPER') {
        return `You lose! Paper beats rock!`;
    }

    else if (playerSelection == 'ROCK' && computerSelection == 'SCISSORS') {
        return `You win! Rock beats scissors!`;
    }



    else if (playerSelection == 'SCISSORS' && computerSelection == 'PAPER') {
        return `You win! Scissors beats paper!`;
    }

    else if (playerSelection == 'SCISSORS' && computerSelection == 'ROCK') {
        return `You lose! Rock beats scissors!`;
    }


}

//main code here

let playerScore = 0;
let computerScore = 0;
let counter = 0;

const buttons = document.querySelectorAll('button');

const resultsDiv = document.getElementById('results');
const result = document.createElement('p');
resultsDiv.appendChild(result);

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {

        result.textContent = playRound(button.id.toString().toUpperCase(), computerPlay());
        let resultSplit = result.textContent.split(' ');
        if (counter == 4) {
            if (playerScore > computerScore) {
                result.textContent = 'Congratulations! You win!';
                counter = 0;
            }
            else if (computerScore > playerScore) {
                result.textContent = 'Game over! You lose!';
                counter = 0;
            }

            else if (playerScore == computerScore) {
                result.textContent = 'It is a tie! No winners!';
                counter = 0;
            }
        }
        else if (resultSplit[1] == 'win!') {
            playerScore++;
            counter++;
        }
        else if (resultSplit[1] == 'lose!') {
            computerScore++;
            counter++;
        }
        else {
            counter++;
        }


    });
});