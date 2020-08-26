/*
alert('hello girls welcome to makeup world')
alert('how are you today?');
alert('nice to see you here again');
var age = prompt ('how old are you?')

function greeting(age){
    var greetin;//
 
     if (age > 18) {
         greeting = 'welcome girls'; 
         alert( greeting )
        } else { ( age < 17) 
             greeting = 'you are beautiful without makeup';
             alert( greeting )
         }
 
          return greeting;
 }
 document.write('<h2>' +greeting(age)+'</h2>');
greeting();
*/
var showOrder = function () {
    var userInput = prompt('what would you like to order makeup or skincare?');
    while (userInput !== "makeup" && userInput !== "skincare") {
        userInput = prompt('what would you like to order makeup or skincare?');
    }


    var userOrder;
    var numberOfSession = prompt("how many session do you want?");
    for (var count = 0; count < numberOfSession; count++) {
        if (userInput === "makeup") {
            userOrder = document.write("<img src='../images/makeup.jpg'>");
            console.log(userOrder);
        }
        else if (userInput === "skincare") {
            userOrder = document.write("<img src='../images/skincare.jpg'>");
    
            console.log(userOrder);
        }
        
    }

    

    return userOrder;

}





console.log(heading);