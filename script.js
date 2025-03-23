// start with 16 boxes arranged in 4x4 grid

// have button that when pressed accepts a number from the user and translates to new total boxes
const footer = document.querySelector(".footer")
const sketchArea = document.querySelector(".sketchzone");
console.log(sketchArea);

const rowNames = [];
const columnNames = [];
const lowerNumPrefix = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth"];
const UpperNumPrefix = ["First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh", "Eighth", "Ninth", "Tenth"];

for (let i = 0; i < 10; ++i) {
  rowNames[i] = ( lowerNumPrefix[i] + "Row");
  columnNames[i] = (UpperNumPrefix[i] + "Column");
}


const createElement = function(elem, addClass, textContent, appendTo) {
  const element =  document.createElement(elem);
  element.classList.add(addClass);
  element.textContent = textContent;
  appendTo.appendChild(element);

}

const startBoxBuilding = function(boxCount) {
  const gridLayout = perfectSquare(boxCount);
  let columns = 0;
  let rows = 0;
  let i = 0;
    for (rows; ( (rows <= gridLayout) && (i < boxCount)) ;) {
      columns = 0;
      for (columns; columns < gridLayout; columns++) {
        const boxClass = (rowNames[rows] + columnNames[columns]);
        createElement("div", boxClass,"", sketchArea)
        setBoxSize(boxClass, gridLayout);
        i++
      }
      rows++;
    }

// createElement("div", boxClasses, "". sketchArea)
}

function test(i, row, col){
  console.log(`loop: ${i} row: ${row} column: ${col}`)
}

const whichButton = function(){
  let boxCount;
  if (this.classList == "changeGrid"){
    let i = false;
    while (i === false) {
      boxCount = Number(prompt( "How many boxes do you want? 1-100" ));
      i = validateNum(boxCount);
    }
    startBoxBuilding(boxCount);
  } else if (this.classList == "resetGrid"){
    startBoxBuilding(16);
  }
}

// helper functions in global scope

function perfectSquare(num) {
  let perfectSq = 0;
  let i = 0;
  while ( perfectSq < num ) {
    i++
    perfectSq = ( i * i );
  }
  return i;
}

 function validateNum(num) {
  if ((Number.isInteger(num) === true) && ((num > 0) && num <=100)) {
    return true;
  }
  return false;
}


createElement("button", "changeGrid", "Click to Change", footer);
createElement("button", "resetGrid", "Click to Reset", footer);
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", whichButton);
});



// find equal or highest perfect square to know what sort of grid to form

// divide current content box width / height. Whichever is lower set as both width and height of boxes - they must be square
function setBoxSize(box, boxCount) {
  console.log(box);
const boxElem = document.querySelector(`.${box}`);
console.log(boxElem);
const size = (100 / boxCount);
boxElem.style.height = (`${size}%`);

boxElem.style.width = (`${size}%`);
}
// generate boxes through iterative loops. Will need a counter for box number, increment row. class will have to be generated and tied to boxes so need the numbers


// to use naming boxes 1-100

