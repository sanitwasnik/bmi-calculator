const express = require("expess");
const bodyPraser = require("body-praser");

const app = express();
app.use(bodyPraser.urlencoded({extended: true}));

app.get("/bmiCalculator", function(req, res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function(req, res){

  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);

  var bmi = weight / (height * height);

  res.send("Your BMi is " + bmi);

});

app.listen(3000, function(){
  console.log("Server is running on port 3000");

});
