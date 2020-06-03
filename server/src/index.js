const express = require('express');

const app = express();

app.get('/' , (request, response) => {
    return response.send('Teste FC')
})

app.listen(3333);