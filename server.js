import minimist from 'minimist';
import { rps, rpsls } from './lib/rpsls.js';
import express from 'express';

var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const args = minimist(process.argv.slice(2));

var HTTP_PORT = 5000;

if (args.port) {
	HTTP_PORT = args.port;
}

// Start server
const server = app.listen(HTTP_PORT, () => {
	console.log("Server running on port %PORT%".replace("%PORT%", HTTP_PORT))
});

// Root endpoint
app.get("/app/", (req,res) => {
	res.json({"message":"API works (200)"});
	res.status(200);
});

// Single player rps endpoint
app.get("/app/rps/", (req,res) => {
	res.json(rps());
});

// Single player rpsls endpoint
app.get("/app/rpsls/", (req,res) => {
	res.json(rpsls());
});

// Defualt route
app.use(function(req, res){
	res.json({"message":"Endpoint not found. (404)"});
	res.status(404);
});
