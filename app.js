const express = require('express')
const app = express();
const port = process.env.PORT || 3000;
// http://127.0.0.1:3000/
app.get('/service', (req, res)=> {req.status = on; res.send('The system is running [Status: ON'); );
app.listen(port, () => console.log('example app listening on port 3000'))