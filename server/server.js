const exprees = require('express');
const app = exprees();
const api = require('./routes/index');
const cors = require('cors');

app.use(cors());
app.use('/api', api);

const port = 3002;
app.listen(port, ()=>console.log( ` ${port} ` ));