 const router = require('express').Router();
 router.route('/profile').post( (req, res) => {
       res.send('hello from profile');
         });
