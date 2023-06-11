const mongoose = require("mongoose");

const dbName = "rhythmAndChords";

mongoose.connect(`mongodb://localhost/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {console.log(`Established a connection to the database called ${dbName}`)})
    .catch((err) => {console.log(`You had a problem connecting to the database ${dbName}`, err)});