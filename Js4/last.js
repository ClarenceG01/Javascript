function lastElement(arr,n){
    if(n==0){
        return 0
    }else{
        return arr.slice(-n);
    }
}
const myArray= [1,2,3,4,5,6,7,8,9];
console.log(lastElement(myArray,3));

