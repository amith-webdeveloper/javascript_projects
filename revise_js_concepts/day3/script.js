// // type conversion = change the datatype of the value to another (strings , numbers , boolean)

// // let age = window.prompt("how old are you")
// // // age = Number(age)

// // age+=1;

// // console.log(age , typeof age);


// // let x = "Pizza";
// // let y = "Pizza";
// // let z = "Pizza";

// // let x = "0";
// // let y = "0";
// // let z = "0";

// let x = "";
// let y = "";
// let z = "";

// x = Number(x)
// y = String(y)
// z = Boolean(z)

// console.log(x , typeof x);
// console.log(y , typeof y);
// console.log(z , typeof z);


// //////////////////////////////////////////////////////////////////////////////////////////////////////



// const = a variable that cant be changed

// let pi = 3.14;

// here Pi is a constant that never be changed so 

// const pi = 3.14
// let radius;
// let circumference;

// // radius = window.prompt("enter the radius of the circle")

// console.log(circumference);

// document.getElementById('mysubmit').onclick = function(){
//     radius = document.getElementById('mytext').value;
//     radius = Number(radius);
//     circumference = 2 * pi * radius;
//     let result = circumference + ' cm'
//     document.getElementById('myh3').textContent = result;
// }





///////////////////////////////////////////////////////////////////////////////////////////



// Couter program 

const decrease = document.getElementById('decreasebtn')
const reset = document.getElementById('resetbtn')
const increase = document.getElementById('increasebtn')
const countlabel = document.getElementById('countLabel')

let count = 0;

increase.onclick = function(){
    count++;
    countlabel.textContent = count
}

decrease.onclick = function(){
    count--;
    countlabel.textContent = count
}
reset.onclick = function(){
    count = 0;
    countlabel.textContent = count
}