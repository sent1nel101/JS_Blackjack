let hands = ["rock", "paper", "scissors"]

function randNum(){
    return Math.random() * 3 | 0
    
}

console.log(hands[randNum()])