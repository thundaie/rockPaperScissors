const resultDisplay = document.getElementById("result")
const myChoiceDisplay = document.getElementById("myChoice")
const computerChoiceDisplay = document.getElementById("computerChoice")
const possibleSelection = document.querySelectorAll("button:not(#reset)")
const playerDisplay = document.getElementById("player")
const computerDisplay = document.getElementById("comp")
const resetButton = document.getElementById("reset")
let myChoice
let computerChoice
let myResult
let myScore = 0
let computerScore = 0
computerDisplay.innerHTML = 0
playerDisplay.innerHTML = 0




possibleSelection.forEach(choice => choice.addEventListener('click', (e) => {
    myChoice = e.target.id 
    myChoiceDisplay.innerHTML = myChoice
    generateComputerChoice()
    generateResult()
    scoreCounter()
}))


const generateComputerChoice = () => {
    const random = Math.floor(Math.random() * possibleSelection.length) + 1
    console.log(random)

    if(random === 1){
        computerChoice = "rock"
    }
    else if(random === 2){
        computerChoice = "paper"
    }
    else{
        computerChoice = "scissors"
    }

    return computerChoiceDisplay.innerHTML = computerChoice    
}

const generateResult = () => {
    if(computerChoice === myChoice){
        myResult = "It's a draw. \n Play again?"
    }
    else if(computerChoice === "rock" && myChoice === "scissors"){
        myResult = "Rock crushes Scissors \n You lose"
    }
    else if(computerChoice === "rock" && myChoice === "paper"){
        myResult = "Paper covers Rock \n You win!"
    }
else if(computerChoice === "paper" && myChoice === "scissors"){
    myResult = "Scissors cuts Paper \n You win!"
}
else if(computerChoice === "paper" && myChoice === "rock"){
    myResult = "Paper covers Rock \n You lose"
}
else if(computerChoice === "scissors" && myChoice === "rock"){
    myResult = "Rock crushes Scissors \n You win!"
}
else if(computerChoice === "scissors" && myChoice === "paper"){
    myResult = "Scissors cuts Paper \n You lose"
}

return resultDisplay.innerHTML = myResult
}


const scoreCounter = () => {
    if(myResult.includes("You lose")){
        computerScore++
        computerDisplay.innerHTML = computerScore
    }
    if(myResult.includes("You win")){
        myScore++
        console.log("score Player")
        playerDisplay.innerHTML = myScore
    }
}



resetButton.addEventListener("click", (e) => {
    computerDisplay.innerHTML = 0
    playerDisplay.innerHTML = 0
})