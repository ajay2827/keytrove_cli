const express = require('express') ;
const router = express.Router() ;

router.get('/' , (req,res)=>{
    res.status(200).json("update Value Corresponding key") ;
})

module.exports = router ;