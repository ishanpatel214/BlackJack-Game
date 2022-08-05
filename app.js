let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let player = {name: "Per", chips: 200}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function startGame()
{
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame()
{
    cardsEl.textContent = "Cards: "
    for(let i = 0; i < cards.length; i++)
    {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if(sum <= 20)
    {
        message = "Do you want to draw a new card?"
        isAlive = true
    }
    else if(sum === 21)
    {
        message = "Woohoo! You've got Blackjack!"
        hasBlackJack = true
        isAlive = true
    }
    else
    {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard()
{
    if(isAlive === true && hasBlackJack === false)
    {
        let cardVar = getRandomCard()
        sum += cardVar
        cards.push(cardVar)
        renderGame()
    }
}


function getRandomCard()
{
    let num = Math.floor(Math.random() * 13) + 1
    if(num > 10)
    {
        return 10
    }
    else if(num === 1)
    {
        return 11
    }
    else
    {
        return num
    }
}


