const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();

app.use(express.urlencoded());

app.get('/currenttime', function(req,res){
    res.send('<h1>' + new Date().toISOString() + '</h1>')
});

app.get('/',function(req,res){
    res.send('<form action="/store-user" method="POST"><label>Your_name</label><input type="text" name="username"><button>submit</button></form>');
});

app.post('/store-user',function(req,res){
    const username = req.body.username;

    const filePath = path.join(__dirname,'data','users.json');

    const fileData = fs.readFileSync(filePath);
    const existingUsers = JSON.parse(fileData);

    existingUsers.push(username);

    fs.writeFileSync(filePath,JSON.stringify(existingUsers));
    res.send('<h1>Username stored</h1>')
}
)
app.listen(3000);