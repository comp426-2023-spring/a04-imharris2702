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
	console.log(`Server running on port ${HTTP_PORT}`)
});

// Root endpoint
app.get("/app", (req,res) => {
	res.send("200 OK");
	res.status(200);
});

// Single player rps endpoint
app.get("/app/rps", (req,res) => {
	res.json(rps());
});

// Single player rpsls endpoint
app.get("/app/rpsls", (req,res) => {
	res.json(rpsls());
});

// Multiplayer request body rps endpoint
app.post("/app/rps/play", (req,res) => {
	let shot = req.body.shot;
	res.json(rps(shot));
});

// Multiplayer request body rpsls endpoint
app.post("/app/rpsls/play", (req,res) => {
	let shot = req.body.shot;
	res.json(rpsls(shot));
});

// Multiplayer parameter rps endpoint
app.get("/app/rps/play/:shot", (req,res) => {
	res.json(rps(req.params.shot));
});

// Multiplayer parameter rpsls endpoint
app.get("/app/rpsls/play/:shot", (req,res) => {
	res.json(rpsls(req.params.shot));
});


// Defualt route
app.use(function(req, res){
	res.send("404 NOT FOUND");
	res.status(404);
});
