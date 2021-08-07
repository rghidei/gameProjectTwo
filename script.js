//the hand must equal 21 or close too
//these are all the screniors you can get
//1.you can have less than 21, means your still in the game
//2.you can have more than 21, means your out of the game
//3.you can have exaclty 21, means you won that round and got blackjack
// if(sum < 21){
//   console.log("Do you want a new card? 🙂")
// } else if(sum === 21){
//   console.log("Woohoo! You got BlackJack! 🥳")
// } else{
//   console.log("You're out of the Game! 😭")
// }

// 1. Create two variables, firstCard and secondCard.
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards

let player = {
    name: "Per",
    chips: 1000
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let msg = ""

let msgEl = document.getElementById
('msg-el')
let sumEl = document.getElementById('sum-el')
let cardEl = document.getElementById('card-el')
let playerEl = document.getElementById("player-el")


function randomCard(){
  let randomNum = Math.floor(Math.random()*12) + 1
  if(randomNum === 1){
    return 11
  } else if(randomNum > 10){
    return 10
  }else{
    return randomNum
  }
}

function startGame(){
  isAlive = true
  hasBlackJack = false
  let firstCard = randomCard()
  let secondCard = randomCard()
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard
  renderGame()
}

//his way
function renderGame(){
  if (sum <= 20) {
      msg = "Do you want to draw a new card? 🙂"
  } else if (sum === 21) {
      msg = "Wohoo! You've got Blackjack! 🥳"
      hasBlackJack = true
      player.chips += 100
  } else {
      isAlive = false
      msg ="You're out of the game! 😭"
      player.chips -= 100
  }
  msgEl.innerText = msg
  sumEl.textContent = "Sum: " + sum
  cardEl.textContent = "Cards "
  for(let i = 0; i < cards.length; i++){
    cardEl.textContent += cards[i] + " "
  }
  playerEl.textContent = player.name + ": $" + player.chips

}

function newCard(){
  if(isAlive === true && hasBlackJack !== true){
  let card = randomCard()
  sum += card
  cards.push(card)
  renderGame()
  }
}

// function stopGame(){

// }
