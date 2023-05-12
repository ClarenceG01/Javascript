const student=[
    {name:"David",marks:80},
    {name:"Vinoth",marks:77},
    {name:"Divya",marks:88},
    {name:"Ishitha",marks:95},
    {name:"Thomas",marks:68},
]
let total=0;
for(let i=0; i<student.length; i++){
    total+=student[i]['marks']
}
let avg= total/student.length;
// console.log(avg);

if(avg<60){
    console.log("F");
}else if(avg<70){
    console.log("D");
}else if(avg<80){
    console.log("C");
}else if(avg<90){
    console.log("B");
}else{
    console.log("A");
}
