import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from "./routes/authRoute.js"

//configure env
dotenv.config();

//Database config
connectDB();

// rest object
const app = express()
const PORT = process.env.PORT || 8080;

//middleware
app.use(express.json())
app.use(morgan('dev'))


//routes
app.use('/api/v1/auth',authRoutes);

//rest APIs
app.get('/',(req,res)=>{
    res.send('<h1 align="center">Welcome to my Ecommerce App</h1>')
})

app.listen(PORT,()=>{
    console.log(`Server running on ${process.env.ENV_MODE} mode at http://localhost:${PORT}`.bgCyan.white)
})