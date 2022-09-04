const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

let i = 0;
let y = 0;

while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}

for (let x = 0; x < ingredients.length; x++) {
  console.log(ingredients[x]);
}

ingredients.reverse();

while (y < ingredients.length) {
  console.log(ingredients[y]);
  y++;
}