// function showFirstMessage(text) {
//     alert(text);

// }

// showFirstMessage("Hello World");

// let calc = function (a, b) {
//     return (a +b);
// }

// let calc = (a, b) => a+b;

// console.log(calc(8, 4));

// console.log(calc(3, 2));


// function retVar() {
//     let num = 50;
//     return num;
// }

// let anotherNum = retVar();
// console.log(anotherNum);

// let str="test";
// console.log(str.length);

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// let twelve = "12.2px";

// // console.log(Math.round(twelve));
// console.log(parseInt(twelve));
// console.log(parseFloat(twelve));


function first() {
    setTimeout(function () {
        console.log(1);
    }, 500);
}

function second(){
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    console.log("я учу " +lang);
callback();
}

function done () {
    console.log("Я прошел третий урок");
}

learnJS("JavaScript", done);