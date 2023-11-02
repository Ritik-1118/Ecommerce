import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import cors from "cors";
//configure env
dotenv.config();

//Database config
connectDB();
// rest object
const app = express();
app.use(cors());
const Port = process.env.PORT || 4000;

//middleware
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoutes);

//rest APIs
app.get("/", (req, res) => {
  res.send("Welcome to my Ecommerce App");
});

app.listen(Port, () => {
  console.log(`server runing at ${Port}`.green);
});
