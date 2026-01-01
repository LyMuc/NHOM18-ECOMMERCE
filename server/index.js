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

import userRouter from './route/user.route.js'
import categoryRouter from './route/category.route.js';
import productRouter from './route/product.route.js';
import cartRouter from './route/cart.route.js';
import myListRouter from './route/mylist.route.js';
import addressRouter from './route/address.route.js';
import homeSlidesRouter from './route/homeSlides.route.js';
import bannerV1Router from './route/bannerV1.route.js';
import bannerList2Router from './route/bannerList2.route.js';
import blogRouter from './route/blog.route.js';
import orderRouter from './route/order.route.js';
import logoRouter from './route/logo.route.js';

// Cấu hình Cloudinary SAU KHI dotenv đã load
configureCloudinary();

const app = express()

const defaultCorsOrigins = [
    'http://localhost:5173',
    'http://localhost:3000',
    'https://nhom18-ecommerce-frontend.onrender.com'
];

const envCorsOrigins = (process.env.CORS_ORIGINS || '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);

const allowedOrigins = envCorsOrigins.length > 0 ? envCorsOrigins : defaultCorsOrigins;

const isOriginAllowed = (origin) => {
    if (!origin) return true; // non-browser requests (curl/postman) won't send Origin
    if (allowedOrigins.includes('*')) return true;

    if (allowedOrigins.includes(origin)) return true;

    // Support wildcard host patterns like "*.onrender.com"
    const wildcardEntries = allowedOrigins.filter((entry) => entry.startsWith('*.'));
    if (wildcardEntries.length === 0) return false;

    let hostname;
    try {
        hostname = new URL(origin).hostname;
    } catch {
        return false;
    }

    return wildcardEntries.some((entry) => {
        const suffix = entry.slice(1); // ".onrender.com"
        return hostname.endsWith(suffix);
    });
};

// DEBUG: Log request origin để kiểm tra CORS
app.use((req, res, next) => {
    console.log(`[DEBUG] Method: ${req.method}, Origin: ${req.headers.origin}`);
    next();
});

// Cấu hình CORS để hỗ trợ credentials
app.use(cors({
    origin: (origin, callback) => {
        if (isOriginAllowed(origin)) return callback(null, true);
        return callback(new Error(`CORS blocked origin: ${origin}`));
    },
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
    
    app.use('/api/users',userRouter)
    app.use('/api/category',categoryRouter)
    app.use('/api/product',productRouter);
    app.use("/api/cart",cartRouter)
    app.use("/api/myList",myListRouter)
    app.use("/api/address",addressRouter)
    app.use("/api/homeSlides",homeSlidesRouter)
    app.use("/api/bannerV1",bannerV1Router)
    app.use("/api/bannerList2",bannerList2Router)
    app.use("/api/blog",blogRouter)
    app.use("/api/order",orderRouter)
    app.use("/api/logo",logoRouter)

    await connectDb();
    
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
};

startServer();