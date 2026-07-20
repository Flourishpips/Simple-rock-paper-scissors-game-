 let scores = JSON.parse(localStorage.getItem('scores')) || {
            wins: 0,
            losses: 0,
            ties: 0

        }

        updateScoreElement();
        
        updateMovesElement();

        function playGame(playerMove){
            const randomNumber = Math.random();

        let computerMove = '';
        if (randomNumber > 2/3 && randomNumber <= 1) {
            computerMove = 'Scissors';
        }
        else if(randomNumber < 1/3 && randomNumber >= 0) {
            computerMove = 'Rock';
        }
        else {
            computerMove = 'Paper';
        }
        console.log(computerMove);

        
        let result = '';

            if (playerMove === 'scissors') {
                if(computerMove === 'Paper') {
                        result = 'You win.';
                    } else if (computerMove === 'Rock'){
                        result = 'You lose.';
                    } else if (computerMove === 'Scissors') {
                        result = 'Tie.';
                    }

            }   else if (playerMove === 'paper') {
                    if(computerMove === 'Paper') {
                        result = 'Tie.';
                    } else if (computerMove === 'Rock'){
                        result = 'You win.';
                    } else if (computerMove === 'Scissors') {
                        result = 'You lose.';
                    }

            }   else if (playerMove === 'rock') {
                    if (computerMove === 'Rock') {
                    result = 'Tie.';
                    } else if (computerMove === 'Paper') {
                        result = 'You lose.';
                    } else if (computerMove === 'Scissors') {
                        result = 'You win.';
                    }
            }

            if (result === 'You win.') {
                scores.wins += 1;
            } else if (result === 'You lose.') {
                scores.losses += 1;
            } else if (result === 'Tie.'){
                scores.ties += 1;
            }

            localStorage.setItem('scores', JSON.stringify(scores));

            updateScoreElement();

            document.querySelector('.js-result').innerHTML = result ;

            document.querySelector('.js-moves')
                    .innerHTML = `You
        <img src="assets/${playerMove}-emoji.png" alt="" class="move-icon h-[50px] self-start ">
        <img src="assets/${computerMove}-emoji.png" alt="" class="move-icon h-[50px]">
        Computer`;

            
            alert(`You picked ${playerMove}. Computer picked ${computerMove}.${result}.
Wins: ${scores.wins}, Losses: ${scores.losses}, Ties: ${scores.ties}`);
        }


            function updateScoreElement() {
                document.querySelector('.js-score')
                    .innerHTML = `Wins: ${scores.wins}, Losses: ${scores.losses}, Ties: ${scores.ties}`;
            }

            function updateMovesElement() {
                document.querySelector('.js-moves')
                    .innerHTML = `You ${playerMove} - Computer ${computerMove}.`;
            }

        