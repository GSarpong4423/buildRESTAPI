const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/courses/' , (req,res) => {
    res.send([1,2,3]);
});


app.get('/api/courses/:year/:month' , (req,res) => {
    res.send(req.query);
});


//Notes: PORT
//Notes: In terminal we set the port, so when we call pot it will run. In my terminal I typed export PORT=5000 to set the port.
const port = process.env.PORT || 3000
app.listen (port, () => console.log(`Listening on port... ${port}`));