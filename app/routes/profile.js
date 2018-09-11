'use strict';

import express from 'express';
import ProfileController from '../controllers/profile';
import ProfileMiddleware from '../middleware/profile';

const router = express.Router();
router.get('/', ProfileMiddleware.authCheck, ProfileController.index.get);

module.exports = router;
