import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cookieParser from 'cookie-parser';

import userRoutes from './routes/userRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';

const port = process.env.PORT;
connectDB();
const app = express();

// - **POST /api/users** -Register a user
// - **POST /api/users/auth** - Authenticate a user and get token
// - **POST /api/users/logout** - Logout user and clear cookie
// - **GET /api/users/profile** - Get user profile
// - **PUT /api/users/profile** - Update profile

// allow us to parse raw json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// add middleware
app.use(cookieParser());

app.use('/api/users', userRoutes);

app.get('/', (req, res)=> res.send('Server is ready'));

// middleware - custom error handler
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));