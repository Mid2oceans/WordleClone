const tileDisplay = document.querySelector('.tile-container');

const keybaord = document.querySelector('.key-container');

const wordle = "SUPER";

const keys = [
    'Q',
    'W',
    'E',
    'R',
    'T',
    'Y',
    'U',
    'I',
    'O',
    'P',
    'A',
    'S',
    'D',
    'F',
    'G',
    'H',
    'J',
    'K',
    'L',
    'ENTER',
    'Z',
    'X',
    'C',
    'V',
    'B',
    'N',
    'M',
    '⌫'
        ]




const guessRows = [
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
]

let currentRow = 0;
let currentTile=0;

guessRows.forEach((guessRow,guessRowIndex) => {
    const rowElement = document.createElement('div');
    rowElement.setAttribute('id',"guessRow-"+guessRowIndex)
    guessRow.forEach((guess,guessIndex)=>{
        const tile = document.createElement('div');
        tile.setAttribute('id',"guessRow-"+guessRowIndex+"-tile-"+guessIndex);
        tile.classList.add('tile');
        rowElement.append(tile);
    })

    tileDisplay.append(rowElement);
    
});


// For each key in the array
keys.forEach(key =>{
    // create a button 
    const buttonElement = document.createElement('button')
    // make the text content of the button the key
    buttonElement.textContent = key;
    // set the id so we can use it later
    buttonElement.setAttribute('id',key)
    // add an event listener to the function 
    buttonElement.addEventListener('click',() => handleClick(key))
    //append it to the keyboard container
    keybaord.append(buttonElement)
})


const handleClick = (key) => {
    console.log("click",key)
    addLetter(key)
} 

const addLetter = (letter) =>{
    const tile = document.getElementById("guessRow-"+currentRow+"-tile-"+currentTile)
    tile.textContent = letter;
    currentTile = currentTile+1
}

