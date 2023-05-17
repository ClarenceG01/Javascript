function anagram(a, b) {
    let lenA = a.length;
    let lenB = b.length;
    if(lenA !== lenB){
       console.log('Can\'t be anagram');
    }else{
        let sortedA = a.split('').sort().join('');
        let sortedB = b.split('').sort().join('');
        if(sortedA === sortedB){
           console.log("Anagram");
        } else { 
           console.log("Not an anagram");
        }
    }
 }
anagram("kala","lakaka")