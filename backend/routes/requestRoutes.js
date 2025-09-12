import express from 'express';
import { createRequest, getClubRequests, updateRequestStatus } from '../controllers/requestController.js';

const router = express.Router();

// Create join request
router.post('/join', createRequest);
// Get requests for a club
router.get('/', getClubRequests);
// Update request status
router.patch('/:id', updateRequestStatus);

export default router;
