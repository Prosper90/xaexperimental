import { Router } from 'express';
import userRoutes from './user.js';
import transactionRoutes from './transactions.js';
import authRoutes from './auth.js'

const router = Router();

// Base route for API
router.get('/v1', (req, res) => {
    res.status(200).json({
        message: 'Welcome to  X-ARME API'
    });
});

// Mount user routes under /v1/user
router.use('/v1/user', userRoutes);
router.use('/v1/auth', authRoutes)
// Mount transaction routes under transactions
router.use('/v1/transactions', transactionRoutes);

export default router;
