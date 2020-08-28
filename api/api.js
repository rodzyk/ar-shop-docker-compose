const express = require('express')
const fs = require('fs');
const app = express();
const port = 3080;


app.get('/api/products', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(fs.readFileSync('data/products.json', 'utf8'))
})

app.listen(port, () => {
    console.log(`AR Shop API app listening at http://localhost:${port}`)
})