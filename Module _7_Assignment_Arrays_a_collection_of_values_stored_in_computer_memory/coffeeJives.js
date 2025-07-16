let addIns = [
      {product: "Whipped cream", price: 0.89},
      {product: "Cinnamon", price: 0.25},
      {product: "Chocolate sauce", price: 0.59},
      {product: "Amaretto", price: 1.50},
      {product: "Irish whiskey", price: 1.75}
  ]
const coffeePrice = 2.00;
let orderTotal = coffeePrice;
let userInput = prompt(`Please enter an add-in: Whipped cream $${addIns[0].price.toFixed(2)}, Cinnamon $${addIns[1].price.toFixed(2)}, Chocolate sauce $${addIns[2].price.toFixed(2)}, Amaretto $${addIns[3].price.toFixed(2)}, Irish whiskey $${addIns[4].price.toFixed(2)}. or type 'done' to finish:`);
const sentinelValue = "done";
let addInFound = false;

do {
    if (userInput == sentinelValue) {
        break;
    }
    addInFound = false;
    for (let i = 0; i < addIns.length; i++) {
        if (userInput.toLowerCase() === addIns[i].product.toLowerCase()) {
            orderTotal += addIns[i].price;
            addInFound = true;
            alert(`Added ${addIns[i].product} for $${addIns[i].price.toFixed(2)}. Current total is $${orderTotal.toFixed(2)}.`);
            break;
        }
    }
    if (!addInFound && userInput.toLowerCase() !== sentinelValue) {
        alert("Sorry, we don't have that add-in. Please try again.");
    }
    userInput = prompt("Please enter another add-in or type 'done' to finish: Whipped cream, Cinnamon, Chocolate sauce, Amaretto, Irish whiskey.");
} while (userInput.toLowerCase() !== sentinelValue);

alert(`Your total for coffee order is $${orderTotal.toFixed(2)}.`);