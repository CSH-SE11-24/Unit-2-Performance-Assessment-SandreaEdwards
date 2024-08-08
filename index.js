const prompt = require('prompt-sync')()

console.log(`Disclaimer: This program is caps-sensitive and choice-based. Type all choices with proper capitalization. Thank you for playing!
`)

//player info
const username = prompt(`* What is your name?>`)
console.log(`* Welcome to my game, ${username}`)

let age = prompt(`* How old are you, ${username}?>`)
parseInt(age)

let role = prompt(`* What role do you want, ${username}?> (Mage, Chef, Fighter)`)

let powerLevel = Math.floor(Math.random() * 10)
console.log(`* Now here's your random power level: ${powerLevel}`)
parseInt(powerLevel)

let userProfile = {
name: username,
age: age,
role: role,
level: powerLevel,
}

let inventory = [""]

//start the adventure
console.log(`* You, the areas top ${role}, are peacefully sleeping in your home, when suddenly you hear a loud knock. 
* ???: "Sheriff! Open your door!"`)

//first section
let playerChoice1 = prompt(`* What are you going to do? (Answer door / Flee)>`)


 if (playerChoice1 === "Answer door"){
   gamePathAnsDoor()
 }else if (playerChoice1 === "Flee"){
  gamePathFleeHome() 
 }

function gamePathAnsDoor(){
console.log(`* The second the locks click to unlock your door, the person on the other side kicks it open, knocking you to the floor. Your ears ring and you're confused.

* Sheriff?: "You're under arrest for the murder of WURREN ALESTER"

* WURREN ALESTER, the city mayor. It came as a surprise to hear that tyrant was dead, but to hear that YOU did it? You had to have been framed. 

* You felt a flash of pain before everything went black.  

* You feel your body suddenly jolt up. You analyze your surroundings with blurry vision to realize you're locked in a cell.`)
  userProfile["status"] = "captured"
  console.log(`* You've been captured`)
}

function gamePathFleeHome(){
    console.log(`* You were startled by the loud knocking. You felt in your gut that you had to flee, so you did. 
 
  * You walk around your home grabbing items as silently as possible.`)
  let stuffPick1 = prompt(`What ITEM would you like to add to your inventory (Cloth[CRAFTING ITEM], Helmet[ARMOUR LEVEL: 5], Krimp Nut[FOOD ITEM])>`)
  let stuffPick2 = prompt(`What ITEM would you like to add to your inventory (Bucket[TOOL ITEM], Loaf of bread[FOOD ITEM], Rusty Sickle[WEAPON])>`)
  let stuffPick3 = prompt(`What ITEM would you like to add to your inventory (Backpack[EQUIPTMENT ITEM], Lantern[TOOL ITEM], Lockpick[TOOL ITEM])>`)

 if (stuffPick1 === "Cloth") {
   inventory.push("Cloth")
 }else if (stuffPick1 === "Helmet"){
   inventory.push("Helmet")
 }else if (stuffPick1 === "Krimp Nut"){
   inventory.push("Krimp Nut")
 }

 if (stuffPick2 === "Bucket"){
  inventory.push("Bucket")
 }else if (stuffPick2 === "Loaf of Bread"){
  inventory.push("Loaf of Bread")
 }else if (stuffPick2 === "Rusty Sickle"){
  inventory.push("Rusty Sickle")
 }

  if (stuffPick3 === "Backpack"){
  inventory.push("Backpack")
 }else if (stuffPick3 === "Lantern"){
 inventory.push("Lantern")
 }else if (stuffPick3 === "Lockpick"){
 inventory.push("Lockpick")
 }
  console.log(`* You grab your items and walk towards your window, opposite the door. The second you push the window open a tall bald man grabs your shirt and drags you out of the window and throws you to the floor. Everything goes black.

* You feel your body suddenly jolt up. You analyze your surroundings with blurry vision to realize you're locked in a cell.`)
  userProfile["status"] = "captured"
  console.log(`* You've been captured`)
}


//next section
function nextSteps(){
let nextStep = prompt(`What's your next move? (Wait in your cell / Attempt to escape)>`)

if (nextStep === "Wait in cell"){
waitInCell()
}else if (nextStep === "Attempt to escape"){
attemptEsc()
 }
}
function waitInCell(){
 console.log(`* Not sure why, but you decided to wait in your cell, ${username}.
 * When the gaurds arrive, you are told your fate
* Guard: You will be executed without trial for the murder of WURREN ALESTER. You will be granted a last meal and speech to the town beforehand.
* In shock, you froze. You know you didn't kill that man, so why aren't you getting a trial?`)
}

function attemptEsc(){  
  console.log(`*You've decided to attempt an escape. You will have 5 tries to guess the letters to the password to your cell before the gaurds come.`)
 let password = "Mercy"
 let letterGuess = prompt("Enter a letter>")
 let attempts = 0

while (attempts <= 5){
  if (password.includes(letterGuess)){
   console.log(`You got one letter!`)
    attempts++
  }else{
   console.log("INCORRECT")
  }
  attempts++
 } 

  console.log(`Quick! You have 3 attempts to guess the 5 letter password!`)
let guessAttempt = 0
let wordGuess = prompt("Guess the word>")
guessAttempt++
if (password === wordGuess){
  console.log("You escaped!")
}else{
 while (guessAttempt <= 3){
  if (password === wordGuess){
    console.log("You escaped!")
    attempts++
    attempts++
   }else{
    console.log(wordGuess)
    attempts++
   }
  }
 } 
}








































































