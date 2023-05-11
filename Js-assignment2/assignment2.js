let random_int= Math.floor(Math.random()*10)+1;
let user_int = prompt("Guess a number between 1 and 10");
let user = Number(user_int);
if(user>10 || user<1){
    alert("Ensure the integer is between 1 and 10");
}else{
    if(user==random_int){
        alert("Good Work");
    }else{
        alert("Not matched");
        alert(`The right number is ${random_int} `)
    }
}