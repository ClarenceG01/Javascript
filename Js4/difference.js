function getDifference(arr1, arr2) {
  return arr1.filter(notIncludeB);
  function notIncludeB(element){
    return !arr2.includes(element);
  }
}

console.log(getDifference([100, 2, 1, 10],[1, 2, 3]));

// const ages = [32, 33, 16, 40];
// const a=[32,41,16,87]
// function compare(arr1,arr2){
//     arr1.filter((item)=>{
//         console.log(!arr2.includes(item));
//     });
// }

// compare(ages,a);
