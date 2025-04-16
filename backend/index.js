import cookieParser from "cookie-parser";
import express from "express";
const app= express();
import cors from "cors";
import dotenv from "dotenv"
dotenv.config({});
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js"
import companyRoute from "./routes/company.route.js"
import jobRoute from "./routes/job.route.js"
import applicationRoute from "./routes/application.route.js"

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.use(cors({
    origin: 'http://localhost:5173',  // Allow requests from this origin
    credentials: true  // Allow cookies and headers to be sent
  }));

const PORT=process.env.PORT || 3000




app.use("/api/v1/user", userRoute)
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute)
app.use("/api/v1/application", applicationRoute);


app.listen(PORT,()=>
    {connectDB();
    console.log("Server started at 3000")}
);