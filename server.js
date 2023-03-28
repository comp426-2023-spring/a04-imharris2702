import minimist from 'minimist';
import { rps, rpsls } from './lib/rpsls.js';
import express from 'express';

var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
