import jwt from 'jsonwebtoken';

export const auth = async (request, response, next) => {
    try {
        // Lấy token từ cookie
        const token = request.cookies.accessToken || request.cookies.refreshToken;

        console.log('=== AUTH MIDDLEWARE ===');
        console.log('Cookies:', request.cookies);
        console.log('Token found:', token ? 'yes' : 'no');

        if (!token) {
            return response.status(401).json({
                message: "Please login",
                error: true,
                success: false
            })
        }

        // Verify token
        const decode = await jwt.verify(token, process.env.SECRET_KEY_ACCESS_TOKEN);

        console.log('Token decoded:', decode);

        if (!decode) {
            return response.status(401).json({
                message: "Unauthorized access",
                error: true,
                success: false
            })
        }

        // Lưu user id vào request
        request.userId = decode.id;

        next();

    } catch (error) {
        console.log('Auth error:', error.message);
        // Nếu token hết hạn hoặc không hợp lệ
        if (error.name === 'TokenExpiredError') {
            return response.status(401).json({
                message: "Token expired, please login again",
                error: true,
                success: false
            });
        }
        if (error.name === 'JsonWebTokenError') {
            return response.status(401).json({
                message: "Invalid token, please login again",
                error: true,
                success: false
            });
        }
        return response.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}
