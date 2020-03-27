const express = require('express');

const app = express();

app.get('/', (request, response) => {
    'Hello World'
})

app.listen(3333);