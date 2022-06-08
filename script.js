const btn = document.querySelector(".btn");
const reload = document.querySelector(".reload");
const foodBox = document.querySelector(".foods");

//Food options
const foodChoices = [
  "burgers",
  "pizza",
  "sushi",
  "tacos",
  "salmon",
  "chicken",
  "stir-fry",
  "eggs",
  "pancakes",
  "meat loaf",
  "salad",
  "hot dogs",
  "ramen",
];

//Generate random food from options
const randomFood = foodChoices[Math.floor(Math.random() * foodChoices.length)];

//Functions
const insertRandomFood = () => {
  return (foodBox.innerHTML = randomFood);
};

const reloadPage = () => {
  return document.location.reload();
};

//Handlers
btn.addEventListener("click", insertRandomFood);

reload.addEventListener("click", reloadPage);
