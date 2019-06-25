// //A collection of random javascript codes run in console for testing.
// console.time("TIMER 1")
//alert("This pop up is from an external javascript file which is in the js folder. This is called through src attribute in script tag in html file."); // this can be seen as a pop up in webpage. 
// console.log("This is a test to show the output in console as well in terminal");//can be seen only in console.Cannot be seene in edge.
// console.log(243);//numbers printed in blue in console.
// var bob = 243;
// console.log(bob);
// console.error("OH NO! There is an error");//printed in red in console.
// console.warn("This is a warning");//orange triangle 
// //console.clear();//console was cleared.
// console.timeEnd("TIMER 1");  //timer 1:1310.4321ms
// //console.clear();//console was cleared.
//const name = 6;
//name = 5; //uncaught error: Assignment to constant variable. The value of a constant cannot be changed.
// const heyIAmArray = [1,2,3,4,5,6,7,8,9,0]; //this cannot be changed, but we can change what we do with it.
// console.log(heyIAmArray); //[1,2,3,4,5,6,7,8,9,0]
// heyIAmArray[3] = 5;
// console.log(heyIAmArray); //[1,2,3,5,5,6,7,8,9,0]
//Angela Chapter 109 RANDOM NUMBER GENERATION IN JS
// var n = Math.random(); // 0 to 0.9999999999999999
// console.log(n); //0.4320861404248544 output is a random 16 digit decimal number.  This can be scaled to a desired range.
// n = n * 6; // Scaling by multilying the random number with the highest range(6). Random number between 0 and 5.99999999999999999(one less). (o/p is 2.5925168425491263) This is used for scaling like scaled to a dice. 
// console.log(n);
// n = Math.floor(n);//(0-5)
// console.log(n);//2
// n = Math.floor(n) + 1; //to make it in the range of 1 to 6 the oputput of dice.
// console.log(n); // repeated running gave #s between 1 and 6. PSEUDO RANDOM NUMBER GENERATOR.
//  var n = Math.random();
//  n = Math.floor(n*6) + 1;
//  console.log(n);
// var a = 1;
// var b = "1";
// console.log(typeof(a)); //number 
// console.log(typeof(b)); //string

// if(a == b){ //datatype need not be the same.
//     console.log("yes");
// }
// else{
//     console.log("no");
// }
// if(a===b){ //datatype should be the same.
//     console.log("yes");
// }
// else{
//     console.log("no");
// }
// var guestList = ["Angela","Jack","Pat","Lara","Jason"];//elements are separated by commas.
// //console.log(guestList.length); //Length of the array.
// var guestName = prompt("Enter your name");
// var a = guestList.includes(guestName); //will return True or False.
// if (a == true){
//     alert("Welcome " + guestName); //console.log does not work in webpages. 
// }
// else{
//     alert("Sorry your name is not in the guestlist");
// }
//Angela section 114 FIzzBuzz challenge
// for(i = 1; i <= 100; i++) 
// {
//     if((i % 15)== 0) { 
//         document.write("FizzBuzz", "\n");
//     }
//     else if((i % 3) == 0){
//         document.write("Fizz", "\n");
//     }
//     else if((i % 5) == 0){
//         document.write("Buzz", "\n");
//     }
//     else{
//     document.write(i, "\n"); //"\n" for space and "<br>" for new line."
//     }
// }
//FizzBuzz challenge with array and function.
// var output = [];//Empty Array. push() and pop() will be at the end of the array.
// output.push(1);
// console.log(output);
// output.push(2);
// console.log(output);
// output.push(3);
// console.log(output);
// output.pop(2);//It will only remove the last element, 3 will be removed, not 2. 
// console.log(output);

//FizzBuzz challenge with array and function. Angela section 114
//  var output = [];//empty array.
//  function fizzBuzz() {
//      for(i = 1; i <=100; i++){
//          output.push(i);
//          if((i % 15)== 0) { 
//           document.write("FizzBuzz", "\n");
//          }
//          else if((i % 3) == 0){
//           document.write("Fizz", "\n");
//          }
//          else if((i % 5) == 0){
//           document.write("Buzz", "\n");
//          }
//          else{
//           document.write(i, "\n"); //"\n" for space and "<br>" for new line."
//          }
//      }
//      return output;//output will be an array of 1 to 100 in console. It will also show the size of the arrary. 
//  }
//  fizzBuzz();
 //document.write(output);// 

// //Javascript Challenge to print numbers from 1 to 100 using array and function by using external js.
// var arrayName = [];
// function numbers1To100(){
//     for(i=1; i <=100; i++){
//         arrayName.push(i);
//         document.write(i, "\n");
//         //document.write(arrayName);//wrong
//     }
//     //return arrayName;
// } 
// numbers1To100();

 //Angela FizzBuzz challenge using push() function.
//document.write("FIZZBUZZ CHALLENGE WITH PUSH() FUNCTION IN ARRAYS", "<br>", "<br>");
// var arrayName = [];//initializing an array.
// function fizzBuzz(){
//     for(i = 1; i <= 100; i++){
//         if((i % 15)== 0) { 
//             arrayName.push("FizzBuzz", "\n");
//             //document.write("FizzBuzz", "\n");
//            }
//            else if((i % 3) == 0){
//                arrayName.push("Fizz", "\n");
//             //document.write("Fizz", "\n");
//            }
//            else if((i % 5) == 0){
//                arrayName.push("Buzz", "\n");
//             //document.write("Buzz", "\n");
//            }
//            else{
//                arrayName.push(i, "\n");
//             //document.write(i, "\n"); //"\n" for space and "<br>" for new line."
//            }
//     }
//     document.write(arrayName);
// }
// fizzBuzz();
//WHILE LOOP
var i = 1;
while(i < 2){
    console.log(i);
    i++;
}//op is 1

















































