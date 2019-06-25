function bmiCalculator (weight, height) {
     var bmi = Math.floor(weight/(height*height));
     if(bmi < 18.5) {
        alert("Your BMI is " + bmi +" , so you are underweight");
    }
    else if(bmi >= 18.5 && bmi <= 24.9) {
        alert("Your BMI is " + bmi +" , so you have a normal weight");
    }
    else if(bmi > 24.9) {
        alert("Your BMI is " + bmi +", so you are overweight");
    }     
 }

var wt = prompt("Enter your weight in kilograms");
var ht = prompt("Enter your height in meters");

bmiCalculator(wt, ht); 
