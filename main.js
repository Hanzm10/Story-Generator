// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');
const usConv = document.getElementById("us");
const ukConv = document.getElementById("uk");

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

// 2. RAW TEXT STRINGS

let storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

let insertX =  ["Willy the Goblin",
                "Big Daddy",
                "Father Christmas"];

let insertY =  ["the soup kitchen",
                "Disneyland",
                "the White House"];

let insertZ =  ["spontaneously combusted",
                "melted into a puddle on the sidewalk",
                "turned into a slug and crawled away"];

// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);
customName.addEventListener("input", update);
ukConv.addEventListener("change", update);
usConv.addEventListener("change", update);

function update() {

  let newStory = storyText;
  let xItem = insertX[0];
  let yItem = insertY[0];
  let zItem = insertZ[0];

newStory = newStory.replaceAll(":insertx:", xItem);
newStory = newStory.replaceAll(":inserty:", yItem);
newStory = newStory.replaceAll(":insertz:", zItem);


  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll("Bob", name);

  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300/14) + " stones";
    const temperature =  Math.round((94 - 32)*(5/9)) + " centigrade";
    newStory = newStory.replaceAll("94 fahrenheit", temperature);
    newStory = newStory.replaceAll("300 pounds", weight);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}

function result() {

let newStory = storyText;
let xItem = randomValueFromArray(insertX);
let yItem = randomValueFromArray(insertY);
let zItem = randomValueFromArray(insertZ);

newStory = newStory.replaceAll(":insertx:", xItem);
newStory = newStory.replaceAll(":inserty:", yItem);
newStory = newStory.replaceAll(":insertz:", zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll("Bob", name);

  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300/14) + " stones";
    const temperature =  Math.round((94 - 32)*(5/9)) + " centigrade";
    newStory = newStory.replaceAll("94 fahrenheit", temperature);
    newStory = newStory.replaceAll("300 pounds", weight);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}