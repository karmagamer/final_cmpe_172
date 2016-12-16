var router = require('express').Router();

router.get("/",function(req,res){
    res.json({"error" : false,"message" : "Hello World"});
});
router.use('/users', require('./user/userRoutes.js'));
router.use('/posts', require('./post/postRoutes.js'));
router.use('/categories', require('./category/categoryRouter.js'));


module.exports = router;
