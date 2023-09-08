const express = require('express');
const path = require('path');
require('dotenv').config();
const cors = require('cors');

const calcTriangulation = require('./calc-triangulation');

const app = express();

app.use(cors());

const { PORT } = process.env;

app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`server is running on port ${PORT}`)
})

app.post('/triangulate-cone', (req, res) => {
    const { height, radius, segments } = req.body;

    if (radius <= 0 || segments < 3) {
        return res.status(400).json({ error: 'The radius must be greater than 0, and the number of segments must be at least 3.' });
    }
    
    const triangles = calcTriangulation(height, radius, segments);

    res.json({ triangles });
});