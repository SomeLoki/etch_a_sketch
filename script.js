// start with 16 boxes arranged in 4x4 grid

// have button that when pressed accepts a number from the user and translates to new total boxes
const footer = document.querySelector(".footer")
// const btn = document.createElement("button");
// btn.textContent = "Click to Change";
// btn.classList.toggle("change");
// footer.appendChild(btn);

const createElement = function(elem, classToggle, textContent, appendTo) {
  const element =  document.createElement(elem);
  element.classList.toggle(classToggle);
  element.textContent = textContent;
  appendTo.appendChild(element);
}

createElement("button", "changeGrid", "Click to Change", footer);
createElement("button", "resetGrid", "Click to Reset", footer);
// find equal or highest perfect square to know what sort of grid to form

// divide current content box width / height. Whichever is lower set as both width and height of boxes - they must be square

// generate boxes through iterative loops. Will need a counter for box number, increment row. class will have to be generated and tied to boxes so need the numbers


// to use naming boxes 1-100
const rowNames = [];
const columnNames = [];
const lowerNumPrefix = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth"];
const UpperNumPrefix = ["First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh", "Eighth", "Ninth", "Tenth"];

for (let i = 0; i < 10; i++) {
  rowNames[i] = ( lowerNumPrefix[i] + "Row");
  columnNames[i] = (UpperNumPrefix[i] + "Column");
}

console.log(rowNames);
console.log(columnNames);
