//router for class  /class,
var express = require("express");
const http = require('http');
var db = require("./classdb");
//var request = require("request");
var classRouter = express.Router();


//http://localhost:8080/class/
classRouter.route('/')
	.get(async function(req, res) {
		//res.send('hello from class route');
		const reslt = await db.GetClassesAsync();
		res.write(JSON.stringify(reslt));
		res.end();
});

//http://localhost:8080/class/3320/coursenumber
classRouter.get('/:coursenumber/coursenumber',async function(req, res) {
    console.log("search req.param", req.params.coursenumber);
	const reslt = await db.GetClassesByCourseNumberAsync(req.params.coursenumber);
	res.write(JSON.stringify(reslt));
	res.end();
});

//http://localhost:8080/class
classRouter.put('/',async function(req, res) {
    console.log("search req.body", req.body);
	const reslt = await db.UpdateClass(req.body);
	res.write("{result:true}");
	res.end();
});


classRouter.get('/search3', async function(req, res) {
    console.log("req.query", req.query);
    console.log("req.query.search", req.query.id);
        const reslt = await db.ClassSearchAsync(req.query.id);
        console.log("search3");
        console.log("search3 reslt", reslt);
    });


//http://localhost:8080/class/83116
classRouter.route('/:id')
	.get(async function(req, res) {
    console.log("search req.param", req.params.id);
	const reslt = await db.GetClassByClassNumberAsync(req.params.id);
	res.write(JSON.stringify(reslt));
	res.end();

/*
		//https://stackoverflow.com/questions/9577611/http-get-request-in-node-js-express
url = "http://localhost:5000/psolve"
const options = {
        headers: {'content-type':'application/json'},
        uri: url,
        form: {
            "test":"test anser"
        }
    }

    request.post(options
        ,function (error,response,body) {
            console.log('Response: ', response);
            console.log('body: ', body);
            console.log('Error: ', error);
        });
*/		
/*
   request.post({
       // headers: {"content-type","text/json"},
        url: "http://localhost:5000/psolve", ///${req.params.id}
        body: {test:"test anser"}
    }, function(error,response,body) {
		console.log(body);
        
    });

		db.GetClassByID(req, res);
*/		
	});


        

module.exports = classRouter;
