"use strict";
//using IdleCallback

window.requestIdleCallback = window.requestIdleCallback || 
function(handler) {
    let startTime = Date.now();
    return setTimeout(function (){
        handler({
            didTimeout: false,
            timeRemaining: function() {
                return Math.max(0, 50.0 - (Date.now() - startTime));
             }
        });
    },1);
}

//Creating an Object.create();

const personName = {
    job: "Software Developer",
    age: 30,
    printIntroduction: function() {
        console.log(`My name is ${this.name}. i'm a ${this.job} and I'm ${this.age} years old!`);
    }
};
const me = Object.create(personName);
me.name = "Onifade"; //name is a property set to me not personName property.
me.job = "Software Developer"// inherited properties can be over written.
me.age = 30;

me.printIntroduction();

//using eval();

console.log(eval("2 + 2")); //Expected output 4;
console.log(eval (new String("2 + 2"))); //expected output 2 + 2;
console.log(eval("2 + 2") === eval("4")); //expected output true;
console.log(eval("2 + 2") === eval(new String("2 + 2")));// expected output false;

