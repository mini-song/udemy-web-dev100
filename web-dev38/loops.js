for (var i = 0; i<10;i++){
    console.log(i); //i에 계속 덮어씌워짐 값이
}

const users = ['max','anna','joel'];

for (const user of users){
    console.log(user);
}

const loggedInUser ={
    name:'Max',
    age:32,
    isAdmin:true
};

for (const key in loggedInUser){
    console.log(key);
    console.log(loggedInUser[key])
}
let isFinished = false;

while (!isFinished){
    isFinished = confirm('Are you sure you want to?')
}