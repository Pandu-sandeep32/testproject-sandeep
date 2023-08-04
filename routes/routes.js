const express = require("express")
const router = express.Router()
const controller = require('../controller/user_controller')

router.post('/register',controller.createfb)

router.get('/read', controller.retreiveall)

router.post('/delete', controller.deleteuserbyid)

router.post('/update', controller.updateuser)

router.post('/login',controller.login)

module.exports = router
