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
let word = "";
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
    if(key == "ENTER"){
        enter()
    }
    else{

    // console.log("click",key)
    addLetter(key)
    }
} 

const addLetter = (letter) =>{
    if(currentTile < 5){
        const tile = document.getElementById("guessRow-"+currentRow+"-tile-"+currentTile)
        tile.textContent = letter;
        guessRows[currentRow][currentTile] = letter
        currentTile = currentTile+1
        tile.setAttribute('data',letter)
        //This will add letter to the current word
        word = word+letter;
        // console.log(guessRows)
    }
}

const enter = () =>{
    if(word.length ==5){
        checkAnswer();
    }
    else{
        //Maybe make them shake 
    }
}

const checkAnswer = () =>{
    // const row = document.getElementById("guessRow-"+currentRow)
    row = guessRows[currentRow]

    row.forEach((answerLetter,letterIndex) => {
        const tile = document.getElementById("guessRow-"+currentRow+"-tile-"+letterIndex)
        let letter = tile.getAttribute("data")
        let correctLetter = wordle[letterIndex];
        if(correctLetter == letter){
            console.log("correct",letter);
        }
        else if(wordle.includes(letter)){
            console.log("its in",letter)
        }
        else{
            console.log(wrong,letter)
        }
        
    })
    // row.forEach((tile,tileIndex) => {
    //     console.log(tile.data)
    //     let letter = tile.data;
    //     if(letter == wordle[tileIndex]){
    //         console.log("Right Letter")
    //     }
    // })
    
}

