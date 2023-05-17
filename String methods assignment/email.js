function protectEmail(email){
    const [username,domain] = email.split('@');
    if(username.includes("-")){
        const [hidden,rest] = username.split('-')
        console.log(`${hidden}...@${domain}`);
    }else if(username.includes('_')){
        const [hidden,rest] = username.split('_')
        console.log(`${hidden}...@${domain}`);
    }else{
        const hidden = username.slice(0,6)+"...";
        console.log(`${hidden}@${domain}`);
    }
}
protectEmail("gatama001@gmail.com")