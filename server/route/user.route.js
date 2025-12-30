import { Router } from 'express'
import { 
    loginUserController, 
    registerUserController, 
    verifyEmailController,
    authWithGoogle,
    checkAuthController,
    forgotPasswordController,
    verifyForgotPasswordOtp,
    changePasswordController, 
    resetpassword, 
    logoutController, 
    userDetails, 
    updateUserDetails, 
    userAvatarController, 
    removeImageFromCloudinary, 
    
} from '../controllers/user.controller.js'
import { auth } from '../middleware/auth.js';
import upload from '../middleware/multer.js';

const userRouter = Router();

userRouter.post('/register', registerUserController);
userRouter.post('/verifyEmail', verifyEmailController);
userRouter.post('/login', loginUserController);
userRouter.post('/authWithGoogle', authWithGoogle);
userRouter.post('/forgot-password/change-password', changePasswordController)
userRouter.post('/forgot-password', forgotPasswordController);
userRouter.post('/verify-forgot-password-otp', verifyForgotPasswordOtp);
userRouter.get('/check-auth', auth, checkAuthController); // Protected route
userRouter.put('/user-avatar',auth,upload.array('avatar'),userAvatarController);
userRouter.post('/logout', auth, logoutController);
userRouter.get('/user-details', auth, userDetails)
userRouter.put('/:id', auth, updateUserDetails)
userRouter.post('/reset-password', resetpassword)

// Delete image from cloudinary
userRouter.delete('/deteleImage', auth, removeImageFromCloudinary);

export default userRouter;