const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')
const humanImg = document.querySelector('.img-human')
const machineImg = document.querySelector('.img-machine')
const resultImg = document.querySelector('.lose-img')


let humanScoreNumber = 0
let machineScoreNumber = 0

const GAME_OPTIONS = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS:'scissors'
}

const playHuman = (humanChoice) => {
    humanImg.src=`./assets/${humanChoice}.png`
    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS]
    const randomNumber = Math.floor(Math.random() * 3)
    machineImg.src=`./assets/${choices[randomNumber]}.png`

    return choices[randomNumber]
}

const playTheGame = (human, machine) => {
    console.log('Humano ' + human + ' Machine ' + machine)

    if (human === machine) {
        result.innerHTML = 'Empate'
        resultImg.src = './assets/tieImgNew.png'
    

    } else if (
        (human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSORS) ||
        (human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.PAPER) ||
        (human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK)) {

        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = 'Vitória'
        resultImg.src = './assets/TrophyXboxNew.png'



    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = 'Derrota'
        resultImg.src = './assets/loserNew.png'
    }

}




















