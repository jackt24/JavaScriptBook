let array = ["Rock", "Paper", "Scissors"];

// Player selection
numP = Math.random()
numP = numP * 3
numP = Math.floor(numP)

console.log(numP)

player = array[numP]

console.log(numP, player)

// Computer selection
numC = Math.random()
numC = numC * 3
numC = Math.floor(numC)

console.log(numC)

computer = array[numC]

console.log(numC, computer)

// Game
message = "Player: " + player + " Computer: " + computer
console.log(message)

numC == numP ? console.log("Game is a draw!") : console.log("GAME ON!")

switch(true){
    case (numP === 0 && numC === 1):
        console.log("Paper beats rock, Computer wins!")
        break;
    case (numP === 1 && numC === 0):
        console.log("Paper beats rock, Player wins!")
        break;
    case (numP === 0 && numC === 2):
        console.log("Rock beats scissors, Player wins!")
        break;
    case (numP === 2 && numC === 0):
        console.log("Rock beats scissors, Computer wins!")
        break;
    case (numP === 1 && numC === 2):
        console.log("Scissors beats paper, Computer wins!")
        break;
    case (numP === 2 && numC === 1):
        console.log("Scissors beats paper, Player wins!")
        break;
    case (numP === 0 && numC === 0 || numP === 1 && numC === 1 || numP === 2 && numC === 2 ):
        console.log("Draw!")
        break;
    default:
        console.log("Unable to resolve game")
    break;
}