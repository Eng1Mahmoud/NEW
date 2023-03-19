const express = require('express');
require("dotenv").config()
const app = express();
const PORT = process.env.PORT || 3000

app.get('/', (req, res)=>{
res.send("hello world");
})

app.length(PORT,()=>console.log( `app listening on port ${PORT}`))