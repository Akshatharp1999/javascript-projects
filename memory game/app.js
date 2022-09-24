const cardArray=[
    {
        name: 'fries',
        img:'images/fries.png',
    },
    {
        name: 'cheeseburger',
        img:'images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img:'images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img:'images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img:'images/milkshake.png',
    },
    {
        name: 'pizza',
        img:'images/pizza.png',
    },
    {
        name: 'fries',
        img:'images/fries.png',
    },
    {
        name: 'cheeseburger',
        img:'images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img:'images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img:'images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img:'images/milkshake.png',
    },
    {
        name: 'pizza',
        img:'images/pizza.png',
    }
  
]
const gridDisplay=document.getElementById('grid')
const resultDisplay=document.getElementById('result')

let cardChosen=[]
let cardsChosenId=[]
let cardsWOn=[]

cardArray.sort(() => 0.5- Math.random())
const createBoard=()=> {
    for( let i=0;i<cardArray.length;i++){
        const card=document.createElement('img')
        card.setAttribute('src' , 'images/blank.png')
        card.setAttribute('dataid',i)
        card.addEventListener('click',flipcard)

        gridDisplay.appendChild(card)

    }
}
createBoard()

const checkMatch=()=>{
    const cards=document.getElementsByTagName('img')
    
    if(cardChosen[0]==cardChosen[1]){
        alert('you found a match')
        cards[cardsChosenId[0]].setAttribute('src', 'images/white.png')
        cards[cardsChosenId[1]].setAttribute('src', 'images/white.png')
        cards[cardsChosenId[0]].removeEventListener('click',flipcard)
        cards[cardsChosenId[1]].removeEventListener('click',flipcard)
        cardsWOn.push(cardChosen)

    }
    else{
        cards[cardsChosenId[0]].setAttribute('src', 'images/blank.png')
        cards[cardsChosenId[1]].setAttribute('src', 'images/blank.png')
        alert('try again')
    }   
    resultDisplay.innerHTML = cardsWOn.length
    cardChosen=[]
    cardsChosenId=[]
    if(cardsWOn.length==cardArray.length/2){
        resultDisplay.innerHTML='congragulations you won'
    }
    
}

function flipcard(){
    const cardId=this.getAttribute('dataid')
    cardChosen.push(cardArray[cardId].name)
    console.log(cardChosen)
    cardsChosenId.push(cardId)
    console.log(cardsChosenId)
    this.setAttribute('src', cardArray[cardId].img)
   
    if(cardChosen.length===2){
        setTimeout(checkMatch, 500)
    }
   
}