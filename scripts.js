const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')
const humanImg = document.querySelector('.human-img')
const machineImg = document.querySelector('.machine-img')


let humanScoreNumber = 0
let machineScoreNumber = 0

const playHuman = (humanChoice) => {
    humanImg.src=`./assets/${humanChoice}.png`
    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}

const playTheGame = (human, machine) => {
    console.log('Humano ' + human + ' Machine ' + machine)

    if (human === machine) {
        result.innerHTML = 'Empate'

    } else if (
        (human === 'rock' && machine === 'scissors') ||
        (human === 'scissors' && machine === 'paper') ||
        (human === 'paper' && machine === 'rock')) {

        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = 'Vitória'



    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = 'Derrota'
    }

}




















