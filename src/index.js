const express = require('express')
const bodyParser = require('body-parser');

//creats an express object
const app = express(); 
//user default system port or 3000
const port = process.env.PORT || 3000;

//turns all queries to server to json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Credentials', 'true');
   res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Authorization, x-id, Content-Length, X-Requested-with');
   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
   next();
 });

//set up the server to reply with hello world at http://localhost:3000/
app.get('/', (req, res) => {
   res.send('try http://localhost:3000/api/triangle')
})


app.get('/api/triangle', (req, res) => {
   var side1 = req.query.side1;
   var side2 = req.query.side2;
   var side3 = req.query.side3;

   var isEquilateral = false;
   var isIsosceles = false;
   var isScalene = false;

   //math code STARThere 
   
   //MATH CODE ENDDDDD

   res.json({ "Triangle": {
      "Equilateral": isEquilateral,
      "Isosceles": isIsosceles,
      "Scalene": isScalene
   }})
});


app.listen(port, () => {
   console.log('triangle] On port: http://localhost:' + port);
 })