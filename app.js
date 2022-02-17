const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js");



const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use( express.static("public"));


app.get("/", function(req,res){

    var day = date.getDay();
    res.render("lists", { kindOfDay : day , itemList : itemList });    

});


var itemList = [];
app.post("/", function( req, res){
    var newItem = String(req.body.item1) ;
    itemList.push(newItem);
    res.redirect("/");

});



app.listen( 3000, function(){
    console.log("Working at port 3000!")
});
