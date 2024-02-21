import express from 'express';
import productRouter from './routes/product.route';
import userRouter from './routes/user.route';
import loginRouter from './routes/login.route';

const app = express();

app.use(express.json());
app.use('/products', productRouter);
app.use('/users', userRouter);
app.use('/login', loginRouter);

export default app;
