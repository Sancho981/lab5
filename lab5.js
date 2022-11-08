<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<h3>Enter a number:</h3>
<input type="text" id="num">
<button id="btn">Click</button>
<h3>Result:</h3>
<div id = "r1"></div>
<script src="script.js"></script>
</body>
</html>
JS-код:  
var btn = document.getElementById("btn");
var num = document.getElementById("num");

btn.addEventListener("click", d);

function d (){
let number = num.value;
num.value= '';
    let q = setInterval(
function l(){
    number--;
    document.getElementById("r1").innerHTML = `${number}`;
    if(number==0){
        clearInterval(q);
    }
},
1000,3,7
)
}

//Variant 2

// let number = prompt('Введіть число')
// let q = setInterval(
// function l(){
//     number--;
//     document.getElementById("r1").innerHTML = `${number}`;
//     if(number==0){
//         clearInterval(q);
//     }
// },
// 1000,3,7
// )
