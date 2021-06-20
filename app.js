const express = require('express');
const mongoose = require('mongoose');
const Urls = require('./routes/url');
const Redirect = require('./routes/redirect');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const app = express();
const PORT = process.env.PORT || 5100;


dotenv.config();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json()) 


mongoose.connect(process.env.mongoUrl,{useUnifiedTopology:true,useNewUrlParser:true},(err)=>
{
    if(err){
        console.log(err)
    }
    console.log('connected');
})

//configure routes
app.use(Urls);
app.use(Redirect);

app.get('/',(req,res)=>
{
	res.sendFile(`${__dirname}/abc.html`);
	// res.send('hello running');
})
app.listen(PORT,()=>
{
	console.log('listening on port '+PORT);
})