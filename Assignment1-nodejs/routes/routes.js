const express = require('express');
const route  = express();
const cors = require('cors');
const userController = require('../controller/functionController')




route.get('/', cors(), userController.homePage)
route.post('/', cors(),userController.postCreate)

route.post('/:id', cors(),userController.deletePost)















module.exports=route