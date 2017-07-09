var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.use(express.static('public'));


app.get('/index.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "index.htm" );
})


app.get('/modal.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "modal.htm" );
})

app.route('/sfenvs') 
	.get(function (req, res) {
		var resp = [{username: "pardot-demo@avionos.com", type: "Production", selected: true},
					{username: "pardot-demo@avionos.com.UAT", type: "Sandbox", selected: true}]
		res.send(resp); 
	})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)

})