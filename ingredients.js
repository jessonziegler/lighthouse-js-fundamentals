const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
console.log("Contents Of Ingredients:");
for (let i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}
console.log("Contents of ingredients:");
let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}
arr = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
arr1 = [];
for (let i = arr.length - 1; i >= 0; i--) {
    arr1.push(arr[i]);
}
console.log(arr1);

