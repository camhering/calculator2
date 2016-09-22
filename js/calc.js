// Business logic
var add= function(number1, number2){
return number1 + number2;
};

var subtract= function(number1, number2){
  return number1 - number2;
};


var multiply= function(number1, number2){
  return number1 * number2;
};


var divide= function(number1, number2){
  return number1 / number2;
};



//var bmi = function(weight, height) {
//return (weight * 703)/ (height * height);
//};
//var weight = parseInt(prompt("Enter your weight in pounds:"));

//var height = parseInt(prompt("Enter your height in inches:"));



//alert(bmi(weight, height));


//var fToc = function(fare, cels) {
//return (fare - 32) * 5/9;
//};

//var fare = parseInt(prompt("Enter the temperature in Farenheit:"));

//alert(fToc(fare));


//var cToc = function(celc) {
//return (celc * 9/5) + 32;
//};

//var celc = parseInt(prompt("Enter the temperature in Celsuis:"));

//alert(cToc(celc));

//Front End logic

$(document).ready(function() {
  $("form#calculator").submit(function() {
    event.preventDefault();
    var number1 = parseInt($("#input1").val());
    var number2 = parseInt($("#input2").val());
    var operator = $("input:radio[name=operator]:checked").val();
    var result;
    if (operator === "add") {
      result = add(number1, number2);
    } else if (operator === "subtract") {
      result = subtract(number1, number2);
    } else if (operator === "multiply") {
      result = multiply(number1, number2);
    } else if (operator === "divide") {
      result = divide(number1, number2);
    }
    $("#output").text(result);
  });
});
