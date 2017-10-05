var express = require('express');
var bodyparser = require('body-parser');




// calling express...
var app = express();

//cors resolution 
var cors = require('cors')
app.use(cors())

app.use(bodyparser.json());
// create get request

app.get('/', function(req, res) {
        res.send()
   
});

app.post('/add', function(req, res) {

     var num1=req.body.num.num1;
     var num2=req.body.num.num2;
     res.send({
         "result":num1+num2
     });
    

});
app.post('/sub', function(req, res) {
    
         var num1=req.body.num.num1;
         var num2=req.body.num.num2;
         res.send({
             "result":num1-num2
         });
        
    
    });

app.post('/mul', function(req, res) {
        
             var num1=req.body.num.num1;
             var num2=req.body.num.num2;
             res.send({
                 "result":num1*num2
             });
            
        
        });
app.post('/div', function(req, res) {
            
                 var num1=req.body.num.num1;
                 var num2=req.body.num.num2;
                 res.send({
                     "result":num1/num2
                 });
                
            
            });

app.listen(9000);
console.log('Running on port 9000');