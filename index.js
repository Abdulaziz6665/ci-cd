const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('okay'));

app.listen(4500, () => console.log('Example app listening on port 3000!'));