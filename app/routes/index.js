'use strict';
import express from 'express';
import Controller from '../controllers';

const router = express.Router();

router.get('/', Controller.index.get);
module.exports = router;
