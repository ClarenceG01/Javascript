function isBoolean(value){
    if(typeof(value)==Boolean){
        return "Boolean"
    }else{
        return "Not Boolean"
    }
}
constresult=isBoolean("Name");
console.log(result);
