//This folder 'intro-to-node' deals with two external node modules, superHeros and superVillains. And the output is printing random superHero and superVillain name in the console.
//jshint esversion:6
//The above line has to be written for the error to go away.
// const fs = require("fs");
// fs.copyFileSync("file1.txt","file2.txt"); //internal nodejs module.
//Now, go to hyperTerminal. Make sure we are in intro-to-node folder and node index.js.
//Now, using external nodejs module.
const superheroes = require("superheroes"); //This incorporates the 'superheroes' module into our current project.
const supervillains = require("supervillains");
var mySuperheroName = superheroes.random();
var mySuperVillainName = supervillains.random();
//Now, to log the random superhero name into our command line or console:
console.log(mySuperheroName);
console.log(mySuperVillainName);
//Now, run our code by typing node index.js in the terminal.
