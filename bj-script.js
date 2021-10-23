let player = {
    name: "Darec",
    chips:500
}
let isAlive = false
let sum = 0
let hasBj = false
let sumEl = document.getElementById("sum-el")
let cards = document.getElementById("cards")
let messageEl = document.getElementById("message-el")
let message = ""
let cardsArray = []
let playerEl =  document.getElementById("player-el")


playerEl.textContent = player.name + ": $" + player.chips

function startGame(){  
    player.chips -= 10
    isAlive = true
    hasBj = false
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cardsArray = [firstCard, secondCard]
    sum = firstCard + secondCard
    playGame()
}
function getRandomCard(){
    intNum = Math.random() * 11 | 2
    return intNum
}

function playGame(){    
    cards.textContent = "Cards: "
    for (let i = 0 ; i < cardsArray.length; i++){
        cards.textContent += cardsArray[i] + " "
    }
    sumEl.textContent = "Sum : " + sum
    if (sum <= 20){
        message = "Do you want another card?"        
    } else if (sum === 21) {
        message = "You win!"
        hasBj = true 
        player.chips += 50 
    } else {
        message = "Sorry, you lose."
        isAlive = false 
        player.chips -= 30  
    }
    messageEl.textContent = message
    playerEl.textContent = player.name + ": $" + player.chips
}


    function drawCard(){
        if (isAlive == true && hasBj === false){
            let newCard = getRandomCard()
            sum += newCard 
            cardsArray.push(newCard)   
            playGame()

}}


function quit(){
    message = "Play again?"
    cards.textContent = "Cards : "
    sumEl.textContent = "Sum : "
    sum = 0
    cardsArray.clear
    messageEl.textContent = message
}   
