
alert('hello girls welcom to makeup world')
alert('how are you today?');
alert('nice to see you here again');
var age = prompt ('how old are you?')

function greeting(age){
   var greetin;//

    if (age > 18) {
        greeting = 'welcom girls'; 
        alert( greeting )
       } else { ( age < 17) 
            greeting = 'you are beautiful without makeup';
            alert( greeting )
        }

         return greeting;
}



document.write('<h2>' +greeting(age)+'</h2>');
     
console.log(heading);