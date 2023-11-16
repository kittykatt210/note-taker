const express = require('express');
const apiRouter = require('./routes/apiRoutes');
const htmlRouter = require('./routes/htmlRoutes');
const PORT = process.env.PORT || 3006;

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(htmlRouter);
app.use(apiRouter);

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`)
});


