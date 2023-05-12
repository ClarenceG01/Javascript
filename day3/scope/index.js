let minimum_age =20;
function checkAge(input_age) {
  let age = input_age;
  if(age>=minimum_age){
    console.log("You are qualified");
  }
}
function welcome() {
  console.log("WElcome");
}
function goodBye() {
  console.log("Good Bye"); 
}
export {checkAge,welcome,goodBye};