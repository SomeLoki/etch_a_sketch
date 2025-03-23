
const header = document.querySelector(".header")
const sketchArea = document.querySelector(".sketchzone");
const rowNames = [];
const columnNames = [];

for (let i = 0; i < 100; ++i) {
  rowNames[i] = ("row" + `${i}`);
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

// Add the stuff you see when the page starts

createElement("button", "changeGrid", "Click to Change", header);
createElement("button", "resetGrid", "Click to Reset", header);
buildGrid(16);
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", whichButton);
});

buildGrid(16);

// helper functions

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

function makeInteractive () {
  const boxes = sketchArea.querySelectorAll("div");
  boxes.forEach((box) => {
    box.addEventListener("mouseover", () => {
      const r = (Math.floor(Math.random() * 256));
      const g = (Math.floor(Math.random() * 256));
      const b = (Math.floor(Math.random() * 256));
      const opacity = box.style.opacity;
      const bgColor = box.style.backgroundColor;
      if (bgColor === "") {
        box.style.backgroundColor = `rgb( ${r}, ${g}, ${b})`;
        box.style.opacity = 1;
        box.style.border = "1px solid black";
      } else {
        box.style.opacity = (Number(opacity) - 0.1);
      };
    });
  });
}

function resetGrid () {
  const boxes = sketchArea.querySelectorAll("div");  
  boxes.forEach((box) => {
      box.style.backgroundColor = "";
      box.style.opacity = 1;
  });
}

