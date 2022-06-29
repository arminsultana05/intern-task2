
const router = require('express').Router();
const {getUser, getAll, getOne, getAnother}= require("../controllers/user")



router.get ('/current', getUser)
router.get ('/all', getAll)
router.get ('/all/one', getOne)
router.get ('/new/all/another/pull', getAnother)



module.exports = router;
