//imports
const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");

// connecting server to db
require("./config/mongoose.config");

// makes it so information that the client sends can be converted and read properly
app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));

require("./routes/user.routes")(app);

// starts up on server on 8000
app.listen(port, () => console.log(`Listening on port: ${port}`));





// require("dotenv").config();

// const jwt = require("jsonwebtoken");
// const payload = {
//     id: user._id
// };

// // notice that we're using the SECRET_KEY from our .env file
// const userToken = jwt.sign(payload, process.env.SECRET_KEY);

// const cookieParser = require('cookie-parser');
// app.use(cookieParser());
// // Change the app.use(cors()) to the one below
// app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));






