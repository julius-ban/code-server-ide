const exprees = require('express');
const app = exprees();
const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send('Server Response Success');
})

app.listen(PORT, () => {
    console.log(`Server On : http://localhost:${PORT}/`);
})