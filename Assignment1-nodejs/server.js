const express = require('express');
const app = express();
const route = require('./routes/routes')
const cors =require('cors')
require("dotenv").config();



app.use(express.urlencoded({extended : true}));
app.set('view engine', 'ejs');
app.use('/public', express.static('public'));

require('./config/mongo')
app.use(express.json());
app.use(cors());
app.use(route);

let port = 2000;
app.listen(port, ()=>{
    console.log(`listening on ${port}`); 
})