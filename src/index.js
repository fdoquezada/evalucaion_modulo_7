import express  from 'express';
//const express = require('express');
//const {Pool}= require('pg');
//import {Pool} from 'pg'
import pg from 'pg';
//const chalk = require('chalk');
import chalk from 'chalk';
//const moment = require('moment');
import moment from 'moment'
import {dirname, join} from 'path';
import { fileURLToPath } from 'url';

const configuracion={
  user: "postgres",
  host: "localhost",
  database: "bancolosar",
  password:"1234"
}
const pool= new Pool(configuracion);

//iniciar express 

const app = express()

const __dirname = dirname(fileURLToPath(import.meta.url))
console.log(__dirmane);
//app.set('views, join(__dirname,'views'))
app.set('view engine', 'ejs')


app.get('/', (req, res) => res.renden('index'))

const port = 3000
app.listen(port, () => console.log(`Example app listening on port ${port}!`))