//imports
const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");
const cookieParser = require('cookie-parser');

require('dotenv').config();

// connecting server to db
require("./config/mongoose.config");

app.use(cookieParser());
// makes it so information that the client sends can be converted and read properly
app.use(cors({crendentials: true, origin: 'http://localhost:3000'}));
app.use(express.json(), express.urlencoded({ extended: true }));

require("./routes/user.routes")(app);

// starts up on server on 8000
app.listen(port, () => console.log(`Listening on port: ${port}`));