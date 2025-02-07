import express from 'express';
import {
  createAudit,
  getAuditResults
} from '../controllers/audit.controller.js';
import { verifyToken } from '../middleware/verifyToken.js';

const router = express.Router();

// POST /api/audits
router.post('/', verifyToken, createAudit);

// GET /api/audits/:id
router.get('/:id', verifyToken, getAuditResults);

export default router;
