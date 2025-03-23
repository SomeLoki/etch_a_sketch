// start with 16 boxes arranged in 4x4 grid

const footer = document.querySelector(".footer")
const sketchArea = document.querySelector(".sketchzone");

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

// need to add clearing old boxes
const startBoxBuilding = function(boxCount) {
  const gridLayout = perfectSquare(boxCount);
  let columns = 0;
  let rows = 0;
  let i = 0;
  const rowDiff = Math.ceil(boxCount / gridLayout);
  console.log(rowDiff);
  clearSketchZone()
    for (rows; ( (rows <= gridLayout) && (i < boxCount)) ;) {
      columns = 0;
      for (columns; ((columns < gridLayout) && (i <boxCount)) ; columns++) {
        const boxClass = (rowNames[rows] + columnNames[columns]);
        createElement("div", boxClass,"", sketchArea)
        setBoxSize(boxClass, gridLayout, rowDiff);
        i++
      }
      rows++;
    }
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
  return ((Number.isInteger(num) === true) && ((num > 0) && num <=100));
 } 

function clearSketchZone() {
  while (sketchArea.lastElementChild) {
    sketchArea.removeChild(sketchArea.lastElementChild);
  }
}

createElement("button", "changeGrid", "Click to Change", footer);
createElement("button", "resetGrid", "Click to Reset", footer);
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", whichButton);
});


function setBoxSize(box, gridLayout, rowDiff) {
const boxElem = document.querySelector(`.${box}`);
const colSize = (100 / gridLayout);
const rowSize  = (100 / rowDiff);
boxElem.style.height = (`${rowSize}%`);
boxElem.style.width = (`${colSize}%`);
}

// still need to add the event listeners for actually monitoring mouse movement / boxes and applying coloring.

