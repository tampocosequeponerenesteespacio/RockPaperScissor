const choices = ['rock', 'paper', 'scissor']
let playerScore = 0
let npcScore = 0

const playerScoreDisplay = document.querySelector('#player')
const npcScoreDisplay = document.querySelector('#npc')
const notification = document.querySelector('#notification')

const rockBtn = document.querySelector('#rock')
const paperBtn = document.querySelector('#paper')
const scissorBtn = document.querySelector('#scissor')

const Btns = document.querySelectorAll('.choice')


const npcPlay = () => {
    const randomInt = Math.floor(Math.random()*3)
    return choices[randomInt]
}

const PlayRound = (npcPlay, userPlay) => {
    console.log(npcPlay);
    if ( npcPlay === userPlay) {
        notification.textContent = `Computer chooses ${npcPlay}, it's a Tie!`
    }
    else if (
        (npcPlay === 'rock' && userPlay === 'paper') ||
        (npcPlay === 'paper' && userPlay === 'scissor') ||
        (npcPlay === 'scissor' && userPlay === 'rock')
    ) {
        //USER WIN
        notification.textContent = `Computer chooses ${npcPlay}, You Win!`
        playerScore++
        playerScoreDisplay.textContent = `Player: ${playerScore}`
    } else {
        //PC WIN
        notification.textContent = `Computer chooses ${npcPlay}, You Lose!`
        npcScore++
        npcScoreDisplay.textContent = `Computer: ${npcScore}`
        return 'lose'
    }    
}

rockBtn.addEventListener("click", () => {
    PlayRound(npcPlay(),'rock')
})

paperBtn.addEventListener("click", () => {
    PlayRound(npcPlay(),'paper')
})

scissorBtn.addEventListener("click", () => {
    PlayRound(npcPlay(),'scissor')
})

