const express = require('express');
const app = express(); 
const path = require("path");

app.use(express.static(__dirname))


app.listen(8000, () => { console.log('app is working') });