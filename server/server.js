const express = require(`express`);
const app = express();
const dotenv = require(`dotenv`);
dotenv.config();
const connectDB = require(`./config/database`);
const bodyparser = require(`body-parser`);
const cors = require("cors");

//routes
const staffRoutes = require(`./routes/staffRoutes`);

//connect db
connectDB();

//middleware
app.use(cors());
app.use(express.json());
app.use(bodyparser.json());

//route middleware
app.use(`/staff`, staffRoutes);

const PORT = process.env.PORT || 1080;
app.listen(PORT, console.log(`server started on port ${PORT}...`));