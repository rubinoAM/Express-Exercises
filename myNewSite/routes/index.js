var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Digital Crafts: Full-Time Immersive Class Nov. \'18',
    students:[
      'Zac',
      'Jim',
      'JR',
      'Matt',
      'Michael',
      'Ron',
      'Gbenga',
      'Greg',
      'Christopher',
      'Sean',
      'Katie',
      'Jason',
      'Rob',
      'Noelle',
      'Cody',
      'Connor',
      'Brandon',
      'Khanh',
      'Brian',
    ]
  });
});

router.get('/reverselist', function(req, res, next) {
  res.render('reverse', {
    title: 'Digital Crafts: Full-Time Immersive Class Nov. \'18',
    students:[
      'Zac',
      'Jim',
      'JR',
      'Matt',
      'Michael',
      'Ron',
      'Gbenga',
      'Greg',
      'Christopher',
      'Sean',
      'Katie',
      'Jason',
      'Rob',
      'Noelle',
      'Cody',
      'Connor',
      'Brandon',
      'Khanh',
      'Brian',
    ]
  });
});

module.exports = router;
