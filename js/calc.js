//var add= function(number1, number2){
//return number1 + number2;
//};

//var number1 = parseInt(prompt("Enter a number:"));

//var number2 = parseInt(prompt("Enter another number:"));

//alert(add(number1, number2));

//var subtract= function(number1, number2){
//  return number1 - number2;
//};

//var number1 = parseInt(prompt("Enter a number:"));

//var number2 = parseInt(prompt("Enter another number:"));

//alert(subtract(number1, number2));

var multiply= function(number1, number2){
  return number1 * number2;
};

var number1 = parseInt(prompt("Enter a number:"));

var number2 = parseInt(prompt("Enter another number:"));

alert(multiply(number1, number2));

var divide= function(number1, number2){
  return number1 / number2;
};

var number1 = parseInt(prompt("Enter a number:"));

var number2 = parseInt(prompt("Enter another number:"));

alert(divide(number1, number2));

var bmi = function(weight, height) {
return (weight * 703)/ (height * height);
};
var weight = parseInt(prompt("Enter your weight in pounds:"));

var height = parseInt(prompt("Enter your height in inches:"));



alert(bmi(weight, height));


var fToc = function(fare, cels) {
return (fare - 32) * 5/9;
};

var fare = parseInt(prompt("Enter the temperature in Farenheit:"));

alert(fToc(fare));


var cToc = function(celc) {
return (celc * 9/5) + 32;
};

var celc = parseInt(prompt("Enter the temperature in Celsuis:"));

alert(cToc(celc));
