const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('Hi from the express app');
});

app.listen(8080, () => console.log('simple express app listening on 8080'));
