const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('test ?'));

app.listen(4500, () => console.log('Example app listening on port 4500!'));