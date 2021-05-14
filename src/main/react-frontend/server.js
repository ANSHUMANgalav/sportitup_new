'use strict';

const express = require('express');

const PORT = 3003;
const HOST = '0.0.0.0';

const app = express();
// app.get('/',(req,res)=> {
//     res.send('hello world');
//});
app.use(express.static("public"));

app.listen(PORT,HOST);
console.log('running on http://${HOST}:${PORT}');