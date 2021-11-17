import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';


import postRoutes from './routes/posts.js';
import userRouter from "./routes/user.js";
import cartRouter from "./routes/cart.js";
import orderRouter from "./routes/order.js"
const app = express();
app.use(cors())
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use('/posts', postRoutes);
app.use("/user", userRouter);
app.use("/cart",cartRouter);
app.use("/order",orderRouter);
// connection staring
const CONNECTION_URL = 'mongodb+srv://mall:mall123@cluster0.tccjj.mongodb.net/mall?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 5000;
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
.catch((error) => console.log(`${error} did not connect`));

