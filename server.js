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
