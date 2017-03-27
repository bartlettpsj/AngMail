var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/products', function(req, res, next) {

  var messages = [{
    id: 0, sender: 'paul-jean@somecompany.com', subject: 'Hi there, old friend',
    date: 'Dec 7, 2013 12:32:00', recipients: ['greg@somecompany.com'],
    message: 'Hey, we should get together for lunch sometime and catch up.'
             + 'There are many things we should collaborate on this year.'
  }, {
    id: 1, sender: 'paul-maria@somecompany.com',
    subject: 'Where did you leave my laptop?',
    date: 'Dec 7, 2013 8:15:12', recipients: ['greg@somecompany.com'],
    message: 'I thought you were going to put it in my desk drawer.'
             + 'But it does not seem to be there.'
  }, {
    id: 2, sender: 'paul-bill@somecompany.com', subject: 'Lost python',
    date: 'Dec 6, 2013 20:35:02', recipients: ['greg@somecompany.com'],
    message: 'Nobody panic, but my pet python is missing from her cage.'
             + 'She doesnt move too fast, so just call me if you see her.'
  },
    {
      id: 99, sender: 'paul@infoqss.com', subject: 'My Website',
      date: 'Dec 16, 2016 21:35:02', recipients: ['fred@somecompany.com'],
      message: 'This is Pauls Website.'
               + 'She doesnt move too fast, so just call me if you see her.'
    }
  ];


  // res.status(200);
// Disable caching for content files
  res.header("Cache-Control", "no-cache, no-store, must-revalidate");
  res.header("Pragma", "no-cache");
  res.header("Expires", 0);
  res.header("Content-Type", "application/javascript");

  res.jsonp(messages);
});

module.exports = router;
