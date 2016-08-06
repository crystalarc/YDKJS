const SPENDING_THRESHOLD = 200;
const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;

var bank_balance = Number(prompt("What's your bank account balance?"));
var amount = 0;

function addTaxes(price) {
	price += price * TAX_RATE;
}

function formatPrice(price) {
	return "$" + price.toFixed(2);
}

while (amount < bank_balance) {
	var currentPrice = PHONE_PRICE;
	while (currentPrice < SPENDING_THRESHOLD) {
		currentPrice += ACCESSORY_PRICE;
	}
	addTaxes(currentPrice);
	console.log(formatPrice(currentPrice));
	if (amount + currentPrice < bank_balance) {
		amount += currentPrice;
	} else {
		console.log("You can't afford another purchase.")
		break;
	}
}

console.log("Total amount: " + formatPrice(amount));