const express = require('express');
const app = express();

const courses = [
    {id: 1, name: 'course1' },
    {id: 2, name: 'course2' },
    {id: 1, name: 'course3' },

];
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/courses/' , (req,res) => {
    res.send(courses);
});


app.get('/api/courses/:id' , (req,res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('The course with the given ID was not found')
});


//Notes: PORT
//Notes: In terminal we set the port, so when we call pot it will run. In my terminal I typed export PORT=5000 to set the port.
const port = process.env.PORT || 3000
app.listen (port, () => console.log(`Listening on port... ${port}`));
