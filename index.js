const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
//import router
const userRoutes = require('./routes/user')

//app
const app = express();

//db
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => console.log('DB connected'))

//routes middleware
app.use('/api', userRoutes);

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Example app listening on port ${port}!`))