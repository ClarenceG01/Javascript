let user_no = prompt("Enter a number you want to confirm its range");
let user_max=prompt("Enter the range(Use the this format:e.g 100-150)");

const arr= user_max.split("-");
let user_first= arr[0];
let user_second =arr[1];

let number=Number(user_no);
let min =Number(user_first);
let max = Number(user_second);

// console.log(number);
// console.log(min);
// console.log(max);

if(min>max){
    alert("Enter from smallest number:e.g 100-150");
}else{
    function isInRange(number,max,min) {
        if (number>=min&&number<=max){
            alert("True");
        }else{
            alert("False");
        }
    }
    isInRange(number,max,min);
}




// let text = "How are you doing today?";
// const myArray = text.split(" ");
// let word = myArray[1];
// console.log(word);

// let text="100-150";
// const arr=text.split("-");
// let w = arr[1];
// console.log(w);