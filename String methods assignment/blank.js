function isBlank(string){
    const trimmedStr=string.trim()
    if(trimmedStr==""){
        console.log("Blank");
    }else{
        console.log("Not blank");
    }
}
isBlank("   r   ");