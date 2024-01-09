const usuario = require("../middlewares/loginlog")
const express = require('express');
const router = express.Router();
const userController = require("../controllers/usercontroller")



router.get('/login', userController.log)
router.post('/login', usuario)



module.exports = router


