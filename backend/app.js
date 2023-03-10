import express  from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import userRouter from "./routes/user_routes";
import adminRouter from "./routes/admin_routes";
import movieRouter from "./routes/movie_routes";
import bookingsRouter from "./routes/booking_routes";
import cors from "cors";
dotenv.config();
const app= express()

//middlewares
app.use(express.json());
app.use("/user",userRouter);
app.use("/admin",adminRouter);
app.use("/movie",movieRouter);
app.use("/booking",bookingsRouter)
app.use(cors({"origin": "*",
"methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
"preflightContinue": false,
"optionsSuccessStatus": 204
}));


mongoose.connect(`mongodb+srv://admin:${process.env.Mongo_Password}@cluster0.rmqe3zu.mongodb.net/?retryWrites=true&w=majority`
)
.then(()=>app.listen(5000,()=>console.log("connected server to database")
)
)
.catch((e)=>console.log(e))

