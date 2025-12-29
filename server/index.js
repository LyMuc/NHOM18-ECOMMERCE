// Load biến môi trường TRƯỚC TẤT CẢ các import khác
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet';
import connectDb from './config/connectDb.js';
import { configureCloudinary } from './config/cloudinaryConfig.js';

// Cấu hình Cloudinary SAU KHI dotenv đã load
configureCloudinary();

const app = express()

// Cấu hình CORS để hỗ trợ credentials
app.use(cors({
    origin: 'http://localhost:5173', // Frontend URL
    credentials: true, // Cho phép gửi cookie
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use(cookieParser());
// app.use(morgan('dev'));
app.use(helmet({
    crossOriginResourcePolicy: false
}));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({
        message: "Server is running on port " + process.env.PORT, 
    })
});

// Import routes sau khi đã cấu hình
const startServer = async () => {
    const userRoute = (await import('./route/user.route.js')).default;
    const addressRouter = (await import('./route/address.route.js')).default;
    app.use('/api/users', userRoute);
    app.use('/api/address', addressRouter);

    await connectDb();
    
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
};

startServer();