function reverseString(string){
    const arr=string.split("");
    const revArr=arr.reverse();
    const revStr = revArr.join("");
    console.log(revStr);
}
reverseString("Rada");