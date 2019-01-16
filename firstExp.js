const express = require('express'); //Did you know that running node on your code in the command line when you first declare a require() is a good way to do a sanity check?
const app = express();
//const port = process.argv[2] allows you to pass in the port number you want when you run this in the command line
app.use(express.static('public'))
app.get('/',(req,res)=>{
    res.send("<h1>BRRRRRRRZZZZZZTBRRZZT</h1>");
})
app.get('/thizz',(req,res)=>{
    res.send("<h2>That's not my job!</h2>");
})
app.listen(3000);