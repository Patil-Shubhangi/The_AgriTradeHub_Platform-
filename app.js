const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes");

const app = express();
const PORT = 9000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200,
};

routes(app);

app.listen(PORT, () => {
    console.log(`Server is running on port $ { PORT }`);
});