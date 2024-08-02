let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

updateScore();


function playGame (playerMove) {
    computerMove = playComputerMove();
    let result;
    //console.log(computerMove);

    if (playerMove === 'Rock')
    {
        if (computerMove === 'Rock')
        {
            result = 'Tie';
        }
        else if (computerMove === 'Paper')
        {
            result = 'Win';
        }
        else if (computerMove === 'Scissors')
        {
            result = 'Lose';
        }
    }

    if (playerMove === 'Paper')
    {
        if (computerMove === 'Rock')
        {
            result = 'Win';
        }
        else if (computerMove === 'Paper')
        {
            result = 'Tie';
        }
        else if (computerMove === 'Scissors')
        {
            result = 'Lose';
        }
    }

    if (playerMove === 'Scissors') 
    {
        if (computerMove === 'Rock')
        {
            result = 'Lose';
        }
        else if (computerMove === 'Paper')
        {
            result = 'Win';
        }
        else if (computerMove === 'Scissors')
        {
            result = 'Tie';
         }   
    }

    if (result === 'Win') 
    {
        score.wins ++;
    }
    else if (result === 'Lose')
    {
        score.losses ++;
    }
    else if (result === 'Tie')
    {
        score.ties ++;
    }

    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-moves').innerHTML = `You picked <img src='${playerMove}-emoji.png' class="move">, Computer picked <img src='${computerMove}-emoji.png' class="move">`;
    updateScore();

    localStorage.setItem('score', JSON.stringify(score));
}

function updateScore() {
    document.querySelector('.js-score').innerHTML = `Wins : ${score.wins}, Losses : ${score.losses}, Ties : ${score.ties}`;
}

function playComputerMove ()
{
    const randNo = Math.random();
    //console.log(randNo);
    let computerMove;
    
    if(randNo >= 0 && randNo < 1/3)
    {
        computerMove = 'Rock';
    }
    else if (randNo >= 1/3 && randNo < 2/3)
    {
        computerMove = 'Paper';
    }
    else if (randNo >= 2/3 && randNo < 1)
    {
        computerMove = 'Scissors';
    }
    return computerMove;
}