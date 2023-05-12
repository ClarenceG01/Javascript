color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
o = ["th","st","nd","rd"]


for(let i=0; i<color.length; i++){
    let day="";
    if(i+1==1){
        day="1st";
    }else if(i+1==2){
        day="2nd"
    }else if(i+1==3){
        day ="3rd"
    }else{
        day = `${i+1}th`
    }
     console.log(`${day} choice is ${color[i]}`);
}