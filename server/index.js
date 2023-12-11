const express = require('express');
const dotenv = require('dotenv');

const dalleRoutes = require('./routes/dalle.routes.js');

const app = express();



dotenv.config()

app.use(express.json({limit: "50mb"}))

app.use("/api/v1/dalle", dalleRoutes);

app.listen(8080, () => console.log('Server has started on port 8080'))