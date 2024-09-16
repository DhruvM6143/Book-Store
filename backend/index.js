import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bookRouter from './routes/Book.route.js';
import userRouter from './routes/user.route.js';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

dotenv.config();

const port = process.env.PORT || 4000
//connect to server
const URI = process.env.URL
try {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,

    })
    console.log("Connected to Db");
} catch (error) {
    console.log("error:", error);
}


app.use("/book", bookRouter);
app.use("/user", userRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})