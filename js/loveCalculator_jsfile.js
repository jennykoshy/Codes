    var name1 = prompt("Enter your name");
    var name2 = prompt("Enter their name");
    var n = Math.random(); //random number between 0 to 0.9999999999999999
    n = Math.floor(n*100) + 1; //range (1 to 100)
    // alert("Your love score is " + n + "%");
    if(n >= 70){
        alert("Your love score is " + n + "%" + " which is awesome");
    }
    else if(n > 30 && n < 70){
        alert("Your love score is " + n + "%");
    }
    else if(n <= 30){
        alert("Your love score is " + n + "%" + " You go together like oil and water");
    }

