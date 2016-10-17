// Calculator functions
var add = function(number1, number2){
	return number1 + number2;
}
var number1 = parseInt(prompt("Enter a number: "));
var number2 = parseInt(prompt("Enter another number: "));

alert(add(number1, number2));

var substract = function(number1, number2){
	return number1 - number2;
}
var number1 = parseInt(prompt("Enter a number: "));
var number2 = parseInt(prompt("Enter another number: "));

alert(substract(number1, number2));

var multiply = function(number1, number2){
	return number1 * number2;
}
var number1 = parseInt(prompt("Enter a number: "));
var number2 = parseInt(prompt("Enter another number: "));

alert(multiply(number1, number2));

var divide = function(number1, number2){
	return number1 / number2;
}
var number1 = parseInt(prompt("Enter a number: "));
var number2 = parseInt(prompt("Enter another number: "));

alert(divide(number1, number2));

var bmiCalculation = function(height, weight){
  return ( weight / ( height * height ) ) * 703;
}
var height = parseInt(prompt("Please enter your height in inches: "));
var weight = parseInt(prompt("Please enter your weight in pounds: "));

alert("Based on your height of: " +height+ " and weight of: " +weight+", your BMI is: "+ bmiCalculation(height, weight) + ".");

var unit = ""
var tempConversion = function(temp,type){
  if (type === "C"){
    return (temp * 1.8) +32;
    unit = "F";
  }
  else{
    return(temp-32)/1.8;
    unit = "C";
  }
}
var temp = parseInt(prompt("Please enter your temperature: "));
var type = prompt('Please specify the unit using "C" for celsius and "F" for fahrenheit: ');

alert("Your temperature in " + type + " is equal to " + tempConversion(temp, type) + unit + ".");

//This function converts tablespoons to cups
function tbspToCup (tbsp) {
	tbsp = parseInt(prompt("How many tablespoons do you have?"));
  return "That is " + tbsp * .0625 + " cups";
};

alert(tbspToCup());
