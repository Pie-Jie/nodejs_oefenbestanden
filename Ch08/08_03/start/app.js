var express = require("express");
var cors= require('cors');
var app = express();

var skierTerms = [
    {
        term: "Roetsjen",
        defined: "Drukkend op skies naar beneden gaan"
    },
    {
        term: "Schuss",
        defined: "Benen wijd, hurkend snelheid creëren en zonder bochten"
    },
    {
        term: "Apres-ski",
        defined: "Na het skiën eens goed losgehen!"
    }
];


app.use(function(req, res, next) {
	console.log(`${req.method} request for '${req.url}'`);
	next();
});

app.use(express.static("./public"));

app.use(cors());

app.get('/dictionary-api', function(req, res) {
    res.json(skierTerms);
    
});

app.listen(3000);

console.log("Express app running on port 3000");

module.exports = app;