// rock paper scissors app

const totalScore = {computerScore: 0, playerScore: 0}

function getComputerChoice() {

    // let x = Math.floor((Math.random() * 100) + 1);
      
    const rpsChoice = ['Rock','Paper','Scissor']
    const randomNumber = Math.floor(Math.random()*3)
    return rpsChoice[randomNumber]


   
}

function getResult(playerChoice,computerChoice) {
    let score;
    //all posibilities where human can win with the computer
    if(playerChoice == computerChoice) {
        score=0
    }
    else if (playerChoice == 'Rock' && computerChoice == 'Scissor'){
        score=1
    }
   else if (playerChoice == 'Paper' && computerChoice == 'Rock'){
        score=1
    }
   else if (playerChoice == 'Scissor' && computerChoice == 'Paper'){
        score=1
    }
    //ptherwise human looses and score is -1

    else {
        score=-1
    }

    return score

}

function showResult(score,playerChoice,computerChoice){

    const resultDiv = document.getElementById('result')
    const handsDiv = document.getElementById('hands')
    const playerScoreDiv = document.getElementById('player-score')


if (score == -1) {
   resultDiv.innerHTML = "YOU LOOSE!!! -- BETTER LUCK NEXT TIME"
}
else if (score == 0) {
    resultDiv.innerHTML = "MATCH IS DRAW!!! -- WE ARE PRETTY THE SAME"
}
else {
    resultDiv.innerHTML = "YOU WON!!! -- AHH SEE YOU IN NEXT GAME"
}
handsDiv.innerHTML= `YOU ${playerChoice} vs AI ${computerChoice}`
playerScoreDiv.innerHTML =`#  YOUR SCORE : ${ totalScore['playerScore'] }        #  AI's SCORE : ${totalScore['computerScore']}`


}

function onClickRPS(playerChoice){
    console.log(playerChoice)
    const computerChoice = getComputerChoice()
    console.log({computerChoice})
    const score = getResult(playerChoice, computerChoice)
    totalScore['playerScore'] += score
    totalScore['computerScore'] -= score
    console.log({score})
    console.log(totalScore)
    showResult(score, playerChoice, computerChoice)

}

function playGame() {

    const rpsButtons = document.querySelectorAll('.rpsButton')
     rpsButtons[0].onclick = () => console.log(rpsButtons[0].value)

    // const rpsButtons = document.querySelectorAll('.rpsButton')
    // rpsButtons[0].onclick = () => console.log(rpsButtons[0].value)



    rpsButtons.forEach(rpsButton => {
       rpsButton.onclick =()  => onClickRPS(rpsButton.value)
    })

    const endGameButton = document.getElementById('endGameButton')
    endGameButton.onclick = () => endGame(totalScore)
}

function endGame(totalScore) {
     totalScore ['playerScore'] = 0
     totalScore ['computerScore'] = 0

     const resultDiv = document.getElementById('result')
     const handsDiv = document.getElementById('hands')
     const playerScoreDiv = document.getElementById('player-score')

     resultDiv.innerHTML = ''
     handsDiv.innerHTML = ''
     playerScoreDiv.innerHTML = ''

 
}

playGame()


