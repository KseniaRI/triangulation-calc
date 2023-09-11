const express = require('express');
require('dotenv').config();
const cors = require('cors');

const { calcTriangulation, calcSmoothTriangulation } = require('./calc-triangulation');

const app = express();

app.use(cors());
app.use(express.json());

const { PORT } = process.env;

app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`server is running on port ${PORT}`)
})

app.get('/', (req, res) => {
    res.send('Welcome to the Triangulation Calculator API');
});

app.post('/triangulate-cone', (req, res) => {
    const { height, radius, segments } = req.body;

    if (radius <= 0 || segments < 3) {
        return res.status(400).json({ error: 'The radius must be greater than 0, and the number of segments must be at least 3.' });
    }
    
    const triangles = calcTriangulation(height, radius, segments);

    return res.json({ triangles });
});

app.post('/smooth-cone', (req, res) => {
    const { height, radius, segments } = req.body;

    if (radius <= 0 || segments < 3) {
        return res.status(400).json({ error: 'The radius must be greater than 0, and the number of segments must be at least 3.' });
    }
    
    const triangles = calcSmoothTriangulation(height, radius, segments);

    return res.json({ triangles });
});