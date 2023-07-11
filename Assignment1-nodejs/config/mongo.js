const mongoose = require('mongoose');

mongoose.connect(process.env.DB_LINK,{ useNewUrlParser: true })
.then(res =>{
    console.log('Db is connected')})
.catch(err=>console.log(err));

