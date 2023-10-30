const express = require('express');
const app = express();


app.get('/currenttime', function(req,res){
    res.send('<h1>' + new Date().toISOString() + '</h1>')
});

app.get('/',function(req,res){
    res.send('<form action="/store-user" method="POST"><label>Your_name</label><input type="text" name="username"><button>submit</button></form>');
});

app.post('/store-user',function(req,re){
    const username = req.body.username;
    console.log(username);
    res.send('<h1>Username stored</h1>')
}
)
app.listen(3000);