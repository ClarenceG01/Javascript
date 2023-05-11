// let num1 = prompt("Enter first number");
// let num2 = prompt("Enter second number");

// let  first_digit= Number(num1);
// let second_digit = Number(num2);
// //incase of negative values 
// // let first_number= Math.abs(first_digit);
// // let second_number=Math.abs(second_digit);

let num1 = prompt("Enter first number");
let num2 = prompt("Enter second number");

first_number = Number(num1);
second_number = Number(num2);

if(first_number==100 || second_number==100){
  alert("Closest number is 100");
}else{
  if( ((100-first_number)**2) < ((100-second_number)**2)){
    alert(`Closest number to 100 id ${first_number}`);
  }else if( ((100-second_number)**2) < ((100-first_number)**2)){
    alert(`Closest number to 100 is ${second_number}`);
  }else if(first_number==second_number){
    alert("Both numbers are equal");
  }
}


