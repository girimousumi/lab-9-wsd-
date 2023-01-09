var express = require('express');
var app = express();
var PORT = 3500;
 
// Multiple routing
var router1 = express.Router();
var router2 = express.Router();
var router3 = express.Router();
    
router1.get('/first.html', function (req, res, next) {
    console.log("Homepage Router Working");
    res.sendFile(__dirname+'/first.html')
});
  
router2.get('/second.html', function (req, res, next) {
    console.log("About Router Working");
    res.sendFile(__dirname+'/second.html')
});
 
router2.get('/third.html', function (req, res, next) {
    console.log("Catalogue Router Working");
    res.sendFile(__dirname+'/third.html')
});
 
app.use(router1);
app.use(router2);
app.use(router3);
  
app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});