let today = new Date();


let dd= today.getDate();
let mm =today.getMonth() +1;
let yyyy = today.getFullYear();
console.log(yyyy);

let this_day = `${mm}-${dd}-${yyyy}`;
console.log(this_day);

let day_today = `${dd}/${mm}/${yyyy}`;
console.log(day_today);