const user = { 
    id: 339, 
    name: 'Fred', 
    age: 42, 
    education: { degree: 'Masters'} 
}
console.log(user.education.degree);

// const person={
//     f_name:"Cgc",
//     age:20,
//     height: 1.2,
//     weight: 120
// }
// console.log(person.hasOwnProperty('age'));

// function destructure(obj,target) {
//     if(obj.hasOwnProperty(target)==true){
//         return obj[`${target}`];
//     }else{
//         console.log('Target doesn\'t exist');
//     }
// }

// const user={id: 234, age:20};
// destructure(user, 'id');

// // let nestedTarget=obj.target;
// //         if(nestedTarget.hasOwnProperty(target)==true){
        
// //        }
