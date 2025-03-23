
const header = document.querySelector(".header")
const sketchArea = document.querySelector(".sketchzone");

const rowNames = [];
const columnNames = [];


for (let i = 0; i < 100; ++i) {
  rowNames[i] = ("Row" + `${i}`);
  columnNames[i] = ("Column" + `${i}`);
}


const createElement = function(elem, addClass, textContent, appendTo) {
  const element =  document.createElement(elem);
  element.classList.add(addClass);
  element.textContent = textContent;
  appendTo.appendChild(element);
}

const buildGrid = function(sideCount) {
  let totalBoxes = (sideCount * sideCount)
  let columns = 0;
  let rows = 0;
  let i = 0;
  clearSketchZone()
  for (rows; ( (rows <= sideCount) && (i < totalBoxes)) ;) {
    columns = 0;
    for (columns; ((columns < sideCount) && (i < totalBoxes)) ; columns++) {
      const boxClass = (rowNames[rows] + columnNames[columns]);
      createElement("div", boxClass,"", sketchArea)
      setBoxSize(boxClass, sideCount);
      i++
    }
    rows++;
  }
  makeInteractive();
}

const whichButton = function(){
  let boxCount;
  if (this.classList == "changeGrid"){
    let i = false;
    while (i === false) {
      boxCount = Number(prompt( "How many boxes per side? 1-100" ));
      i = validateNum(boxCount);
    }
    buildGrid(boxCount);
  } else if (this.classList == "resetGrid"){
    resetGrid();
  }
}

// helper functions in global scope

function setBoxSize(box, gridLayout) {
  const boxElem = document.querySelector(`.${box}`);
  const size = (100 / gridLayout);
  boxElem.style.height = (`${size}%`);
  boxElem.style.width = (`${size}%`);
}

function validateNum(num) {
  return ((Number.isInteger(num) === true) && ((num > 0) && num <=100));
} 

function clearSketchZone() {
  while (sketchArea.lastElementChild) {
    sketchArea.removeChild(sketchArea.lastElementChild);
  }
}

createElement("button", "changeGrid", "Click to Change", header);
createElement("button", "resetGrid", "Click to Reset", header);
buildGrid(16);
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", whichButton);
});

function makeInteractive () {
const boxes = sketchArea.querySelectorAll("div");

boxes.forEach((box) => {
  box.addEventListener("mouseover", () => {
    box.style.backgroundColor = "rgb( 0, 0, 0)";
  });
});
}

function resetGrid () {
  const boxes = sketchArea.querySelectorAll("div");
  
  boxes.forEach((box) => {
      box.style.backgroundColor = "rgb(255, 255, 255)";
  });
  }
  


// still need to add the event listeners for actually monitoring mouse movement / boxes and applying coloring.

