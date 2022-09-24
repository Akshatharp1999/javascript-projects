const computerChoiceDisplay=document.getElementById('computerchoice')
const userChoiceDisplay=document.getElementById('userchoice')
const resultDisplay=document.getElementById('result')
let userChoice

const choices=document.querySelectorAll('button')
choices.forEach(choice=> choice.addEventListener('click', (e) =>{
    
    userChoice=e.target.id
    userChoiceDisplay.innerHTML=userChoice
    generateComputerChoice()
    getresult()
}))

 let generateComputerChoice= () => {
   const randomNumber=(Math.floor(Math.random()*3)+1)

   if (randomNumber===1){
    computerChoice='rock'
   }
   if (randomNumber===2){
    computerChoice='paper'
   }
   if (randomNumber===3){
    computerChoice='scissors'
   }
   computerChoiceDisplay.innerHTML=computerChoice
 }

 let getresult=() => {
    if(computerChoice===userChoice){
        result='draw'
    }
    else if(computerChoice==='rock'&& userChoice==='scissors'){
        result='you lose'
    }
    else if(computerChoice==='rock'&& userChoice==='paper'){
        result='you lose'
    }
    else if(computerChoice==='paper'&& userChoice==='scissors'){
        result='you win'
    }
    else if(computerChoice==='paper'&& userChoice==='rock'){
        result='you win'
    }
    else if(computerChoice==='scissors'&& userChoice==='rock'){
        result='you win'
    }
    else if(computerChoice==='scissors'&& userChoice==='paper'){
        result='you lose'
    }
    resultDisplay.innerHTML=result

 }